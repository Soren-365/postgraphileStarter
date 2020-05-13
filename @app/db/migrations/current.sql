/*

This project is using Graphile Migrate to manage migrations; please be aware
the Graphile Migrate works in a different way to most other migration
frameworks:

- it's "up-only" (there are no down migrations)
- the current migration (this file) is executed every time it is saved
- it requires *significant discipline* as changes made in this file will
  persist locally even after they are deleted from the file

Because during development the current migration is expected to run multiple
times, the migration has to deal with both the situation where it _has_ been
executed before, and where it _hasn't_ been executed before.

You can (and should) read more on Graphile Migrate in its repository:

  https://github.com/graphile/migrate

You can absolutely switch out Graphile Migrate for a more traditional
migration framework if you prefer.

*/

--------------------------------------------------------------------------------

/*

What follows is an example of a table that could be created after setup is
complete. To use it uncomment the statements below and save the file -
graphile-migrate will update the schema into database automagically and
PostGraphile should automatically detect these changes and reflect them
through GraphQL which you should see immediately in GraphiQL.

Note any "DROP" statements should be at the top in reverse order of creation.
The reason for reverse order is because we could have references from the
second created resource to the first created resource. So your migration
might look something like this pseudo-example:

    DROP C;
    DROP B;
    DROP A;
    CREATE A;
    CREATE B REFERENCING A;
    CREATE C REFERENCING A;

We have to DROP B before DROP A because we have references that point to A
from B.

You can uncomment the following lines one block a time and safe the file to view
the changes.

**IMPORTANT**: when you uncomment the `CREATE TABLE` statements this will not
result in the table being added to the GraphQL API, this is because we are
using `ignoreRBAC: false` so we do not expose tables until you `GRANT` the
relevant operations on them. The tables will appear when you uncomment the
`GRANT` lines.

*/

-- CREATE EXTENSION "uuid-ossp";
-- CREATE SCHEMA troan_public;
-- SET search_path TO troan_public;

--//



drop table if exists app_public.user_feed_posts;
drop table if exists app_public.posts;
drop table if exists app_public.topics;

create table app_public.topics (
  title            text not null primary key
);
alter table app_public.topics enable row level security;

create table app_public.posts (
  id               serial primary key,
  author_id        uuid default app_public.current_user_id() references app_public.users(id) on delete set null,
  headline         text not null check (char_length(headline) < 280),
  body             text,
  topic            text not null references app_public.topics on delete restrict,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);
alter table app_public.posts enable row level security;
create index on app_public.posts (author_id);

create trigger _100_timestamps before insert or update on app_public.posts for each row execute procedure app_private.tg__timestamps();

grant
  select,
  insert (headline, body, topic),
  update (headline, body, topic),
  delete
on app_public.posts to :DATABASE_VISITOR;

create policy select_all on app_public.posts for select using (true);
create policy manage_own on app_public.posts for all using (author_id = app_public.current_user_id());
create policy manage_as_admin on app_public.posts for all using (exists (select 1 from app_public.users where is_admin is true and id = app_public.current_user_id()));

comment on table app_public.posts is 'A forum post written by a `User`.';
comment on column app_public.posts.id is 'The primary key for the `Post`.';
comment on column app_public.posts.headline is 'The title written by the `User`.';
comment on column app_public.posts.author_id is 'The id of the author `User`.';
comment on column app_public.posts.topic is 'The `Topic` this has been posted in.';
comment on column app_public.posts.body is 'The main body text of our `Post`.';
comment on column app_public.posts.created_at is 'The time this `Post` was created.';
comment on column app_public.posts.updated_at is 'The time this `Post` was last modified (or created).';

create table app_public.user_feed_posts (
  id               serial primary key,
  user_id          uuid not null references app_public.users on delete cascade,
  post_id          int not null references app_public.posts on delete cascade,
  created_at       timestamptz not null default now()
);
alter table app_public.user_feed_posts enable row level security;
create index on app_public.user_feed_posts (user_id);
create index on app_public.user_feed_posts (post_id);

grant select on app_public.user_feed_posts to :DATABASE_VISITOR;

create policy select_own on app_public.user_feed_posts for select using (user_id = app_public.current_user_id());

comment on table app_public.user_feed_posts is 'A feed of `Post`s relevant to a particular `User`.';
comment on column app_public.user_feed_posts.id is 'An identifier for this entry in the feed.';
comment on column app_public.user_feed_posts.created_at is 'The time this feed item was added.';


-- CREATE TABLE app_public.triptype (
--     "id"            SERIAL       NOT NULL UNIQUE
-- ,    "tripTypeName"   VARCHAR(128) NOT NULL
-- ,    "atAgency"        INT
-- ,    "lastModified"    TIMESTAMP
-- ,    "timeCreated"     TIMESTAMP DEFAULT NOW()
-- ,  CONSTRAINT triptype_pkey PRIMARY KEY ("atAgency", "tripTypeName") -- explicit pk
-- );

-- grant
--   select,
--   insert ("tripTypeName", "atAgency"),
--   update ("tripTypeName", "atAgency"),
--   delete
-- on app_public.triptype to :DATABASE_VISITOR;

-- // some comment here

-- CREATE TYPE area AS ENUM (
--     'Muntenia',
-- 	'Oltenia',
-- 	'Transilvania',
-- 	'Dobrogea',
-- 	'Banat',
-- 	'Moldova',
-- 	'Bucovina',
-- 	'Crisana',
-- 	'SatuMare',
-- 	'Maramures'
-- );

-- --//

-- CREATE TYPE medialocationplacement AS ENUM (
--   'mainImage',
--   'guideImage',
--   'mapImage',
--   'thumbnailImage',
--   'imageGallery1',
--   'imageGallery2',
--   'imageGallery3',
--   'imageGallery4',
--   'imageGallery5',
--   'imageGallery6',
--   'imageGallery7',
--   'imageGallery8',
--   'imageGallery9',
--   'imageGallery10'
-- );

-- --//

-- CREATE TYPE languages AS ENUM (
--     'German'
-- ,	'English'
-- ,	'Romanian'
-- ,	'Danish'
-- ,	'Israeli'
-- ,	'French'
-- ,	'Italian'
-- ,	'Spanish'
-- ,	'Russian'
-- ,	'Hungarian'
-- ,	'Turkish'
-- ,	'Polish'
-- ,	'Greek'
-- ,	'Bulgarian'
-- ,	'Serbian'
-- ,	'Swedish'
-- ,	'Norwegian'
-- ,	'Chinese'
-- ,	'Japanese'
-- ,	'Arabic'
-- );

-- --//

-- CREATE TYPE languageskill AS ENUM (
--     'Native'
-- ,	'Excellent'
-- ,	'Good'
-- ,	'Medium'
-- ,	'Basic'

--     );

--     --//




--    CREATE TYPE logcommand AS ENUM (
-- 	'ContactInfo'
-- ,	'DestinationResource'
-- ,	'TravelGroup'
-- ,	'TouristResource'
-- ,   'TripOfferResource'
-- ,	'Login'
-- ,	'Logout'
-- ,	'Tourist'
-- ,	'Guide'
-- ,   'GuideResource'
-- ,	'Agency'
-- ,   'User'
-- ,   'Publisher'
-- ,	'Bid'
-- ,   'PriceInfo'
-- ,   'HostResource'
-- ,   'EventResource'
-- ,   'Presentation'
-- ,   'AccomodationResource'
-- ,   'AccomodationCalendar'
-- ,   'TransportResource'
-- ,   'Review'
-- ,   'BookingCalendar'
-- ,	'Unknown'
-- );

-- --//

-- CREATE TYPE resourcetype AS ENUM (
--    	'TouristResource'
-- ,	'Tourist'
-- ,	'Agency'
-- ,	'Guide'
-- ,	'GuideResource'
-- ,	'EventResource'
-- ,	'TripOfferResource'
-- ,	'HostResource'
-- ,	'AccomodationResource'
-- ,	'CarResource'
-- ,   'DestinationResource'
-- ,   'TravelGroup'
-- ,	'Unknown'
-- );

-- --//

-- CREATE TYPE judet AS ENUM (
--   'Alba',
--   'Arad',
--   'Arges',
--   'Bacau',
--   'Bihor',
--   'BistritaNasaud',
--   'Botosani',
--   'Brasov',
--   'Braila',
--   'Buzau',
--   'CarasSeverin',
--   'Calarasi',
--   'Cluj',
--   'Constanta',
--   'Covasna',
--   'Dambovita',
--   'Dolj',
--   'Galati',
--   'Giurgiu',
--   'Gorj',
--   'Harghita',
--   'Hunedoara',
--   'Ialomita',
--   'Iasi',
--   'Ilfov',
--   'Maramures',
--   'Mehedinti',
--   'Mures',
--   'Neamt',
--   'Olt',
--   'Prahova',
--   'SatuMare',
--   'Salaj',
--   'Sibiu',
--   'Suceava',
--   'Teleorman',
--   'Timis',
--   'Tulcea',
--   'Vaslui',
--   'Valcea',
--   'Vrancea'
-- );

-- --//

-- CREATE TABLE usertable (
--      "id"          INT UNIQUE NOT NULL
-- ,    "firstName"       VARCHAR(50)
-- ,    "lastName"        VARCHAR(50)
-- ,    "userEmail"       VARCHAR(50) PRIMARY KEY
-- ,    "atAgency"        INT
-- ,    "isAdmin"         BOOLEAN
-- ,    "atGuide"         INT
-- ,    "atTourist"       INT
-- ,    "timeCreated"     TIMESTAMP DEFAULT NOW()
-- ,    "isActive"        BOOLEAN DEFAULT true
-- ,    "isRomanian"      BOOLEAN

-- );

-- CREATE INDEX ON usertable("id");
-- CREATE INDEX ON usertable("atTourist");
-- CREATE INDEX ON usertable("atAgency");
-- CREATE INDEX ON usertable("atGuide");

-- --//


-- CREATE TABLE account (
--    "id"    SERIAL primary key   ,
--    "emailHash"    TEXT,
--   "passwordHash" TEXT,
--   "sessionId"    TEXT,
--    "logins"        INTEGER
-- );

-- ALTER TABLE usertable
-- ADD FOREIGN KEY ("id") REFERENCES account("id");

-- --//



-- CREATE TABLE contact (
--     "id"         SERIAL primary key
-- ,    "firstName"         VARCHAR(64)
-- ,    "lastName"          VARCHAR(64)
-- ,    "associatedCompany" VARCHAR(128)
-- ,    "street"            VARCHAR(128)
-- ,    "city"              VARCHAR(64)
-- ,    "postCode"          VARCHAR(32)
-- ,    "country"           VARCHAR(32)
-- ,    "telephone"         VARCHAR(32)
-- ,    "email"             VARCHAR(32)
-- ,    "isCompany"         BOOLEAN
-- ,    "createdById"       INT
-- ,    "belongsToType"     resourcetype
-- ,    "belongsToId"              INT
-- ,    "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- );

-- CREATE INDEX ON contact("createdById");
-- CREATE INDEX ON contact("belongsToType");
-- --//


-- CREATE TABLE commandlogentry (
--     "id"       SERIAL primary key
-- ,    "atPublisher"        INT NOT NULL
-- ,	"belongsToType"		 resourcetype DEFAULT ('Unknown')
-- ,   "resourceId"         INT
-- ,	"logcommand"         logcommand NOT NULL
-- ,   "timeCommand"        TIMESTAMP	default now()
-- );

-- CREATE INDEX ON commandlogentry("atPublisher");





-- CREATE TABLE publisher (
--     "id"       SERIAL primary key
-- ,   "name"     VARCHAR(240)
-- , 	"createdById"           INT
-- , 	"belongsToId"        INT
-- , 	"belongsToType"     resourcetype
-- ,	"canReview"			BOOLEAN DEFAULT true
-- ,	"canPublish"		BOOLEAN DEFAULT true
-- ,	"isRomanian"        BOOLEAN
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,   "commandLogEntryId"		INT[]
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,   "timeCommand"        TIMESTAMP	default NOW()
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- );
--  ALTER TABLE commandlogentry
--  ADD FOREIGN KEY ("atPublisher") REFERENCES publisher("id");


-- CREATE INDEX ON publisher("createdById");
-- CREATE INDEX ON publisher("id");
-- CREATE INDEX ON publisher("commandLogEntryId");
-- CREATE INDEX ON publisher("belongsToType");

-- --//

-- CREATE TABLE geocoding (
--    "id"  SERIAL primary key
-- ,   "locationLat"  INT
-- ,   "locationLng"  INT
-- ,   "locationType" TEXT
-- ,   "placesId"     TEXT
-- ,   "formattedAdress"   TEXT
-- ,   "type"             TEXT
-- ,   "viewportNorthEastLat" INT
-- ,   "viewportNorthEastLng" INT
-- ,   "viewportSouthWestLat" INT
-- ,   "viewportSouthWestLng" INT
-- ,   "createdById"           INT NOT NULL REFERENCES usertable("id")
-- ,   "publishedById"         INT NOT NULL REFERENCES publisher
-- ,    "lastModified"       TIMESTAMP
-- ,   "timeCreated"           TIMESTAMP default NOW()
-- );

-- CREATE INDEX ON geocoding("createdById");
-- CREATE INDEX ON geocoding("publishedById");

-- --//

-- CREATE TABLE accounting (
--     "id"      SERIAL primary key
-- , 	"publisherId"            INT NOT NULL
-- ,	"paymentHistory"    VARCHAR(64)[]
-- ,	"abonamentActive"   BOOLEAN NOT NULL
-- ,	"lastPayment" 		DATE
-- ,	"lastPaymentAmount" VARCHAR(64)
-- ,	"abonamentExpires"  DATE
-- ,	"onYearlyPayment"   Boolean NOT NULL
-- ,	"onFreePeriod"      Boolean NOT NULL
-- ,	"freePeriodExpires" DATE
-- ,	"isRomanian"        BOOLEAN
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")

-- );

-- CREATE INDEX ON accounting("publisherId");

-- --//





-- CREATE TABLE presentation (
--     "id"          SERIAL primary key
-- ,	"headline"          VARCHAR(160)
-- ,	"publisherId"       INT NOT NULL
-- ,	"createdById"       INT NOT NULL
-- ,	"resourceType"		resourcetype NOT NULL
-- ,	"resourceTypeId"      INT NOT NULL
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,    "lastModified"     TIMESTAMP
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")

-- );

-- CREATE INDEX ON presentation("publisherId");

-- CREATE INDEX ON presentation("createdById");

-- --//



-- CREATE TABLE bid (
--     "id"             SERIAL primary key
-- ,	"publisherId"       INT[] NOT NULL
-- ,	"createdById"       INT[] NOT NULL
-- ,	"bidAmount"         MONEY[]
-- ,   "isActive"          BOOLEAN[] NOT NULL

-- ,   "timeCreated"       TIMESTAMP[] NOT NULL DEFAULT array[now()]

-- );

-- --//





-- CREATE TABLE auctioninfo (
--     "id"        SERIAL primary key
-- ,	"publishedById"       INT NOT NULL
-- ,	"createdById"       INT NOT NULL
-- ,	"advertisedPrice"   MONEY NOT NULL
-- ,	"currentHighBid"	MONEY
-- ,	"bidId"			INT
-- ,	"acceptsOffers"		BOOLEAN NOT NULL
-- ,	"auctionExpiry"		TIMESTAMP
-- ,   "isAuction"         BOOLEAN NOT NULL
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,   "atResourceType"	resourcetype NOT NULL
-- , 	"belongsToId"		        INT NOT NULL
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("publishedById") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- ,    FOREIGN KEY ("bidId") REFERENCES bid("id")

-- );

-- CREATE INDEX ON auctioninfo("publishedById");

-- CREATE INDEX ON auctioninfo("createdById");

-- CREATE INDEX ON auctioninfo("bidId");

-- --//



-- CREATE TABLE priceinfo (
--     "id"        SERIAL primary key
-- ,	"publisherId"       INT NOT NULL
-- ,	"createdById"       INT NOT NULL
-- ,	"advertisedPrice"   MONEY NOT NULL
-- ,	"currentHighBId"	MONEY
-- ,	"bidId"				INT
-- ,	"acceptsOffers"		BOOLEAN NOT NULL
-- ,	"auctionExpiry"		TIMESTAMP
-- ,   "isAuction"         BOOLEAN NOT NULL
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,   "atResourceType"	resourcetype NOT NULL
-- , 	"belongsToId"		        INT NOT NULL
-- ,    "lastModified"     TIMESTAMP

-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- ,    FOREIGN KEY ("bidId") REFERENCES bid("id")

-- );

-- CREATE INDEX ON priceinfo("publisherId");

-- CREATE INDEX ON priceinfo("createdById");

-- CREATE INDEX ON priceinfo("bidId");

-- --//



-- CREATE TABLE calendarentry (
--     "id" SERIAL primary key
-- ,   "fromTimestamp"     TIMESTAMP[] NOT NULL default array[now()]
-- ,   "toTimestamp"       TIMESTAMP[] NOT NULL default array[now()]
-- ,   "resourceType"      resourcetype[]
-- ,   "comment"           VARCHAR(200)[]
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
--  );



-- --//

-- 	CREATE TABLE timerange (
--     "id"       SERIAL primary key
-- ,   "fromTimestamp"     TIMESTAMP
-- ,   "toTimestamp"       TIMESTAMP
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
--  );

-- --//

-- CREATE TABLE bookingcalendar (
--     "id" SERIAL primary key
-- , 	"belongsToId"         INT
-- ,    "belongsToType"     resourcetype
-- ,	"createdById"       INT
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,   "fromTimestamp"     TIMESTAMP[] NOT NULL default array[now()]
-- ,   "toTimestamp"       TIMESTAMP[] NOT NULL default array[now()]
-- ,   "resourceType"      resourcetype[]
-- ,   "comment"           TEXT[]
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- );


-- CREATE INDEX ON bookingcalendar("belongsToId");
-- CREATE INDEX ON bookingcalendar("belongsToType");
-- CREATE INDEX ON bookingcalendar("createdById");


-- --//

-- CREATE TABLE accomodationresource (
--     "id"     SERIAL primary key
-- ,   "accomodationName"   VARCHAR(240)
-- , 	"contactId"          INT NOT NULL
-- ,	"addressId"			 INT NOT NULL
-- ,	"locatedIn"			 area
-- ,   "locationCalendarId" INT NOT NULL
-- ,   "tripTypeName"       VARCHAR(128)
-- ,	"publisherId"        INT NOT NULL
-- ,	"createdById"        INT NOT NULL
-- ,   "isActive"           BOOLEAN DEFAULT true
-- ,	"ownedByAt" 	     BOOLEAN DEFAULT false
-- ,	"presentationId"     INT NOT NULL
-- ,   "atAgency"            INT
-- ,   "atGuide"            INT
-- ,   "isPublic"          BOOLEAN DEFAULT true
-- ,    "lastModified"     TIMESTAMP
-- ,   "timeCreated"        TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("contactId") REFERENCES contact("id")
-- ,    FOREIGN KEY ("addressId") REFERENCES contact("id")
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- ,    FOREIGN KEY ("locationCalendarId") REFERENCES bookingcalendar("id")
-- ,    FOREIGN KEY ("presentationId") REFERENCES presentation("id")
-- ,    FOREIGN KEY ("atAgency", "tripTypeName") REFERENCES triptype("atAgency", "tripTypeName")

-- );

-- CREATE INDEX ON accomodationresource("contactId");

-- CREATE INDEX ON accomodationresource("tripTypeName");

-- CREATE INDEX ON accomodationresource("addressId");

-- CREATE INDEX ON accomodationresource("createdById");

-- CREATE INDEX ON accomodationresource("publisherId");

-- CREATE INDEX ON accomodationresource("presentationId");

-- CREATE INDEX ON accomodationresource("locationCalendarId");

-- CREATE INDEX ON accomodationresource("atAgency");

-- CREATE INDEX ON accomodationresource("atGuide");

-- --//

-- CREATE TABLE destinationresource (
--     "id" SERIAL primary key   ,
--     "destinationName" VARCHAR(240),
--     "publishedById" INT NOT NULL REFERENCES publisher,
--     "createdById" INT NOT NULL,
--     "area" area,
--     "judet" judet,
--     "tripTypeName" VARCHAR(128),
--     "isActive" BOOLEAN DEFAULT true,
--     "priceInfoId" INT,
--     "activeAtPeriodsId" INT,
--     "presentationId" INT,
--     "atAgency"  INT NOT NULL,
--     "geoCodingId" INT REFERENCES geocoding,
--     "isPublic" BOOLEAN NOT NULL DEFAULT true,
--     "lastModified" TIMESTAMP DEFAULT NOW(),
--        "lastModifiedBy" INT,
--     "timeCreated" TIMESTAMP DEFAULT NOW(),
--     FOREIGN KEY ("createdById") REFERENCES usertable("id"),
--    FOREIGN KEY ("lastModifiedBy") REFERENCES usertable("id"),
--     FOREIGN KEY ("presentationId") REFERENCES presentation("id"),
--     FOREIGN KEY ("activeAtPeriodsId") REFERENCES bookingcalendar("id"),
--     FOREIGN KEY ("priceInfoId") REFERENCES priceinfo("id"),
--     FOREIGN KEY ("atAgency", "tripTypeName") REFERENCES triptype("atAgency", "tripTypeName")

-- );

-- CREATE INDEX ON destinationresource("tripTypeName");

-- CREATE INDEX ON destinationresource("createdById");
-- CREATE INDEX ON destinationresource("lastModifiedBy");

-- CREATE INDEX ON destinationresource("presentationId");

-- CREATE INDEX ON destinationresource("activeAtPeriodsId");

-- CREATE INDEX ON destinationresource("priceInfoId");

-- CREATE INDEX ON destinationresource("geoCodingId");

-- CREATE INDEX ON destinationresource("publishedById");

-- CREATE INDEX ON destinationresource("atAgency");



-- --//

-- CREATE TABLE eventresource (
--     "id"          SERIAL primary key
-- ,   "eventName"         VARCHAR(180)
-- ,   "agencyName"        VARCHAR(180)
-- , 	"contactId"         INT NOT NULL
-- ,	"publisherId"       INT NOT NULL
-- ,	"createdById"       INT NOT NULL
-- ,	"locatedIn"			area
-- ,	"locationAddressId"  INT NOT NULL
--  ,  "tripTypeName" VARCHAR(128)
-- ,	"activeAtPeriodsId"   INT NOT NULL
-- ,	"ownedByAt"         BOOLEAN NOT NULL DEFAULT false
-- ,	"atAgency"			INT
-- ,	"atGuide"			INT
-- ,	"presentationId"    INT NOT NULL
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
-- ,    "lastModified"     TIMESTAMP
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("contactId") REFERENCES contact("id")
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- ,    FOREIGN KEY ("locationAddressId") REFERENCES contact("id")
-- ,    FOREIGN KEY ("activeAtPeriodsId") REFERENCES bookingcalendar("id")
-- ,    FOREIGN KEY ("presentationId") REFERENCES presentation("id")
-- ,      FOREIGN KEY ("atAgency", "tripTypeName") REFERENCES triptype("atAgency", "tripTypeName")

-- );
-- CREATE INDEX ON eventresource("tripTypeName");
-- CREATE INDEX ON eventresource("createdById");
-- CREATE INDEX ON eventresource("contactId");
-- CREATE INDEX ON eventresource("publisherId");
-- CREATE INDEX ON eventresource("presentationId");
-- CREATE INDEX ON eventresource("createdById");
-- CREATE INDEX ON eventresource("locationAddressId");
-- CREATE INDEX ON eventresource("activeAtPeriodsId");
-- CREATE INDEX ON eventresource("atGuide");
-- CREATE INDEX ON eventresource("atAgency");

-- --//





-- CREATE TABLE tripofferresource (
--     "id"          SERIAL primary key
-- ,   "tripOfferName"        VARCHAR(240)
-- ,	"publisherId"          INT NOT NULL
-- ,	"createdById"          INT NOT NULL
-- ,   "availableAtCalendarId"   INT NOT NULL
-- ,	"guideResponsibleId"     INT NOT NULL
-- ,	"guideSecondaryId"       INT
-- ,	"atAgency"             INT
-- ,	"priceInfoId"          INT NOT NULL
-- ,   "destinationId"        INT[] NOT NULL
-- ,	"isSigned"			  BOOLEAN NOT NULL
-- ,	"atGuide"             INT
-- ,   "isActive"             BOOLEAN DEFAULT true
-- ,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
-- ,    "lastModified"     TIMESTAMP
-- ,   "timeCreated"          TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- ,    FOREIGN KEY ("availableAtCalendarId") REFERENCES bookingcalendar("id")
-- ,    FOREIGN KEY ("priceInfoId") REFERENCES priceinfo("id")


-- );

-- CREATE INDEX ON tripofferresource("publisherId");

-- CREATE INDEX ON tripofferresource("createdById");

-- CREATE INDEX ON tripofferresource("availableAtCalendarId");

-- CREATE INDEX ON tripofferresource("priceInfoId");


-- CREATE INDEX ON tripofferresource("guideSecondaryId");

-- CREATE INDEX ON tripofferresource("guideResponsibleId");


-- CREATE INDEX ON tripofferresource("atAgency");

-- --//


-- CREATE TABLE roomcalendarentry (
--     "id" SERIAL primary key
-- ,   "atRoomCalendar"        INT
-- ,   "fromDate"              DATE[]
-- ,   "toDate"                DATE[]
-- ,   "comment"               VARCHAR(200)[]
-- ,   "timeCreated"           TIMESTAMP DEFAULT NOW()
--  );

--  CREATE INDEX ON roomcalendarentry("atRoomCalendar");

-- --//



-- CREATE TABLE roomcalendar (
--     "id"    SERIAL primary key
-- ,	"publisherId"       INT NOT NULL
-- ,	"createdById"       INT NOT NULL
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,	"calendarentryId" 	INT NOT NULL
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- ,    FOREIGN KEY ("calendarentryId") REFERENCES roomcalendarentry

-- );

-- ALTER TABLE roomcalendarentry
-- ADD FOREIGN KEY ("atRoomCalendar") REFERENCES roomcalendar("id");



-- CREATE INDEX ON roomcalendar("createdById");

-- CREATE INDEX ON roomcalendar("publisherId");

-- CREATE INDEX ON roomcalendar("calendarentryId");

-- --//


-- CREATE TABLE roomlist (
--     "id"        SERIAL primary key
-- ,    "atAccomodation"    INT NOT NULL
-- ,	"roomNames"			VARCHAR(128)
-- , 	"roomNumPeople"	    INT
-- , 	"roomCalendarId"    INT REFERENCES roomcalendar
-- ,	"roomPrices"		MONEY
-- ,   "roomActive"        BOOLEAN
-- ,    FOREIGN KEY ("atAccomodation") REFERENCES accomodationresource("id")

-- );


-- CREATE INDEX ON roomlist("atAccomodation");
-- CREATE INDEX ON roomlist("roomCalendarId");

-- --//


-- CREATE TABLE transportresource (
--     "id"       SERIAL primary key
-- ,   "transportName"     VARCHAR(240)
-- , 	"contactId"         INT NOT NULL
-- ,	"publisherId"       INT NOT NULL
-- ,	"createdById"       INT NOT NULL
-- ,	"locatedIn"			area NOT NULL
-- ,	"addressInfoId"		INT NOT NULL
-- ,	"atAgency"			INT
-- ,	"atGuide"			INT
-- ,	"ownedByAt"         BOOLEAN NOT NULL DEFAULT false
-- ,	"presentationId" 		INT
-- ,	"isBus"				BOOLEAN NOT NULL
-- ,	"numberOfPlaces"	INT NOT NULL
-- ,	"bookingCalendarId"	INT NOT NULL
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
-- ,    "lastModified"     TIMESTAMP
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("contactId") REFERENCES contact("id")
-- ,    FOREIGN KEY ("addressInfoId") REFERENCES contact("id")
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")

-- ,    FOREIGN KEY ("bookingCalendarId") REFERENCES bookingcalendar("id")
-- ,    FOREIGN KEY ("presentationId") REFERENCES presentation("id")

-- );

-- CREATE INDEX ON transportresource("contactId");
-- CREATE INDEX ON transportresource("addressInfoId");
-- CREATE INDEX ON transportresource("publisherId");
-- CREATE INDEX ON transportresource("createdById");
-- CREATE INDEX ON transportresource("bookingCalendarId");
-- CREATE INDEX ON transportresource("presentationId");

-- CREATE INDEX ON transportresource("atGuide");

-- CREATE INDEX ON transportresource("atAgency");

-- --//


-- CREATE TABLE review (
--     "id"     SERIAL primary key
-- ,	"publisherId"       INT NOT NULL
-- ,	"createdById"       INT NOT NULL
-- ,	"halfStars"			SMALLINT
-- ,	"reviewText"		TEXT
-- ,	"resourceType"		resourcetype NOT NULL
-- ,	"resourceId"		INT NOT NULL
-- ,	"publisherTarget" 	INT NOT NULL
-- ,	"startDateTripEvent"	DATE
-- ,	"byRomanian"        BOOLEAN
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- ,    FOREIGN KEY ("publisherTarget") REFERENCES publisher("id")

-- );

-- CREATE INDEX ON review("createdById");
-- CREATE INDEX ON review("publisherId");
-- CREATE INDEX ON review("publisherTarget");

-- --//


-- CREATE TABLE hostresource (
--     "id"    SERIAL primary key
-- ,   "hostResourceName"  VARCHAR(240)
-- , 	"contactId"         INT NOT NULL
-- ,	"publisherId"       INT NOT NULL
-- ,	"createdById"       INT NOT NULL
-- ,	"withAccomodation"  BOOLEAN NOT NULL
-- ,   "atAccomodation"	INT
-- ,   "atAgency"          INT
-- ,   "atGuide"         INT
-- ,    "tripTypeName" VARCHAR(128)
-- ,	"locatedIn"			area
-- ,	"addressInfoId"		INT NOT NULL
-- ,	"ownedByAt"         BOOLEAN NOT NULL DEFAULT false
-- ,	"presentationId" 		INT NOT NULL
-- ,   "bookingCalendarId"	INT NOT NULL
-- ,	"isRomanian"        BOOLEAN
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
-- ,    "lastModified"     TIMESTAMP
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("contactId") REFERENCES contact("id")
-- ,    FOREIGN KEY ("addressInfoId") REFERENCES contact("id")
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")

-- ,    FOREIGN KEY ("bookingCalendarId") REFERENCES bookingcalendar("id")
-- ,    FOREIGN KEY ("presentationId") REFERENCES presentation("id")
-- ,    FOREIGN KEY ("atAccomodation") REFERENCES accomodationresource("id")

-- );

-- CREATE INDEX ON hostresource("tripTypeName");
-- CREATE INDEX ON hostresource("contactId");
-- CREATE INDEX ON hostresource("addressInfoId");
-- CREATE INDEX ON hostresource("publisherId");
-- CREATE INDEX ON hostresource("createdById");
-- CREATE INDEX ON hostresource("bookingCalendarId");
-- CREATE INDEX ON hostresource("presentationId");
-- CREATE INDEX ON hostresource("atAccomodation");

-- CREATE INDEX ON hostresource("atAgency");

-- CREATE INDEX ON hostresource("atGuide");

-- --//


-- CREATE TABLE tourist (
--     "id"              SERIAL primary key
-- ,   "touristFirstName"       VARCHAR(64)
-- ,   "touristLastName"        VARCHAR(64)
-- , 	"contactId"              INT NOT NULL
-- ,	"publisherId"            INT NOT NULL
-- ,	"createdById"            INT NOT NULL
-- ,   "nativeLanguage"         languages
-- ,   "alternativeLanguage"    languages
-- ,	"touristOfferId"          INT NOT NULL
-- ,	"touristFavoriteId"       INT NOT NULL
-- ,	"touristBidId"            INT NOT NULL
-- ,	"touristDealId"           INT NOT NULL
-- ,	"guideReviewInIdPool"         INT[]
-- ,	"agencyReviewInIdPool"        INT[]
-- ,	"guideReviewOutIdPool"        INT[]
-- ,	"agencyReviewOutIdPool"       INT[]
-- ,   "timeCreated"            TIMESTAMP DEFAULT NOW()
-- ,   "atTravelGroup"          INT
-- ,   "isActive"               BOOLEAN DEFAULT true
-- ,   "isRomanian"             BOOLEAN NOT NULL
-- ,    FOREIGN KEY ("contactId") REFERENCES contact("id")
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")


-- );

-- CREATE INDEX ON tourist("contactId");
-- CREATE INDEX ON tourist("publisherId");
-- CREATE INDEX ON tourist("createdById");
-- CREATE INDEX ON tourist("touristOfferId");
-- CREATE INDEX ON tourist("touristFavoriteId");
-- CREATE INDEX ON tourist("touristDealId");
-- CREATE INDEX ON tourist("touristBidId");


-- ALTER TABLE usertable
-- ADD  FOREIGN KEY ("atTourist") REFERENCES tourist("id");

-- --//




-- CREATE TABLE languagelevel  (
--     "id"  SERIAL primary key
-- ,	"langauges"			languages NOT NULL
-- ,	"langaugesSkill"    languageskill NOT NULL
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,   "createdById"       INT NOT NULL
-- ,   "publisherId"       INT NOT NULL
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")

-- );


-- CREATE INDEX ON languagelevel("publisherId");

-- CREATE INDEX ON languagelevel("createdById");

-- --//


-- CREATE TABLE guideresource (
--     "id"          SERIAL primary key
-- ,   "guideResourceName"        VARCHAR(240)
-- ,	"publisherId"       INT NOT NULL
-- ,	"createdById"       INT NOT NULL
-- ,	"atGuide"         INT
-- ,	"timeRangeId"      INT
-- ,	"priceInfoId"		INT NOT NULL
-- ,	"atAgency"			INT
-- ,   "multipleTimeRange" BOOLEAN NOT NULL
-- ,   "bookingCalendarId" INT
-- ,	"isRomanian"        BOOLEAN
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
-- ,    "lastModified"     TIMESTAMP
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- ,    FOREIGN KEY ("bookingCalendarId") REFERENCES bookingcalendar("id")
-- ,    FOREIGN KEY ("timeRangeId") REFERENCES timerange("id")
-- ,    FOREIGN KEY ("priceInfoId") REFERENCES priceinfo("id")


-- );
-- CREATE INDEX ON guideresource("atAgency");
-- CREATE INDEX ON guideresource("atGuide");
-- CREATE INDEX ON guideresource("publisherId");
-- CREATE INDEX ON guideresource("createdById");
-- CREATE INDEX ON guideresource("bookingCalendarId");
-- CREATE INDEX ON guideresource("timeRangeId");
-- CREATE INDEX ON guideresource("priceInfoId");

-- --//


-- CREATE TABLE guide (
--     "id"           SERIAL primary key
-- ,    "name"            VARCHAR(240)
-- , 	"contactId"         INT NOT NULL
-- ,	"hasGuideLicence"   BOOLEAN NOT NULL
-- ,	"guideLicenceUrl"   VARCHAR(128)
-- ,	"publisherId"       INT NOT NULL
-- ,	"createdById"       INT NOT NULL
-- ,	"guideFirstName"    VARCHAR(64)
-- ,   "guideLastName"     VARCHAR(64)
-- ,	"hasOwnCompany"     BOOLEAN NOT NULL
-- ,	"atAgency"          INT
-- ,	"languageLevelId"    INT NOT NULL
-- ,	"areas"             area[] NOT NULL
-- ,    "tripTypeName" VARCHAR(128)
-- ,	"guideOfferId"     INT NOT NULL
-- ,	"guideBidId"       INT NOT NULL
-- ,	"guideFavoriteId"  INT NOT NULL
-- ,	"guideDealId"      INT NOT NULL
-- ,	"agencyReviewInIdPool"   INT[]
-- ,	"touristReviewInIdPool"  INT[]
-- ,	"agencyReviewOutIdPool"  INT[]
-- ,	"touristReviewOutIdPool"  INT[]
-- ,	"bookingCalendarId"     INT NOT NULL
-- ,	"hostIdPool"          INT[]
-- ,	"eventIdPool"         INT[]
-- ,	"accomodationIdPool"  INT[]
-- ,	"transportIdPool"     INT[]
-- ,    "lastModified"     TIMESTAMP
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
-- ,    FOREIGN KEY ("contactId") REFERENCES contact("id")
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- ,    FOREIGN KEY ("languageLevelId") REFERENCES languagelevel("id")
-- ,    FOREIGN KEY ("bookingCalendarId") REFERENCES bookingcalendar("id")


-- );

-- CREATE INDEX ON guide("tripTypeName");
-- CREATE INDEX ON guide("guideOfferId");
-- CREATE INDEX ON guide("guideBidId");
-- CREATE INDEX ON guide("guideDealId");
-- CREATE INDEX ON guide("guideBidId");
-- CREATE INDEX ON guide("guideFavoriteId");
-- CREATE INDEX ON guide("atAgency");
-- CREATE INDEX ON guide("contactId");
-- CREATE INDEX ON guide("publisherId");
-- CREATE INDEX ON guide("createdById");
-- CREATE INDEX ON guide("languageLevelId");
-- CREATE INDEX ON guide("bookingCalendarId");


-- ALTER TABLE tripofferresource
-- ADD FOREIGN KEY ("guideResponsibleId") REFERENCES guide("id");


-- ALTER TABLE tripofferresource
-- ADD FOREIGN KEY ("guideSecondaryId") REFERENCES guide("id");


-- ALTER TABLE hostresource
-- ADD FOREIGN KEY ("atGuide") REFERENCES guide("id");





-- ALTER TABLE eventresource
-- ADD FOREIGN KEY ("atGuide") REFERENCES guide("id");



-- ALTER TABLE accomodationresource
-- ADD FOREIGN KEY ("atGuide") REFERENCES guide("id");






-- ALTER TABLE transportresource
-- ADD FOREIGN KEY ("atGuide") REFERENCES guide("id");




-- ALTER TABLE guideresource
-- ADD FOREIGN KEY ("atGuide") REFERENCES guide("id");



-- ALTER TABLE usertable
-- ADD FOREIGN KEY ("atGuide") REFERENCES guide("id");

-- --//




-- CREATE TABLE agency (
--     "id"          SERIAL primary key
-- ,   "name"             VARCHAR(240) NOT NULL
-- , 	"contactId"         INT
-- ,	"activeInsurance"   BOOLEAN NOT NULL
-- ,	"insuranceUrl"      VARCHAR(128)
-- ,   "insuranceExpery"   DATE
-- ,	"publisherId"       INT
-- ,	"createdById"       INT NOT NULL
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,   "isPublic"          BOOLEAN DEFAULT true
-- ,	"agencyBidId"      INT
-- ,	"agencyFavoriteId" INT
-- ,	"agencyOfferId"    INT
-- ,	"agencyDealId"     INT
-- ,	"trustedPartnerIdPool"   INT[]
-- ,	"extendedNetworkIdPool"   INT[]
-- ,	"guideReviewInIdPool"    INT[]
-- ,	"agencyReviewInIdPool"   INT[]
-- ,	"touristReviewInIdPool"  INT[]
-- ,	"guideReviewOutIdPool"   INT[]
-- ,	"agencyReviewOutIdPool"  INT[]
-- ,	"touristReviewOutIdPool" INT[]
-- ,   "agencyMediaLibraryId"    INT
-- ,	"isRomanian"        BOOLEAN NOT NULL
-- ,	"bookingCalendarId"  INT
-- ,	"specializedAgency" resourcetype
-- ,    "lastModified"     TIMESTAMP
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("contactId") REFERENCES contact("id")
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- ,    FOREIGN KEY ("bookingCalendarId") REFERENCES bookingcalendar("id")



-- );

-- CREATE INDEX ON agency("contactId");
-- CREATE INDEX ON agency("publisherId");
-- CREATE INDEX ON agency("createdById");
-- CREATE INDEX ON agency("bookingCalendarId");
-- CREATE INDEX ON agency("agencyOfferId");
-- CREATE INDEX ON agency("agencyFavoriteId");
-- CREATE INDEX ON agency("agencyDealId");
-- CREATE INDEX ON agency("agencyMediaLibraryId");
-- CREATE INDEX ON agency("agencyBidId");

-- ALTER TABLE usertable
-- ADD  FOREIGN KEY ("atAgency") REFERENCES agency("id");

-- ALTER TABLE triptype
-- ADD  FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;

-- ALTER TABLE guide
-- ADD FOREIGN KEY ("atAgency") REFERENCES agency("id");


-- ALTER TABLE guideresource
-- ADD FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;

-- ALTER TABLE tripofferresource
-- ADD FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;

-- ALTER TABLE hostresource
-- ADD FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;

-- ALTER TABLE eventresource
-- ADD FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;


-- ALTER TABLE accomodationresource
-- ADD FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;


-- ALTER TABLE transportresource
-- ADD FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;

-- ALTER TABLE destinationresource
-- ADD FOREIGN KEY ("atAgency") REFERENCES agency("id") ON DELETE CASCADE;

-- --//



-- CREATE TABLE medialocation (
--         "id" INT UNIQUE  ,
--     "mediaLocationPlacement" medialocationplacement,
--     "atAgency"  INT REFERENCES agency("id"),
--     "atResource" INT NOT NULL,
--     "uploadLocationOriginal" TEXT UNIQUE,
--     "uploadLocationThumbnail" TEXT UNIQUE,
--     "uploadLocationMobile" TEXT UNIQUE,
--     "uploadLocationTablet" TEXT UNIQUE,
--     "uploadLocationDesktop" TEXT UNIQUE,
--     "uploadLocation2K" TEXT UNIQUE,
--     "signedUrlThumbnail" TEXT,
--     "signedUrlMobile" TEXT,
--     "signedUrlTablet" TEXT,
--     "signedUrlDesktop" TEXT,
--     "signedUrl2K" TEXT,
--     "signedUrlsUpdate" TIMESTAMP NOT NULL DEFAULT (NOW() + cast('1 day' as interval) * 6) CHECK ("signedUrlsUpdate" > NOW() AND "signedUrlsUpdate" < ("signedUrlsUpdate" + cast('1 day' as interval) * 7 )),
--     "timeCreated" TIMESTAMP default NOW(),
--     PRIMARY KEY("atAgency", "atResource", "mediaLocationPlacement")
-- );


-- -- CREATE INDEX on medialocation("uploadLocationOriginal");
-- -- CREATE INDEX on medialocation("uploadLocationThumbnail");
-- -- CREATE INDEX on medialocation("uploadLocationOriginal");
-- -- CREATE INDEX on medialocation("uploadLocationOriginal");
-- CREATE INDEX on medialocation("atAgency");
-- CREATE INDEX on medialocation("atResource");

-- --//


-- CREATE TABLE touristresource (
--     "id" SERIAL primary key
-- ,    "name"             VARCHAR(240)
-- , 	"contactId"         INT NOT NULL
-- ,	"publisherId"       INT NOT NULL
-- ,	"createdById"       INT NOT NULL
-- ,	"atTravelGroup"			INT
-- ,	"atAgency"			INT
-- ,	"atGuide"			INT
-- ,	"isSigned"			BOOLEAN NOT NULL
-- ,	"priceInfoId"    		INT NOT NULL
-- ,	"travellingCalendarId"	INT NOT NULL
-- ,	"isRomanian"        BOOLEAN
-- ,   "isActive"           BOOLEAN DEFAULT TRUE
-- ,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
-- ,    "lastModified"     TIMESTAMP
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("contactId") REFERENCES contact("id")
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("priceInfoId") REFERENCES priceinfo("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")

-- ,    FOREIGN KEY ("atAgency") REFERENCES agency("id")
-- ,    FOREIGN KEY ("atGuide") REFERENCES guide("id")
-- ,    FOREIGN KEY ("travellingCalendarId") REFERENCES bookingcalendar("id")

-- );

-- CREATE INDEX ON touristresource("contactId");
-- CREATE INDEX ON touristresource("publisherId");
-- CREATE INDEX ON touristresource("priceInfoId");
-- CREATE INDEX ON touristresource("createdById");

-- CREATE INDEX ON touristresource("atGuide");
-- CREATE INDEX ON touristresource("atAgency");

-- CREATE INDEX ON touristresource("atTravelGroup");
-- CREATE INDEX ON touristresource("travellingCalendarId");

-- --//


-- CREATE TABLE travelgroupresource (
--     "id"          SERIAL primary key
-- ,   "travelGroupName"        VARCHAR(240)
-- , 	"contactId"         INT NOT NULL
-- ,	"publisherId"       INT NOT NULL
-- ,	"createdById"       INT NOT NULL
-- ,	"numberOfAdults"    SMALLINT
-- ,	"numberOfChildren"  SMALLINT
-- ,	"customInfo"        TEXT[]
-- ,	"bookingCalendarId"	INT NOT NULL
-- ,	"atAgency"			INT
-- ,	"atGuide"			INT
-- ,	"language"			languages NOT NULL
-- ,	"atTripOfferResource" INT
-- ,	"atTouristResource"   INT NOT NULL
-- ,	"isRomanian"        BOOLEAN NOT NULL
-- ,   "isActive"          BOOLEAN DEFAULT TRUE
-- ,    "lastModified"     TIMESTAMP
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("contactId") REFERENCES contact("id")
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- ,    FOREIGN KEY ("bookingCalendarId") REFERENCES bookingcalendar("id")
-- ,    FOREIGN KEY ("atAgency") REFERENCES agency("id")
-- ,    FOREIGN KEY ("atGuide") REFERENCES guide("id")
-- ,    FOREIGN KEY ("atTripOfferResource") REFERENCES tripofferresource("id")
-- ,    FOREIGN KEY ("atTouristResource") REFERENCES touristresource("id")

-- );

-- ALTER TABLE touristresource
-- ADD FOREIGN KEY ("atTravelGroup") REFERENCES travelgroupresource("id");


-- CREATE INDEX ON travelgroupresource ("contactId");
-- CREATE INDEX ON travelgroupresource ("publisherId");
-- CREATE INDEX ON travelgroupresource ("createdById");
-- CREATE INDEX ON travelgroupresource ("bookingCalendarId");
-- CREATE INDEX ON travelgroupresource ("atAgency");
-- CREATE INDEX ON travelgroupresource ("atGuide");
-- CREATE INDEX ON travelgroupresource ("atTripOfferResource");
-- CREATE INDEX ON travelgroupresource ("atTouristResource");

-- CREATE TABLE agencyaccomodation (
--   "agencyId" INT NOT NULL,
--   "accomodationId" INT NOT NULL,
--   "lastModified" TIMESTAMP,
--   "urlExperyAt" TIMESTAMP NOT NULL CHECK (
--     ("urlExperyAt") > NOW()
--     AND ("urlExperyAt") < (("urlExperyAt") + cast('1 day' as interval) * 7)
--   ) -- OR interval '1' day * days_count;
-- ,
--   "presentationPlacements" TEXT[],
--   "agencyBucketUrls" TEXT[],
--   "timeCreated" TIMESTAMP DEFAULT NOW(),
--   PRIMARY KEY("agencyId", "accomodationId"),
--   FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE,
--   FOREIGN KEY ("accomodationId") REFERENCES accomodationresource("id") ON DELETE CASCADE
-- );
-- CREATE INDEX ON agencyaccomodation("accomodationId");
-- CREATE INDEX ON agencyaccomodation("agencyId");
-- CREATE INDEX ON agencyaccomodation("lastModified");
-- CREATE INDEX ON agencyaccomodation("urlExperyAt");

-- COMMENT ON COLUMN agencyaccomodation."urlExperyAt" is E'Upcoming Signed Url expery at amazon S3 bucket, (max value: now+7days)';
-- COMMENT ON COLUMN agencyaccomodation."agencyBucketUrls" is E'This is the Urls of the original image uploaded to Amazon agency bucket (needs also presentationPlacements!)';
-- COMMENT ON COLUMN agencyaccomodation."presentationPlacements" is E'This is the resource-specific placement names in the agency interface presentation';

-- --//

-- CREATE TABLE agencyevent (
--   "agencyId"     INT NOT NULL
-- ,	"eventId"    INT NOT NULL
-- ,  "timeCreated" TIMESTAMP DEFAULT NOW()
-- ,  PRIMARY KEY("agencyId", "eventId")
-- ,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
-- ,  FOREIGN KEY ("eventId") REFERENCES eventresource("id") ON DELETE CASCADE
-- );

-- CREATE INDEX ON agencyevent("eventId");

-- --//

-- CREATE TABLE agencyguide (
--   "agencyId"     INT NOT NULL
-- ,  "guideId"     INT NOT NULL
-- ,  "timeCreated" TIMESTAMP DEFAULT NOW()
-- ,  PRIMARY KEY("agencyId", "guideId")
-- ,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
-- ,  FOREIGN KEY ("guideId") REFERENCES guide("id") ON DELETE CASCADE
-- );

-- CREATE INDEX ON agencyguide("agencyId");
-- CREATE INDEX ON agencyguide("guideId");
-- CREATE INDEX ON agencyguide("agencyId", "guideId");

-- --//

-- CREATE TABLE agencyhost (
--   "agencyId"     INT NOT NULL
-- ,	"hostId"    INT NOT NULL
-- ,  "timeCreated" TIMESTAMP DEFAULT NOW()
-- ,  PRIMARY KEY("agencyId", "hostId")
-- ,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
-- ,  FOREIGN KEY ("hostId") REFERENCES hostresource("id") ON DELETE CASCADE
-- );
-- CREATE INDEX ON agencyhost("hostId");

-- --//

-- CREATE TABLE agencytourist (
--   "agencyId"     INT NOT NULL
-- ,	"touristId"     INT NOT NULL
-- ,  "timeCreated" TIMESTAMP DEFAULT NOW()
-- ,  PRIMARY KEY("agencyId", "touristId")
-- ,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
-- ,  FOREIGN KEY ("touristId") REFERENCES touristresource("id") ON DELETE CASCADE
-- );
-- CREATE INDEX ON agencytourist("agencyId");

-- --//

-- CREATE TABLE agencytransport (
--   "agencyId"     INT NOT NULL
-- ,	"transportId"     INT NOT NULL
-- ,  "timeCreated" TIMESTAMP DEFAULT NOW()
-- ,  PRIMARY KEY("agencyId", "transportId")
-- ,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
-- ,  FOREIGN KEY ("transportId") REFERENCES transportresource("id") ON DELETE CASCADE
-- );
-- CREATE INDEX ON agencytransport("transportId");

-- --//

-- CREATE TABLE agencytravelgroup (
--   "agencyId"        INT
-- ,  "travelGroupId"   INT
-- ,  "timeCreated" TIMESTAMP DEFAULT NOW()
-- ,  PRIMARY KEY("agencyId", "travelGroupId")
-- ,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
-- ,  FOREIGN KEY ("travelGroupId") REFERENCES travelgroupresource("id") ON DELETE CASCADE
-- );
-- CREATE INDEX ON agencytravelgroup("travelGroupId");

-- --//

-- CREATE TABLE agencytripoffer (
--   "agencyId"     INT NOT NULL
-- ,	"tripOfferId"     INT NOT NULL
-- ,  "timeCreated" TIMESTAMP DEFAULT NOW()
-- ,  PRIMARY KEY("agencyId", "tripOfferId")
-- ,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
-- ,  FOREIGN KEY ("tripOfferId") REFERENCES tripofferresource("id") ON DELETE CASCADE
-- );
-- CREATE INDEX ON agencytripoffer("tripOfferId");

-- --//

-- CREATE TABLE agencyuser (
--   "agencyId"     INT
-- ,	"userId"     INT
-- ,  "timeCreated" TIMESTAMP DEFAULT NOW()
-- ,  PRIMARY KEY("agencyId", "userId")
-- ,  FOREIGN KEY ("agencyId") REFERENCES agency("id") ON DELETE CASCADE
-- ,  FOREIGN KEY ("userId") REFERENCES usertable("id") ON DELETE CASCADE
-- );

-- CREATE INDEX ON agencyuser("userId");

-- --//

-- CREATE TABLE mediadestinationresource (
--         "id" INT UNIQUE  ,
--     "atAgency"  INT NOT NULL REFERENCES agency("id")  ON DELETE CASCADE,
--     "atDestination"  INT NOT NULL REFERENCES destinationresource("id") ON DELETE CASCADE,
--     "lastModified" TIMESTAMP DEFAULT NOW(),
--      "lastModifiedBy" INT,
--     "mainImage" INT REFERENCES medialocation("id"),
--     "mainImageSignedUrl" TEXT UNIQUE,
--     "guideImage" INT REFERENCES medialocation("id"),
--     "guideSignedUrl" TEXT UNIQUE,
--     "mapImage" INT REFERENCES medialocation("id"),
--     "mapImageSignedUrl" TEXT UNIQUE,
--     "thumbnailImage" INT REFERENCES medialocation("id"),
--     "thumbnailImageSignedUrl" TEXT UNIQUE,
--     "imageGallery1" INT REFERENCES medialocation("id"),
--     "imageGallery1SignedUrl" TEXT UNIQUE,
--     "imageGallery2" INT REFERENCES medialocation("id"),
--     "imageGallery2SignedUrl" TEXT UNIQUE,
--     "imageGallery3" INT REFERENCES medialocation("id"),
--     "imageGallery3SignedUrl" TEXT UNIQUE,
--     "imageGallery4" INT REFERENCES medialocation("id"),
--     "imageGallery4SignedUrl" TEXT UNIQUE,
--     "imageGallery5" INT REFERENCES medialocation("id"),
--     "imageGallery5SignedUrl" TEXT UNIQUE,
--     "imageGallery6" INT REFERENCES medialocation("id"),
--     "imageGallery6SignedUrl" TEXT UNIQUE,
--     "imageGallery7" INT REFERENCES medialocation("id"),
--     "imageGallery7SignedUrl" TEXT UNIQUE,
--     "imageGallery8" INT REFERENCES medialocation("id"),
--     "imageGallery8SignedUrl" TEXT UNIQUE,
--     "imageGallery9" INT REFERENCES medialocation("id"),
--     "imageGallery9SignedUrl" TEXT UNIQUE,
--     "imageGallery10" INT REFERENCES medialocation("id"),
--     "imageGallery10SignedUrl" TEXT UNIQUE,
--     "signedUrlsUpdate" TIMESTAMP NOT NULL DEFAULT (NOW() + cast('1 day' as interval) * 6) CHECK (
--         ("signedUrlsUpdate") > NOW()
--         AND ("signedUrlsUpdate") < (
--             ("signedUrlsUpdate") + cast('1 day' as interval) * 7
--         )
--     ),
--     "timeCreated" TIMESTAMP DEFAULT NOW(),
--     PRIMARY KEY("atAgency", "atDestination"),
--     FOREIGN KEY ("lastModifiedBy") REFERENCES usertable("id")
-- );

-- CREATE INDEX ON mediadestinationresource("signedUrlsUpdate");

-- CREATE INDEX ON mediadestinationresource("atAgency");
-- CREATE INDEX ON mediadestinationresource("atDestination");
-- CREATE INDEX ON mediadestinationresource("lastModifiedBy");
-- CREATE INDEX ON mediadestinationresource("lastModified");
-- CREATE INDEX ON mediadestinationresource("mainImage");
-- CREATE INDEX ON mediadestinationresource("guideImage");
-- CREATE INDEX ON mediadestinationresource("mapImage");
-- CREATE INDEX ON mediadestinationresource("thumbnailImage");
-- CREATE INDEX ON mediadestinationresource("imageGallery1");
-- CREATE INDEX ON mediadestinationresource("imageGallery2");
-- CREATE INDEX ON mediadestinationresource("imageGallery3");
-- CREATE INDEX ON mediadestinationresource("imageGallery4");
-- CREATE INDEX ON mediadestinationresource("imageGallery5");
-- CREATE INDEX ON mediadestinationresource("imageGallery6");
-- CREATE INDEX ON mediadestinationresource("imageGallery7");
-- CREATE INDEX ON mediadestinationresource("imageGallery8");
-- CREATE INDEX ON mediadestinationresource("imageGallery9");
-- CREATE INDEX ON mediadestinationresource("imageGallery10");



-- --//

-- CREATE TABLE agencyreview (
--     "id"          SERIAL primary key
-- ,	"publisherId"            INT NOT NULL
-- ,	"createdById"            INT NOT NULL
-- ,   "isActive"                BOOLEAN DEFAULT TRUE
-- ,	"halfStars"              SMALLINT
-- ,	"reviewText" 		     VARCHAR(1000)
-- ,	"agencyIdTarget"	     INT NOT NULL
-- ,	"startDateTripEvent"     DATE
-- ,	"byRomanian"             BOOLEAN
-- ,   "timeCreated"           TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("agencyIdTarget") REFERENCES agency("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- );


-- CREATE INDEX ON agencyreview("publisherId");
-- CREATE INDEX ON agencyreview("agencyIdTarget");
-- CREATE INDEX ON agencyreview("createdById");

-- --//


-- CREATE TABLE guidereview (
--     "id"     SERIAL primary key
-- ,	"publisherId"       INT NOT NULL
-- ,	"createdById"       INT NOT NULL
-- ,   "isActive"           BOOLEAN DEFAULT TRUE
-- ,	"halfStars"         SMALLINT
-- ,	"reviewText" 		VARCHAR(1000)
-- ,	"guideIdTarget"	    INT NOT NULL
-- ,	"startDateTripEvent"		DATE
-- ,	"byRomanian"        BOOLEAN
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("guideIdTarget") REFERENCES guide("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")

-- );

-- CREATE INDEX ON guidereview("publisherId");
-- CREATE INDEX ON guidereview("guideIdTarget");
-- CREATE INDEX ON guidereview("createdById");

-- --//

-- CREATE TABLE agencybid (
--     "id"            SERIAL primary key
-- ,   "agencyId"                INT REFERENCES agency("id")
-- ,   "touristResourceIdPool"  INT[]

-- );

-- CREATE INDEX ON agencybid("agencyId");

-- --//


-- CREATE TABLE agencymedialibrary (
--     "id"         INT UNIQUE  ,
--     "atAgency"          INT NOT NULL,
--     "uploadLocations"       TEXT[],
--     "locationSignedUrls"      TEXT[],
--     "signedUrlsUpdate"      TIMESTAMP[],
-- 	"lastModifiedBy"            INT NOT NULL,
--    "timeCreated"           TIMESTAMP DEFAULT NOW(),
--    "lastModified"           TIMESTAMP DEFAULT NOW(),
--     FOREIGN KEY ("atAgency") REFERENCES agency("id"),
--     FOREIGN KEY ("lastModifiedBy") REFERENCES usertable("id")
-- );


-- CREATE INDEX ON agencymedialibrary("atAgency");
-- CREATE INDEX ON agencymedialibrary("lastModifiedBy");
-- CREATE INDEX ON agencymedialibrary("lastModified");

-- --//

-- ALTER TABLE agency
-- ADD FOREIGN KEY ("agencyMediaLibraryId") REFERENCES agencymedialibrary("id");
-- CREATE TABLE agencydeal (
--     "id"                SERIAL primary key
-- ,	"tripOfferResourceIdPool"     INT[]
-- ,	"guideResourceIdPool"         INT[]
-- ,	"touristResouceIdPool"        INT[]
-- ,	"eventResourceIdPool"          INT[]
-- ,	"transportationResourceIdPool" INT[]
-- ,	"accomodationResourceIdPool"   INT[]
-- ,	"hostResourceIdPool"           INT[]
-- );

-- ALTER TABLE agency
-- ADD FOREIGN KEY ("agencyDealId") REFERENCES agencydeal("id");

-- --//


-- CREATE TABLE agencyfavorite (
--     "resourceId"   INT
-- ,   "resourceType"  resourcetype
-- ,   "atAgency"      INT REFERENCES agency
-- ,  PRIMARY KEY( "atAgency","resourceId", "resourceType")

-- );

-- CREATE INDEX ON agencyfavorite("resourceType");
-- CREATE INDEX ON agencyfavorite("resourceId");
-- CREATE INDEX ON agencyfavorite("atAgency");


-- CREATE TABLE agencyoffer (
--     "id"                   SERIAL primary key
-- ,	"tripsOfferesourceIdPool"         INT[]
-- ,	"guideResourceIdPool"             INT[]


-- );

-- ALTER TABLE agency
-- ADD FOREIGN KEY ("agencyOfferId") REFERENCES agencyoffer("id");

-- --//


-- CREATE TABLE date_ (
-- 	"useTimeStamp"  Boolean NOT NULL DEFAULT false
-- ,	"timeStamp"		TIMESTAMP
-- ,	"year"          CHAR(4)
-- ,	"month"         VARCHAR(10)
-- ,	"day"           VARCHAR(10)
-- ,	"allDayEvent"   BOOLEAN NOT NULL DEFAULT false
-- ,	"hour"         VARCHAR(2)
-- ,	"minute"       VARCHAR(2)
-- ,   "timeCreated"   TIMESTAMP DEFAULT NOW()
-- );

-- --//

-- CREATE TABLE guidebid (
--     "id"        SERIAL primary key
-- ,   "tripOfferIdPool"    INT[]

-- );

-- ALTER TABLE guide
-- ADD  FOREIGN KEY ("guideBidId") REFERENCES guidebid("id");

-- --//


-- CREATE TABLE guidedeal (
--     "id"               SERIAL primary key
-- ,	"tripsOfferResourceIdPool"     INT[]
-- ,	"agenciesRomanianIdPool"       INT[]
-- ,	"agenciesAbroadIdPool"         INT[]
-- ,	"touristResourceIdPool"          INT[]

-- );

-- ALTER TABLE guide
-- ADD   FOREIGN KEY ("guideDealId") REFERENCES guidedeal("id");

-- --//


-- CREATE TABLE guidefavorite (
--     "id"           SERIAL primary key
-- ,	"agenciesRomanianIdPool"     INT[]
-- ,	"agenciesAbroadIdPool"       INT[]
-- ,	"travelGroupResourceIdPool"  INT[]

-- );

-- ALTER TABLE guide
-- ADD   FOREIGN KEY ("guideFavoriteId") REFERENCES guidefavorite("id");

-- --//


-- CREATE TABLE guideoffer (
--     "id"                   SERIAL primary key
-- ,	"guideResourceIdPool"                  INT[]
-- ,	"transportResourceIdPool"        INT[]
-- ,	"hostResourceIdPool"             INT[]
-- ,	"accomodationResourceIdPool"     INT[]

-- );

-- ALTER TABLE guide
-- ADD  FOREIGN KEY ("guideOfferId") REFERENCES guideoffer("id");

-- --//


-- CREATE TABLE touristbid (
--     "id"                 SERIAL primary key
-- ,   "tripOfferResourceIdPool"      INT[]
-- ,	"eventResourceIdPool"          INT[]
-- ,	"transportationResourceIdPool" INT[]
-- ,	"accomodationResourceIdPool"   INT[]
-- ,	"hostResourceIdPool"           INT[]

-- );

-- ALTER TABLE tourist
-- ADD   FOREIGN KEY ("touristBidId") REFERENCES touristbid("id");

-- --//


-- CREATE TABLE touristdeal (
--     "id"               SERIAL primary key
-- ,	"tripsOfferResourceIdPool"     INT[]
-- ,   "guideOfferResourceIdPool"      INT[]
-- ,	"agenciesRomanianIdPool"       INT[]
-- ,	"agenciesAbroadIdPool"         INT[]
-- ,	"eventResourceIdPool"          INT[]
-- ,	"transportationResourceIdPool" INT[]
-- ,	"accomodationResourceIdPool"   INT[]
-- ,	"hostResourceIdPool"           INT[]

-- );

-- ALTER TABLE tourist
-- ADD   FOREIGN KEY ("touristDealId") REFERENCES touristdeal("id");

-- --//


-- CREATE TABLE touristfavorite (
--     "id"               SERIAL primary key
-- ,	"agenciesRomanianIdPool"       INT[]
-- ,	"agenciesAbroadIdPool"         INT[]
-- ,	"travelGroupResourceIdPool"    INT[]
-- ,	"tripsOfferResourceIdPool"     INT[]
-- ,	"guideResourceIdPool"          INT[]
-- ,	"eventResourceIdPool"          INT[]
-- ,	"transportationResourceIdPool" INT[]
-- ,	"accomodationResourceIdPool"   INT[]
-- ,	"hostResourceIdPool"           INT[]

-- );

-- ALTER TABLE tourist
-- ADD   FOREIGN KEY ("touristFavoriteId") REFERENCES touristfavorite("id");

-- --//


-- CREATE TABLE touristoffer (
--     "id"               SERIAL primary key
-- ,	"touristResourceIdPool"        INT[]

-- );

-- ALTER TABLE tourist
-- ADD FOREIGN KEY ("touristOfferId") REFERENCES touristoffer("id");

-- --//


-- CREATE TABLE touristreview (
--     "id"     SERIAL primary key
-- ,	"publisherId"       INT NOT NULL
-- ,	"createdById"       INT NOT NULL
-- ,   "isActive"          BOOLEAN DEFAULT true
-- ,	"halfStars"         SMALLINT NOT NULL
-- ,	"reviewText" 		VARCHAR(1000) NOT NULL
-- ,	"touristIdTarget"	INT NOT NULL
-- ,	"startDateTripEvent"		DATE NOT NULL
-- ,	"byRomanian"        BOOLEAN
-- ,   "timeCreated"       TIMESTAMP DEFAULT NOW()
-- ,    FOREIGN KEY ("publisherId") REFERENCES publisher("id")
-- ,    FOREIGN KEY ("touristIdTarget") REFERENCES tourist("id")
-- ,    FOREIGN KEY ("createdById") REFERENCES usertable("id")
-- );

-- CREATE INDEX ON touristreview("publisherId");
-- CREATE INDEX ON touristreview("touristIdTarget");
-- CREATE INDEX ON touristreview("createdById");

-- --//

-- CREATE TABLE similarbytriptypeaccomodation (
--   "accomodationIds" INT[],  -- resourceIds in one dimension, triptypes in the other   "tripTypeName"           VARCHAR(128),
--      "tripTypeName"           VARCHAR(128),
--   "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
--   "timeCreated" TIMESTAMP DEFAULT NOW(),
--   CONSTRAINT similartriptypeaccomodation_pkey PRIMARY KEY ("atAgency", "tripTypeName") -- explicit pk
-- );
-- CREATE INDEX ON similarbytriptypeaccomodation("tripTypeName");

-- --//

-- CREATE TABLE similarbytriptypedestination (
--   "destinationIds" INT[],  -- resourceIds in one dimension, resource types in the other (7-8 or so) [destinationres, eventres, accomodationres, hostres, transportres, guideres, tourist?, travelgroup?]
--     "tripTypeName" VARCHAR(128),
--   "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
--   "timeCreated" TIMESTAMP DEFAULT NOW(),
--   CONSTRAINT similartriptypedestination_pkey PRIMARY KEY ("atAgency", "tripTypeName") -- explicit pk
-- );
-- CREATE INDEX ON similarbytriptypedestination ("tripTypeName");

-- --//

-- CREATE TABLE similarbytriptypeevent (
--   "eventIds" INT[],  -- resourceIds in one dimension, resource types in the other (7-8 or so) [destinationres, eventres, accomodationres, hostres, transportres, guideres, tourist?, travelgroup?]
--     "tripTypeName" VARCHAR(128),
--   "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
--   "timeCreated" TIMESTAMP DEFAULT NOW(),
--   CONSTRAINT similartriptypeevent_pkey PRIMARY KEY ("atAgency", "tripTypeName") -- explicit pk
-- );
-- CREATE INDEX ON similarbytriptypeevent ("tripTypeName");

-- --//

-- CREATE TABLE similarbytriptypeguide (
--   "guideIds" INT[],  -- resourceIds in one dimension, resource types in the other (7-8 or so) [destinationres, eventres, accomodationres, hostres, transportres, guideres, tourist?, travelgroup?]
--    "tripTypeName"           VARCHAR(128),
--   "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
--   "timeCreated" TIMESTAMP DEFAULT NOW(),
--   CONSTRAINT similartriptypeguide_pkey PRIMARY KEY ("atAgency", "tripTypeName") -- explicit pk
-- );
-- CREATE INDEX ON similarbytriptypeguide ("tripTypeName");

-- --//

-- CREATE TABLE similarbytriptypehost (
--   "hostIds" INT[],  -- resourceIds in one dimension, resource types in the other (7-8 or so) [destinationres, eventres, accomodationres, hostres, transportres, guideres, tourist?, travelgroup?]
--     "tripTypeName" VARCHAR(128),
--   "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
--   "timeCreated" TIMESTAMP DEFAULT NOW(),
--   CONSTRAINT similartriptypehost_pkey PRIMARY KEY ("atAgency", "tripTypeName") -- explicit pk
-- );
-- CREATE INDEX ON similarbytriptypehost("tripTypeName");


-- --//

-- CREATE TABLE similarbytriptypetransport (
--   "transportIds" INT[],  -- resourceIds in one dimension, resource types in the other (7-8 or so) [destinationres, eventres, accomodationres, hostres, transportres, guideres, tourist?, travelgroup?]
--     "tripTypeName" VARCHAR(128),
--   "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
--   "timeCreated" TIMESTAMP DEFAULT NOW(),
--   CONSTRAINT similartriptypetransport_pkey PRIMARY KEY ("atAgency", "tripTypeName") -- explicit pk
-- );
-- CREATE INDEX ON similarbytriptypetransport ("tripTypeName");

-- --//

-- CREATE TABLE similarbytriptypetravelgroup (
--   "travelGroupIds" INT[],  -- resourceIds in one dimension, resource types in the other (7-8 or so) [destinationres, eventres, accomodationres, hostres, transportres, guideres, tourist?, travelgroup?]
--     "tripTypeName" VARCHAR(128),
--   "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
--   "timeCreated" TIMESTAMP DEFAULT NOW(),
--   CONSTRAINT similartriptypetravelgroup_pkey PRIMARY KEY ("atAgency", "tripTypeName") -- explicit pk
-- );
-- CREATE INDEX ON similarbytriptypetravelgroup ("tripTypeName");

-- --//

-- CREATE TABLE assocaccomodation (
--   "assocAccomodationId" INT[],
--   "accomodationId" INT REFERENCES accomodationresource ON DELETE CASCADE,
--   "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
--   "timeCreated" TIMESTAMP DEFAULT NOW(),
--   CONSTRAINT assocaccomodation_pkey PRIMARY KEY ("atAgency", "accomodationId") -- explicit pk
-- );
-- CREATE INDEX ON assocaccomodation("accomodationId");
-- CREATE INDEX ON assocaccomodation("atAgency");
-- CREATE INDEX ON assocaccomodation("atAgency", "accomodationId");

-- --//

-- CREATE TABLE assochost (
--   "assocHostId" INT[],
--   "hostId" INT REFERENCES hostresource ON DELETE CASCADE,
--   "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
--   "timeCreated" TIMESTAMP DEFAULT NOW(),
--   CONSTRAINT assochost_pkey PRIMARY KEY ("atAgency", "hostId") -- explicit pk
-- );
-- CREATE INDEX ON assochost("hostId");
-- CREATE INDEX ON assochost("atAgency");
-- CREATE INDEX ON assochost("atAgency", "hostId");

-- --//

-- CREATE TABLE assocguide (
--   "assocGuideId" INT[],
--   "guideId" INT REFERENCES guideresource ON DELETE CASCADE,
--   "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
--   "timeCreated" TIMESTAMP DEFAULT NOW(),
--   CONSTRAINT assocguide_pkey PRIMARY KEY ("atAgency", "guideId") -- explicit pk
-- );
-- CREATE INDEX ON assocguide("guideId");

-- --//

-- CREATE TABLE assoctransport (
--   "assocTransportId" INT[],
--   "transportId" INT REFERENCES transportresource ON DELETE CASCADE,
--   "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
--   CONSTRAINT assoctransport_pkey PRIMARY KEY ("atAgency", "transportId") -- explicit pk
-- );
-- CREATE INDEX ON assoctransport("transportId");

-- --//

-- CREATE TABLE assocevent (
--   "assocEventId" INT[],
--   "eventId" INT REFERENCES eventresource ON DELETE CASCADE,
--   "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
--   "timeCreated" TIMESTAMP DEFAULT NOW(),
--   CONSTRAINT assocevent_pkey PRIMARY KEY ("atAgency", "eventId") -- explicit pk
-- );
-- CREATE INDEX ON assocevent("eventId");

-- --//

-- create function create_bookingcalendar() returns trigger as $$
-- DECLARE

-- p1 INT := NEW."createdById" ;
-- p2 INT := NEW."id" ;
-- p3 resourcetype := 'Unknown';
-- tname TEXT := TG_NAME ;

-- BEGIN

-- IF tName='guide_create_bookingcalendar' THEN
--  p3 = 'Guide';
-- END IF;

-- IF tName='agency_create_bookingcalendar' THEN
--  p3 = 'Agency';
-- END IF;

-- IF tName='touristresource_create_bookingcalendar' THEN
--  p3 = 'TouristResource';
-- END IF;


-- IF tName='tourist_create_bookingcalendar' THEN
--  p3 = 'Tourist';
-- END IF;

-- IF tName='event_create_bookingcalendar' THEN
--  p3 = 'EventResource';
-- END IF;

-- IF tName='tripoffer_create_bookingcalendar' THEN
--  p3 = 'TripOfferResource';
-- END IF;


-- IF tName='guideresource_create_bookingcalendar' THEN
--  p3 = 'GuideResource';
-- END IF;

-- IF tName='host_create_bookingcalendar' THEN
--  p3 = 'HostResource';
-- END IF;

-- IF tName='accomodationresource_create_bookingcalendar' THEN
--  p3 = 'AccomodationResource';
-- END IF;

-- IF tName='carresource_create_bookingcalendar' THEN
--  p3 = 'CarResource';
-- END IF;

-- IF tName='destinationresource_create_bookingcalendar' THEN
--  p3 = 'DestinationResource';
-- END IF;

-- IF tName='travelgroup_create_bookingcalendar' THEN
--  p3 = 'TravelGroup';
-- END IF;



-- IF p1 IS NULL THEN
--     RAISE EXCEPTION 'createdById cannot be null in createCalendar';
-- END IF;

-- IF p2 IS NULL THEN
--     RAISE EXCEPTION 'id cannot be null in createCalendar';
-- END IF;

-- IF tName IS NULL THEN
--  p3 = 'Unknown';
-- END IF;



-- INSERT INTO bookingcalendar ("createdById", "belongsToId", "belongsToType")
--   VALUES
--   (p1, p2, p3);
--   RETURN NEW;
-- END;
-- $$ LANGUAGE 'plpgsql';

-- --//
-- create function create_contact() returns trigger as $$
-- DECLARE

-- p1 INT := NEW."createdById" ;
-- p2 INT := NEW."id" ;
-- p3 resourcetype := 'Unknown';
-- tname TEXT := TG_NAME ;

-- BEGIN


-- IF tName='guide_create_contact' THEN
--    p3 = 'Guide';
-- END IF;

-- IF tName='agency_create_contact' THEN
--    p3 = 'Agency';
-- END IF;

-- IF tName='touristresource_create_contact' THEN
--    p3 = 'TouristResource';
-- END IF;


-- IF tName='tourist_create_contact' THEN
--    p3 = 'Tourist';
-- END IF;

-- IF tName='event_create_contact' THEN
--    p3 = 'EventResource';
-- END IF;

-- IF tName='tripoffer_create_contact' THEN
--    p3 = 'TripOfferResource';
-- END IF;


-- IF tName='guideresource_create_contact' THEN
--    p3 = 'GuideResource';
-- END IF;

-- IF tName='host_create_contact' THEN
--    p3 = 'HostResource';
-- END IF;

-- IF tName='accomodationresource_create_contact' THEN
--    p3 = 'AccomodationResource';
-- END IF;

-- IF tName='carresource_create_contact' THEN
--    p3 = 'CarResource';
-- END IF;

-- IF tName='destinationresource_create_contact' THEN
--    p3 = 'DestinationResource';
-- END IF;

-- IF tName='travelgroup_create_contact' THEN
--    p3 = 'TravelGroup';
-- END IF;


-- IF p1 IS NULL THEN
--     RAISE EXCEPTION 'createdById cannot be null in createContact';
-- END IF;

-- IF p2 IS NULL THEN
--     RAISE EXCEPTION 'id cannot be null in createContact';
-- END IF;

-- IF tName IS NULL THEN
--    p3 = 'Unknown';
-- END IF;


-- INSERT INTO contact ("createdById", "belongsToId", "belongsToType")
--   VALUES
--   (p1, p2, p3);
--   RETURN NEW;
-- END;
-- $$ LANGUAGE 'plpgsql';

-- --//
-- create function create_publisher() returns trigger as $$
-- DECLARE
-- p1 INT := NEW."createdById" ;
-- p2 VARCHAR(240)  := NEW."name" ;
-- p3 INT  := NEW."id" ;
-- p4 resourcetype := 'Unknown';
-- tname TEXT := TG_NAME ;

-- BEGIN

-- IF p1 IS NULL THEN
--     RAISE EXCEPTION 'createdById cannot be null in createPublisher';
-- END IF;

-- IF p2 IS NULL THEN
--     RAISE EXCEPTION 'name cannot be null in createPublisher';
-- END IF;

-- IF tname IS NULL THEN
--     RAISE EXCEPTION 'tname cannot be null in createPublisher';
-- END IF;


-- IF tName='guide_create_publisher' THEN
--     p4 = 'Guide';
-- END IF;

-- IF tName='agency_create_publisher' THEN
--   p4 = 'Agency';
-- END IF;

-- IF tName='touristresource_create_publisher' THEN
--  p4 = 'TouristResource';
-- END IF;


-- IF tName='tourist_create_publisher' THEN
--  p4 = 'Tourist';
-- END IF;

-- INSERT INTO publisher ("createdById", "name", "belongsToId", "belongsToType")
--   VALUES
--   (p1, p2, p3, p4);
--   RETURN NEW;
-- END;
-- $$ LANGUAGE 'plpgsql';

-- --//
-- CREATE FUNCTION updateAgencyUser_func() RETURNS TRIGGER AS $$
-- DECLARE
-- p1 INT := NEW."id" ;
-- p2 INT := NEW."createdById" ;

-- BEGIN

-- IF p1 IS NULL THEN
--     RAISE EXCEPTION 'p1 cannot be null';
-- END IF;

-- IF p2 IS NULL THEN
--     RAISE EXCEPTION 'p2 cannot be null';
-- END IF;

--   INSERT INTO agencyuser ("agencyId", "userId")
--   VALUES
--   (p1, p2);

--   UPDATE usertable SET "atAgency"=p1 WHERE "id"=p2;

--   RETURN NEW;
-- END;
-- $$ LANGUAGE 'plpgsql';



-- -- CREATE TRIGGER updateAgencyUserINS
-- -- AFTER
-- -- INSERT ON usertable AS $$ BEGIN
-- -- SET
-- --   NOCOUNT ON;
-- -- INSERT INTO agencyuser(
-- --     "atAgency",
-- --     "accomodationId"
-- --   )
-- -- SELECT
-- --   i."atAgency",
-- --   i."accomodationId"
-- -- FROM inserted i
-- -- END;
-- -- $$ LANGUAGE 'plpgsql';
-- -- CREATE TRIGGER updateAgencyUserDEL
-- -- AFTER
-- --   DELETE ON usertable AS $$ BEGIN
-- -- SET
-- --   NOCOUNT ON;
-- -- DELETE FROM agencyuser("accomodationId")
-- -- SELECT
-- --   d."accomodationId"
-- -- FROM deleted d
-- -- END;
-- -- $$ LANGUAGE 'plpgsql';
-- -- -- CREATE TRIGGER updateAgencyUser AFTER INSERT
-- -- --     ON usertable
-- -- --     EXECUTE PROCEDURE updateAgencyUser_func("atAgency", "userId");

-- --//

-- CREATE FUNCTION updatemediadestination_func()  RETURNS TRIGGER AS $$
-- DECLARE
-- p1 INT := NEW."atAgency" ;
-- p2 INT := NEW."id" ;
-- p3 timestamp := NEW."lastModified" ;

-- BEGIN

-- IF p1 IS NULL THEN
--     RAISE EXCEPTION 'p1 cannot be null';
-- END IF;

-- IF p2 IS NULL THEN
--     RAISE EXCEPTION 'p2 cannot be null';
-- END IF;

-- IF p3 IS NULL THEN
--     RAISE EXCEPTION 'p3 cannot be null';
-- END IF;


--   INSERT INTO mediadestinationresource ("atAgency", "atDestination", "lastModified")
--   VALUES
--   (p1, p2, p3);
--   RETURN NEW;
-- END;
-- $$ LANGUAGE 'plpgsql';

-- --//



-- create function set_time_created() returns trigger as $$
-- begin
--   new."timeCreated" := current_timestamp;
--   return new;
-- end;
-- $$ language plpgsql;

-- --//
-- CREATE TABLE assocdestination (
--   "assocDestinationId" INT[],
--   "destinationId" INT REFERENCES destinationresource ON DELETE CASCADE,
--   "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
--   "timeCreated" TIMESTAMP DEFAULT NOW(),
--   CONSTRAINT assocdestination_pkey PRIMARY KEY ("atAgency", "destinationId") -- explicit pk
-- );
-- CREATE INDEX ON assocdestination("destinationId");

-- --//

-- CREATE TABLE assoctravelgroup (
--   "assocTravelGroupId" INT[],
--   "travelGroupId" INT REFERENCES travelgroupresource ON DELETE CASCADE,
--   "atAgency"  INT REFERENCES agency ON DELETE CASCADE,
--   "timeCreated" TIMESTAMP DEFAULT NOW(),
--   CONSTRAINT assoctravelgroup_pkey PRIMARY KEY ("atAgency", "travelGroupId") -- explicit pk
-- );
-- CREATE INDEX ON assoctravelgroup("travelGroupId");

-- --//

-- --//

-- --// with SERIAL primary keys

-- --  INSERT INTO account("id") VALUES(1);

-- --  INSERT INTO usertable("id","userEmail") VALUES(1,'ss');

-- -- INSERT INTO agency("name","id","activeInsurance","insuranceExpery","createdById","isActive","isRomanian","lastModified") VALUES('Hemmingways construnction tours',1,false,'2020-03-20 18:45:45',1,true,true,'2000-10-10 08:08:19');


-- --//

-- --// with uuid s

-- -- INSERT INTO account("id") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');

-- -- INSERT INTO usertable("id","userEmail") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','sorens@gmail.com');

-- -- INSERT INTO contact("id","createdById","belongsToType","belongsToId") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','Guide','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');

-- -- INSERT INTO publisher("id","createdById","publisherId","isAgency","isTourist","isGuide","command") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12','true','false','false',ARRAY['Guide']::logcommand[]);

-- -- INSERT INTO calendarentry("id","comment") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14',ARRAY['THis is freakin marvelous']);

-- -- INSERT INTO bookingcalendar("id","id","publisherId","createdById","id") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14');

-- -- INSERT INTO agency("agencyName","id","activeInsurance","insuranceExpery","publisherId","createdById","isActive","isRomanian","bookingCalendarId","lastModified") VALUES('Hemmingways construnction tours','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',false,'2020-03-20 18:45:45','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',true,true,'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14','2000-10-10 08:08:19');


-- -- --//



-- create function set_last_modified() returns trigger as $$
-- begin
--   new."lastModified" := current_timestamp;
--   return new;
-- end;
-- $$ language plpgsql;

-- --//
--   create trigger travelgroupresource_create_bookingcalendar after insert
--   on travelgroupresource
--   for each row
--   execute procedure create_bookingcalendar();

--   --//

--   create trigger guideresource_create_bookingcalendar after insert
--   on guideresource
--   for each row
--   execute procedure create_bookingcalendar();

--   --//

-- create trigger transportresource_create_bookingcalendar after insert
--   on transportresource
--   for each row
--   execute procedure create_bookingcalendar();

--   --//

-- create trigger hostresource_create_bookingcalendar after insert
--   on hostresource
--   for each row
--   execute procedure create_bookingcalendar();

--   --//

-- create trigger tourist_create_bookingcalendar after insert
--   on touristresource
--   for each row
--   execute procedure create_bookingcalendar();

--   --//
-- create trigger destinationresource_create_bookingcalendar after insert
--   on destinationresource
--   for each row
--   execute procedure create_bookingcalendar();

--   --//

-- create trigger eventresource_create_bookingcalendar after insert
--   on eventresource
--   for each row
--   execute procedure create_bookingcalendar();

--   --//

-- create trigger tripofferresource_create_bookingcalendar after insert
--   on tripofferresource
--   for each row
--   execute procedure create_bookingcalendar();

--   --//

-- create trigger accomodationresource_create_bookingcalendar after insert
--   on accomodationresource
--   for each row
--   execute procedure create_bookingcalendar();

--   --//

-- create trigger guide_create_bookingcalendar after insert
--   on guide
--   for each row
--   execute procedure create_bookingcalendar();

--   --//

-- create trigger agency_create_bookingcalendar after insert
--   on agency
--   for each row
--   execute procedure create_bookingcalendar();

--   --//


-- create trigger touristresource_create_bookingcalendar after insert
--   on touristresource
--   for each row
--   execute procedure create_bookingcalendar();

--   --//



-- create trigger guide_create_contact after insert
--   on guide
--   for each row
--   execute procedure create_contact();

--   --//

-- create trigger agency_create_contact after insert
--   on agency
--   for each row
--   execute procedure create_contact();

--   --//




-- create trigger touristresource_create_contact after insert
--   on touristresource
--   for each row
--   execute procedure create_contact();

--   --//


-- create trigger accomodationresource_create_contact after insert
--   on accomodationresource
--   for each row
--   execute procedure create_contact();

--   --//


-- create trigger eventresource_create_contact after insert
--   on eventresource
--   for each row
--   execute procedure create_contact();

--   --//


-- create trigger transportresource_create_contact after insert
--   on transportresource
--   for each row
--   execute procedure create_contact();

--   --//



-- create trigger hostresource_create_contact after insert
--   on hostresource
--   for each row
--   execute procedure create_contact();

--   --//

-- create trigger tourist_create_contact after insert
--   on tourist
--   for each row
--   execute procedure create_contact();

--   --//


-- create trigger travelgroupresource_create_contact after insert
--   on travelgroupresource
--   for each row
--   execute procedure create_contact();

--   --//
-- create trigger triptype_last_modified before update
--   on triptype
--   for each row
--   execute procedure set_last_modified();

--   --//

-- create trigger geocoding_last_modified before update
--   on geocoding
--   for each row
--   execute procedure set_last_modified();

--   --//

--   create trigger presentation_last_modified before update
--   on presentation
--   for each row
--   execute procedure set_last_modified();

--   --//

-- create trigger priceinfo_last_modified before update
--   on priceinfo
--   for each row
--   execute procedure set_last_modified();

--   --//

-- create trigger accomodationresource_last_modified before update
--   on accomodationresource
--   for each row
--   execute procedure set_last_modified();

--   --//

-- create trigger destinationresource_last_modified before update
--   on destinationresource
--   for each row
--   execute procedure set_last_modified();

--   --//

-- create trigger eventresource_last_modified before update
--   on eventresource
--   for each row
--   execute procedure set_last_modified();

--   --//

-- create trigger tripofferresource_last_modified before update
--   on tripofferresource
--   for each row
--   execute procedure set_last_modified();

--   --//

-- create trigger transportresource_last_modified before update
--   on transportresource
--   for each row
--   execute procedure set_last_modified();

--   --//

-- create trigger hostresource_last_modified before update
--   on hostresource
--   for each row
--   execute procedure set_last_modified();

--   --//

-- create trigger guideresource_last_modified before update
--   on guideresource
--   for each row
--   execute procedure set_last_modified();

--   --//

-- create trigger guide_last_modified before update
--   on guide
--   for each row
--   execute procedure set_last_modified();

--   --//

-- create trigger agency_last_modified before update
--   on agency
--   for each row
--   execute procedure set_last_modified();

--   --//

-- create trigger touristresource_last_modified before update
--   on touristresource
--   for each row
--   execute procedure set_last_modified();

--   --//

--   create trigger travelgroupresource_last_modified before update
--   on travelgroupresource
--   for each row
--   execute procedure set_last_modified();

--   --//

--   create trigger agencyaccomodation_last_modified before update
--   on agencyaccomodation
--   for each row
--   execute procedure set_last_modified();

--   --//

--   create trigger mediadestinationresource_last_modified before update
--   on mediadestinationresource
--   for each row
--   execute procedure set_last_modified();

--   --//

--   create trigger agencymedialibrary_last_modified before update
--   on agencymedialibrary
--   for each row
--   execute procedure set_last_modified();

--   --//



-- create trigger guide_create_publisher after insert
--   on guide
--   for each row
--   execute procedure create_publisher();

--   --//

-- create trigger agency_create_publisher after insert
--   on agency
--   for each row
--   execute procedure create_publisher();

--   --//


-- create trigger touristresource_create_publisher after insert
--   on touristresource
--   for each row
--   execute procedure create_publisher();

--   --//
-- create trigger triptype_time_created before insert
--   on triptype
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger usertable_time_created before insert
--   on usertable
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger contact_time_created before insert
--   on contact
--   for each row
--   execute procedure set_time_created();

--   --//

--    create trigger publisher_time_created before insert
--   on publisher
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger geocoding_time_created before insert
--   on geocoding
--   for each row
--   execute procedure set_time_created();

--   --//
--   create trigger accounting_time_created before insert
--   on accounting
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger bid_time_created before insert
--   on bid
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger auctioninfo_time_created before insert
--   on auctioninfo
--   for each row
--   execute procedure set_time_created();

--   --//

--     create trigger presentation_time_created before insert
--   on presentation
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger priceinfo_time_created before insert
--   on priceinfo
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger calendarentry_time_created before insert
--   on calendarentry
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger timerange_time_created before insert
--   on timerange
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger bookingcalendar_time_created before insert
--   on bookingcalendar
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger accomodationresource_time_created before insert
--   on accomodationresource
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger destinationresource_time_created before insert
--   on destinationresource
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger eventresource_time_created before insert
--   on eventresource
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger tripofferresource_time_created before insert
--   on tripofferresource
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger roomcalendarentry_time_created before insert
--   on roomcalendarentry
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger roomcalendar_time_created before insert
--   on roomcalendar
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger transportresource_time_created before insert
--   on transportresource
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger review_time_created before insert
--   on review
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger hostresource_time_created before insert
--   on hostresource
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger tourist_time_created before insert
--   on touristresource
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger languagelevel_time_created before insert
--   on languagelevel
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger guideresource_time_created before insert
--   on guideresource
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger guide_time_created before insert
--   on guide
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger agency_time_created before insert
--   on agency
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger medialocation_time_created before insert
--   on medialocation
--   for each row
--   execute procedure set_time_created();

--   --//

-- create trigger touristresource_time_created before insert
--   on touristresource
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger travelgroupresource_time_created before insert
--   on travelgroupresource
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger agencyaccomodation_time_created before insert
--   on agencyaccomodation
--   for each row
--   execute procedure set_time_created();

--   --//

--     create trigger agencyevent_time_created before insert
--   on agencyevent
--   for each row
--   execute procedure set_time_created();

--   --//

--     create trigger agencyguide_time_created before insert
--   on agencyguide
--   for each row
--   execute procedure set_time_created();

--   --//

--     create trigger agencyhost_time_created before insert
--   on agencyhost
--   for each row
--   execute procedure set_time_created();

--   --//

--     create trigger agencytourist_time_created before insert
--   on agencytourist
--   for each row
--   execute procedure set_time_created();

--   --//

--     create trigger agencytransport_time_created before insert
--   on agencytransport
--   for each row
--   execute procedure set_time_created();

--   --//

--     create trigger agencytravelgroup_time_created before insert
--   on agencytravelgroup
--   for each row
--   execute procedure set_time_created();

--   --//

--     create trigger agencytripoffer_time_created before insert
--   on agencytripoffer
--   for each row
--   execute procedure set_time_created();

--   --//

--     create trigger agencyuser_time_created before insert
--   on agencyuser
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger mediadestinationresource_time_created before insert
--   on mediadestinationresource
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger agencyreview_time_created before insert
--   on agencyreview
--   for each row
--   execute procedure set_time_created();

--   --//


--   create trigger guidereview_time_created before insert
--   on guidereview
--   for each row
--   execute procedure set_time_created();

--   --//


--   create trigger date_time_created before insert
--   on date_
--   for each row
--   execute procedure set_time_created();

--   --//


--   create trigger touristreview_time_created before insert
--   on touristreview
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger agencymedialibrary_time_created before insert
--   on agencymedialibrary
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger similarbytriptypeaccomodation_time_created before insert
--   on similarbytriptypeaccomodation
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger similarbytriptypeevent_time_created before insert
--   on similarbytriptypeevent
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger similarbytriptypeguide_time_created before insert
--   on similarbytriptypeguide
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger similarbytriptypehost_time_created before insert
--   on similarbytriptypehost
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger similarbytriptypetransport_time_created before insert
--   on similarbytriptypetransport
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger similarbytriptypetravelgroup_time_created before insert
--   on similarbytriptypetravelgroup
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger assocaccomodation_time_created before insert
--   on assocaccomodation
--   for each row
--   execute procedure set_time_created();

--   --//


--   create trigger assocguide_time_created before insert
--   on assocguide
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger assochost_time_created before insert
--   on assochost
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger assocevent_time_created before insert
--   on assocevent
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger assocdestination_time_created before insert
--   on assocdestination
--   for each row
--   execute procedure set_time_created();

--   --//

--   create trigger assoctravelgroup_time_created before insert
--   on assoctravelgroup
--   for each row
--   execute procedure set_time_created();

--   --//



-- CREATE TRIGGER updateAgencyUserINS
-- AFTER INSERT ON agency
-- FOR EACH ROW
--     EXECUTE PROCEDURE updateAgencyUser_func();

-- --//



-- CREATE TRIGGER updateMediaDestinationINS
-- AFTER INSERT ON destinationresource
-- FOR EACH ROW
--     EXECUTE PROCEDURE updatemediadestination_func();

-- --//



