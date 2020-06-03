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

**IMPORTANT**: when you uncomment the `CREATE-TABLE` statements this will not
result in the table being added to the GraphQL API, this is because we are
using `ignoreRBAC: false` so we do not expose tables until you `GRANT` the
relevant operations on them. The tables will appear when you uncomment the
`GRANT` lines.

*/

drop table if exists app_public.user_feed_posts;
drop table if exists app_public.posts;
drop table if exists app_public.topics;

--//

create table app_public.topics (
  title            text not null primary key
);
alter table app_public.topics enable row level security;

--//

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
CREATE INDEX ON "app_public"."posts"("topic");
--//

create trigger _100_timestamps before insert or update on app_public.posts for each row execute procedure app_private.tg__timestamps();

--//

grant
  select,
  insert (headline, body, topic),
  update (headline, body, topic),
  delete
on app_public.posts to :DATABASE_VISITOR;

--//

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

--//

create table app_public.user_feed_posts (
  id               serial primary key,
  user_id          uuid not null references app_public.users on delete cascade,
  post_id          int not null references app_public.posts on delete cascade,
  created_at       timestamptz not null default now()
);
alter table app_public.user_feed_posts enable row level security;
create index on app_public.user_feed_posts (user_id);
create index on app_public.user_feed_posts (post_id);

--//

grant select on app_public.user_feed_posts to :DATABASE_VISITOR;

--//

create policy select_own on app_public.user_feed_posts for select using (user_id = app_public.current_user_id());

--//

comment on table app_public.user_feed_posts is 'A feed of `Post`s relevant to a particular `User`.';
comment on column app_public.user_feed_posts.id is 'An identifier for this entry in the feed.';
comment on column app_public.user_feed_posts.created_at is 'The time this feed item was added.';

--//


CREATE TABLE app_public.triptype (
    "id"            SERIAL       NOT NULL UNIQUE
,    "tripTypeName"   VARCHAR(128) NOT NULL
,    "atAgency"        INT
,    "lastModified"    TIMESTAMP
,    "timeCreated"     TIMESTAMP DEFAULT NOW()
,  CONSTRAINT triptype_pkey PRIMARY KEY ("atAgency", "tripTypeName")
);

--//

-- grant
--   select,
--   insert ("tripTypeName", "atAgency"),
--   update ("tripTypeName", "atAgency"),
--   delete
-- on app_public.triptype to :DATABASE_VISITOR;

--// some comment here

CREATE TYPE  app_public.area AS ENUM (
    'Muntenia',
        'Oltenia',
        'Transilvania',
        'Dobrogea',
        'Banat',
        'Moldova',
        'Bucovina',
        'Crisana',
        'SatuMare',
        'Maramures'
);

--//

CREATE TYPE  app_public.medialocationplacement AS ENUM (
  'mainImage',
  'guideImage',
  'mapImage',
  'thumbnailImage',
  'imageGallery1',
  'imageGallery2',
  'imageGallery3',
  'imageGallery4',
  'imageGallery5',
  'imageGallery6',
  'imageGallery7',
  'imageGallery8',
  'imageGallery9',
  'imageGallery10'

);

--//

CREATE TYPE  app_public.languages AS ENUM (
         'German'
,        'English'
,        'Romanian'
,        'Danish'
,        'Israeli'
,        'French'
,        'Italian'
,        'Spanish'
,        'Russian'
,        'Hungarian'
,        'Turkish'
,        'Polish'
,        'Greek'
,        'Bulgarian'
,        'Serbian'
,        'Swedish'
,        'Norwegian'
,        'Chinese'
,        'Japanese'
,        'Arabic'

);

--//

CREATE TYPE  app_public.languageskill AS ENUM (
    'Native'
,        'Excellent'
,        'Good'
,        'Medium'
,        'Basic'

    );

    --//




   CREATE TYPE  app_public.logcommand AS ENUM (
        'ContactInfo'
,        'DestinationResource'
,        'TravelGroup'
,        'TouristResource'
,   'TripOfferResource'
,        'Login'
,        'Logout'
,        'Tourist'
,        'Guide'
,   'GuideResource'
,        'Agency'
,   'User'
,   'Publisher'
,        'Bid'
,   'Priceinfo'
,   'HostResource'
,   'EventResource'
,   'Presentation'
,   'AccomodationResource'
,   'AccomodationCalendar'
,   'TransportResource'
,   'Review'
,   'BookingCalendar'
,        'Unknown'
);

--//

CREATE TYPE  app_public.resourcetype AS ENUM (
           'TouristResource'
,        'Tourist'
,        'Agency'
,        'Guide'
,        'GuideResource'
,        'EventResource'
,        'TripOfferResource'
,        'HostResource'
,        'AccomodationResource'
,        'CarResource'
,   'DestinationResource'
,   'TravelGroup'
,        'Unknown'
);

--//

CREATE TYPE  app_public.judet AS ENUM (
  'Alba',
  'Arad',
  'Arges',
  'Bacau',
  'Bihor',
  'BistritaNasaud',
  'Botosani',
  'Brasov',
  'Braila',
  'Buzau',
  'CarasSeverin',
  'Calarasi',
  'Cluj',
  'Constanta',
  'Covasna',
  'Dambovita',
  'Dolj',
  'Galati',
  'Giurgiu',
  'Gorj',
  'Harghita',
  'Hunedoara',
  'Ialomita',
  'Iasi',
  'Ilfov',
  'Maramures',
  'Mehedinti',
  'Mures',
  'Neamt',
  'Olt',
  'Prahova',
  'SatuMare',
  'Salaj',
  'Sibiu',
  'Suceava',
  'Teleorman',
  'Timis',
  'Tulcea',
  'Vaslui',
  'Valcea',
  'Vrancea'
);

--//

CREATE TABLE  app_public.usertable (
     "id"          INT UNIQUE NOT NULL
,    "firstName"       VARCHAR(50)
,    "lastName"        VARCHAR(50)
,    "userEmail"       VARCHAR(50) PRIMARY KEY
,    "atAgency"        INT
,    "isAdmin"         BOOLEAN
,    "atGuide"         INT
,    "atTourist"       INT
,    "timeCreated"     TIMESTAMP DEFAULT NOW()
,    "isActive"        BOOLEAN DEFAULT true
,    "isRomanian"      BOOLEAN

);

CREATE INDEX ON app_public.usertable("id");
CREATE INDEX ON app_public.usertable("atTourist");
CREATE INDEX ON app_public.usertable("atAgency");
CREATE INDEX ON app_public.usertable("atGuide");

--//


CREATE TABLE app_public.account (
   "id"    SERIAL primary key   ,
   "emailHash"    TEXT,
  "passwordHash" TEXT,
  "sessionId"    TEXT,
   "logins"        INTEGER
);

ALTER TABLE app_public.usertable
ADD FOREIGN KEY ("id") REFERENCES account("id");

--//



CREATE TABLE app_public.contact (
    "id"         SERIAL primary key
,    "firstName"         VARCHAR(64)
,    "lastName"          VARCHAR(64)
,    "associatedCompany" VARCHAR(128)
,    "street"            VARCHAR(128)
,    "city"              VARCHAR(64)
,    "postCode"          VARCHAR(32)
,    "country"           VARCHAR(32)
,    "telephone"         VARCHAR(32)
,    "email"             VARCHAR(32)
,    "isCompany"         BOOLEAN
,    "createdById"       INT
,    "belongsToType"     resourcetype
,    "belongsToId"              INT
,    "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
);

CREATE INDEX ON app_public.contact("createdById");
CREATE INDEX ON app_public.contact("belongsToType");


--//

CREATE TABLE app_public.commandlogentry (
    "id"       SERIAL primary key
,    "atPublisher"        INT NOT NULL
,        "belongsToType"                 resourcetype DEFAULT ('Unknown')
,   "resourceId"         INT
,        "logcommand"         logcommand NOT NULL
,   "timeCommand"        TIMESTAMP        default now()
);

CREATE INDEX ON app_public.commandlogentry("atPublisher");

--//


CREATE TABLE app_public.publisher (
    "id"       SERIAL primary key
,   "name"     VARCHAR(240)
,         "createdById"           INT
,         "belongsToId"        INT
,         "belongsToType"     resourcetype
,        "canReview"                        BOOLEAN DEFAULT true
,        "canPublish"                BOOLEAN DEFAULT true
,        "isRomanian"        BOOLEAN
,   "isActive"          BOOLEAN DEFAULT true
,   "commandLogEntryId"                INT[]
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,   "timeCommand"        TIMESTAMP        default NOW()
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
);
 ALTER TABLE app_public.commandlogentry
 ADD FOREIGN KEY ("atPublisher") REFERENCES app_public.publisher("id");


CREATE INDEX ON app_public.publisher("createdById");
CREATE INDEX ON app_public.publisher("id");
CREATE INDEX ON app_public.publisher("commandLogEntryId");
CREATE INDEX ON app_public.publisher("belongsToType");

--//




CREATE TABLE app_public.geocoding (
   "id"  SERIAL primary key
,   "locationLat"  INT
,   "locationLng"  INT
,   "locationType" TEXT
,   "placesId"     TEXT
,   "formattedAdress"   TEXT
,   "type"             TEXT
,   "viewportNorthEastLat" INT
,   "viewportNorthEastLng" INT
,   "viewportSouthWestLat" INT
,   "viewportSouthWestLng" INT
,   "createdById"           INT NOT NULL REFERENCES app_public.usertable("id")
,   "publishedById"         INT NOT NULL REFERENCES app_public.publisher
,    "lastModified"       TIMESTAMP
,   "timeCreated"           TIMESTAMP default NOW()
);

CREATE INDEX ON app_public.geocoding("createdById");
CREATE INDEX ON app_public.geocoding("publishedById");

--//

CREATE TABLE app_public.accounting (
    "id"      SERIAL primary key
,         "publisherId"            INT NOT NULL
,        "paymentHistory"    VARCHAR(64)[]
,        "abonamentActive"   BOOLEAN NOT NULL
,        "lastPayment"                 DATE
,        "lastPaymentAmount" VARCHAR(64)
,        "abonamentExpires"  DATE
,        "onYearlyPayment"   Boolean NOT NULL
,        "onFreePeriod"      Boolean NOT NULL
,        "freePeriodExpires" DATE
,        "isRomanian"        BOOLEAN
,   "isActive"          BOOLEAN DEFAULT true
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")

);

CREATE INDEX ON app_public.accounting("publisherId");

--//





CREATE TABLE app_public.presentation (
    "id"          SERIAL primary key
,        "headline"          VARCHAR(160)
,        "publisherId"       INT NOT NULL
,        "createdById"       INT NOT NULL
,        "resourceType"                resourcetype NOT NULL
,        "resourceTypeId"      INT NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,    "lastModified"     TIMESTAMP
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")

);

CREATE INDEX ON app_public.presentation("publisherId");

CREATE INDEX ON app_public.presentation("createdById");

--//



CREATE TABLE app_public.bid (
    "id"             SERIAL primary key
,        "publisherId"       INT[] NOT NULL
,        "createdById"       INT[] NOT NULL
,        "bidAmount"         MONEY[]
,   "isActive"          BOOLEAN[] NOT NULL

,   "timeCreated"       TIMESTAMP[] NOT NULL DEFAULT array[now()]

);

--//





CREATE TABLE app_public.auctioninfo (
    "id"        SERIAL primary key
,        "publishedById"       INT NOT NULL
,        "createdById"       INT NOT NULL
,        "advertisedPrice"   MONEY NOT NULL
,        "currentHighBid"        MONEY
,        "bidId"                        INT
,        "acceptsOffers"                BOOLEAN NOT NULL
,        "auctionExpiry"                TIMESTAMP
,   "isAuction"         BOOLEAN NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,   "atResourceType"        resourcetype NOT NULL
,         "belongsToId"                        INT NOT NULL
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publishedById") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
,    FOREIGN KEY ("bidId") REFERENCES app_public.bid("id")

);

CREATE INDEX ON app_public.auctioninfo("publishedById");

CREATE INDEX ON app_public.auctioninfo("createdById");

CREATE INDEX ON app_public.auctioninfo("bidId");

--//



CREATE TABLE app_public.priceinfo (
    "id"        SERIAL primary key
,        "publisherId"       INT NOT NULL
,        "createdById"       INT NOT NULL
,        "advertisedPrice"   MONEY NOT NULL
,        "currentHighBId"        MONEY
,        "bidId"                                INT
,        "acceptsOffers"                BOOLEAN NOT NULL
,        "auctionExpiry"                TIMESTAMP
,   "isAuction"         BOOLEAN NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,   "atResourceType"        resourcetype NOT NULL
,         "belongsToId"                        INT NOT NULL
,    "lastModified"     TIMESTAMP

,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
,    FOREIGN KEY ("bidId") REFERENCES app_public.bid("id")

);

CREATE INDEX ON app_public.priceinfo("publisherId");

CREATE INDEX ON app_public.priceinfo("createdById");

CREATE INDEX ON app_public.priceinfo("bidId");

--//



CREATE TABLE app_public.calendarentry (
    "id" SERIAL primary key
,   "fromTimestamp"     TIMESTAMP[] NOT NULL default array[now()]
,   "toTimestamp"       TIMESTAMP[] NOT NULL default array[now()]
,   "resourceType"      resourcetype[]
,   "comment"           VARCHAR(200)[]
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
 );



--//

        CREATE TABLE app_public.timerange (
    "id"       SERIAL primary key
,   "fromTimestamp"     TIMESTAMP
,   "toTimestamp"       TIMESTAMP
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
 );

--//

CREATE TABLE app_public.bookingcalendar (
    "id" SERIAL primary key
,         "belongsToId"         INT
,    "belongsToType"     resourcetype
,        "createdById"       INT
,   "isActive"          BOOLEAN DEFAULT true
,   "fromTimestamp"     TIMESTAMP[] NOT NULL default array[now()]
,   "toTimestamp"       TIMESTAMP[] NOT NULL default array[now()]
,   "resourceType"      resourcetype[]
,   "comment"           TEXT[]
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
);


CREATE INDEX ON app_public.bookingcalendar("belongsToId");
CREATE INDEX ON app_public.bookingcalendar("belongsToType");
CREATE INDEX ON app_public.bookingcalendar("createdById");


--//

CREATE TABLE app_public.accomodationresource (
    "id"     SERIAL primary key
,   "accomodationName"   VARCHAR(240)
,         "contactId"          INT NOT NULL
,        "addressId"                         INT NOT NULL
,        "locatedIn"                         area
,   "locationCalendarId" INT NOT NULL
,   "tripTypeName"       VARCHAR(128)
,        "publisherId"        INT NOT NULL
,        "createdById"        INT NOT NULL
,   "isActive"           BOOLEAN DEFAULT true
,        "ownedByAt"              BOOLEAN DEFAULT false
,        "presentationId"     INT NOT NULL
,   "atAgency"            INT
,   "atGuide"            INT
,   "isPublic"          BOOLEAN DEFAULT true
,    "lastModified"     TIMESTAMP
,   "timeCreated"        TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("contactId") REFERENCES app_public.contact("id")
,    FOREIGN KEY ("addressId") REFERENCES app_public.contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
,    FOREIGN KEY ("locationCalendarId") REFERENCES app_public.bookingcalendar("id")
,    FOREIGN KEY ("presentationId") REFERENCES app_public.presentation("id")
,    FOREIGN KEY ("atAgency", "tripTypeName") REFERENCES app_public.triptype("atAgency", "tripTypeName")

);

CREATE INDEX ON app_public.accomodationresource("contactId");

CREATE INDEX ON app_public.accomodationresource("tripTypeName");

CREATE INDEX ON app_public.accomodationresource("addressId");

CREATE INDEX ON app_public.accomodationresource("createdById");

CREATE INDEX ON app_public.accomodationresource("publisherId");

CREATE INDEX ON app_public.accomodationresource("presentationId");

CREATE INDEX ON app_public.accomodationresource("locationCalendarId");

CREATE INDEX ON app_public.accomodationresource("atAgency");

CREATE INDEX ON app_public.accomodationresource("atGuide");

CREATE INDEX ON "app_public"."accomodationresource"("atAgency", "tripTypeName");
--//

CREATE TABLE app_public.destinationresource (
    "id" SERIAL primary key   ,
    "destinationName" VARCHAR(240),
    "publishedById" INT NOT NULL REFERENCES app_public.publisher,
    "createdById" INT NOT NULL,
    "area" area,
    "judet" judet,
    "tripTypeName" VARCHAR(128),
    "isActive" BOOLEAN DEFAULT true,
    "priceInfoId" INT,
    "activeAtPeriodsId" INT,
    "presentationId" INT,
    "atAgency"  INT NOT NULL,
    "geoCodingId" INT REFERENCES app_public.geocoding,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "lastModified" TIMESTAMP DEFAULT NOW(),
       "lastModifiedBy" INT,
    "timeCreated" TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id"),
   FOREIGN KEY ("lastModifiedBy") REFERENCES app_public.usertable("id"),
    FOREIGN KEY ("presentationId") REFERENCES app_public.presentation("id"),
    FOREIGN KEY ("activeAtPeriodsId") REFERENCES app_public.bookingcalendar("id"),
    FOREIGN KEY ("priceInfoId") REFERENCES  app_public.priceinfo("id"),
    FOREIGN KEY ("atAgency", "tripTypeName") REFERENCES app_public.triptype("atAgency", "tripTypeName")

);

CREATE INDEX ON app_public.destinationresource("tripTypeName");

CREATE INDEX ON app_public.destinationresource("createdById");
CREATE INDEX ON app_public.destinationresource("lastModifiedBy");

CREATE INDEX ON app_public.destinationresource("presentationId");

CREATE INDEX ON app_public.destinationresource("activeAtPeriodsId");

CREATE INDEX ON app_public.destinationresource("priceInfoId");

CREATE INDEX ON app_public.destinationresource("geoCodingId");

CREATE INDEX ON app_public.destinationresource("publishedById");

CREATE INDEX ON app_public.destinationresource("atAgency");

CREATE INDEX ON "app_public"."destinationresource"("atAgency", "tripTypeName");

--//

CREATE TABLE app_public.eventresource (
    "id"          SERIAL primary key
,   "eventName"         VARCHAR(180)
,   "agencyName"        VARCHAR(180)
,         "contactId"         INT NOT NULL
,        "publisherId"       INT NOT NULL
,        "createdById"       INT NOT NULL
,        "locatedIn"                        area
,        "locationAddressId"  INT NOT NULL
 ,  "tripTypeName" VARCHAR(128)
,        "activeAtPeriodsId"   INT NOT NULL
,        "ownedByAt"         BOOLEAN NOT NULL DEFAULT false
,        "atAgency"                        INT
,        "atGuide"                        INT
,        "presentationId"    INT NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
,    "lastModified"     TIMESTAMP
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("contactId") REFERENCES app_public.contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
,    FOREIGN KEY ("locationAddressId") REFERENCES app_public.contact("id")
,    FOREIGN KEY ("activeAtPeriodsId") REFERENCES app_public.bookingcalendar("id")
,    FOREIGN KEY ("presentationId") REFERENCES app_public.presentation("id")
,      FOREIGN KEY ("atAgency", "tripTypeName") REFERENCES app_public.triptype("atAgency", "tripTypeName")

);
CREATE INDEX ON app_public.eventresource("tripTypeName");
CREATE INDEX ON app_public.eventresource("createdById");
CREATE INDEX ON app_public.eventresource("contactId");
CREATE INDEX ON app_public.eventresource("publisherId");
CREATE INDEX ON app_public.eventresource("presentationId");
CREATE INDEX ON app_public.eventresource("createdById");
CREATE INDEX ON app_public.eventresource("locationAddressId");
CREATE INDEX ON app_public.eventresource("activeAtPeriodsId");
CREATE INDEX ON app_public.eventresource("atGuide");
CREATE INDEX ON app_public.eventresource("atAgency");
CREATE INDEX ON "app_public"."eventresource"("atAgency", "tripTypeName");


--//





CREATE TABLE app_public.tripofferresource (
    "id"          SERIAL primary key
,   "tripOfferName"        VARCHAR(240)
,        "publisherId"          INT NOT NULL
,        "createdById"          INT NOT NULL
,   "availableAtCalendarId"   INT NOT NULL
,        "guideResponsibleId"     INT NOT NULL
,        "guideSecondaryId"       INT
,        "atAgency"             INT
,        "priceInfoId"          INT NOT NULL
,   "destinationId"        INT[] NOT NULL
,        "isSigned"                          BOOLEAN NOT NULL
,        "atGuide"             INT
,   "isActive"             BOOLEAN DEFAULT true
,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
,    "lastModified"     TIMESTAMP
,   "timeCreated"          TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
,    FOREIGN KEY ("availableAtCalendarId") REFERENCES app_public.bookingcalendar("id")
,    FOREIGN KEY ("priceInfoId") REFERENCES  app_public.priceinfo("id")


);

CREATE INDEX ON app_public.tripofferresource("publisherId");

CREATE INDEX ON app_public.tripofferresource("createdById");

CREATE INDEX ON app_public.tripofferresource("availableAtCalendarId");

CREATE INDEX ON app_public.tripofferresource("priceInfoId");


CREATE INDEX ON app_public.tripofferresource("guideSecondaryId");

CREATE INDEX ON app_public.tripofferresource("guideResponsibleId");


CREATE INDEX ON app_public.tripofferresource("atAgency");

--//


CREATE TABLE app_public.roomcalendarentry (
    "id" SERIAL primary key
,   "atRoomCalendar"        INT
,   "fromDate"              DATE[]
,   "toDate"                DATE[]
,   "comment"               VARCHAR(200)[]
,   "timeCreated"           TIMESTAMP DEFAULT NOW()
 );

 CREATE INDEX ON app_public.roomcalendarentry("atRoomCalendar");

--//



CREATE TABLE app_public.roomcalendar (
    "id"    SERIAL primary key
,        "publisherId"       INT NOT NULL
,        "createdById"       INT NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,        "calendarentryId"         INT NOT NULL
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
,    FOREIGN KEY ("calendarentryId") REFERENCES  app_public.roomcalendarentry

);

ALTER TABLE  app_public.roomcalendarentry
ADD FOREIGN KEY ("atRoomCalendar") REFERENCES app_public.roomcalendar("id");



CREATE INDEX ON app_public.roomcalendar("createdById");

CREATE INDEX ON app_public.roomcalendar("publisherId");

CREATE INDEX ON app_public.roomcalendar("calendarentryId");

--//


CREATE TABLE app_public.roomlist (
    "id"        SERIAL primary key
,    "atAccomodation"    INT NOT NULL
,        "roomNames"                        VARCHAR(128)
,         "roomNumPeople"            INT
,         "roomCalendarId"    INT REFERENCES app_public.roomcalendar
,        "roomPrices"                MONEY
,   "roomActive"        BOOLEAN
,    FOREIGN KEY ("atAccomodation") REFERENCES app_public.accomodationresource("id")

);


CREATE INDEX ON app_public.roomlist("atAccomodation");
CREATE INDEX ON app_public.roomlist("roomCalendarId");

--//


CREATE TABLE app_public.transportresource (
    "id"       SERIAL primary key
,   "transportName"     VARCHAR(240)
,         "contactId"         INT NOT NULL
,        "publisherId"       INT NOT NULL
,        "createdById"       INT NOT NULL
,        "locatedIn"                        area NOT NULL
,        "addressInfoId"                INT NOT NULL
,        "atAgency"                        INT
,        "atGuide"                        INT
,        "ownedByAt"         BOOLEAN NOT NULL DEFAULT false
,        "presentationId"                 INT
,        "isBus"                                BOOLEAN NOT NULL
,        "numberOfPlaces"        INT NOT NULL
,        "bookingCalendarId"        INT NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
,    "lastModified"     TIMESTAMP
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("contactId") REFERENCES app_public.contact("id")
,    FOREIGN KEY ("addressInfoId") REFERENCES app_public.contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")

,    FOREIGN KEY ("bookingCalendarId") REFERENCES app_public.bookingcalendar("id")
,    FOREIGN KEY ("presentationId") REFERENCES app_public.presentation("id")

);

CREATE INDEX ON app_public.transportresource("contactId");
CREATE INDEX ON app_public.transportresource("addressInfoId");
CREATE INDEX ON app_public.transportresource("publisherId");
CREATE INDEX ON app_public.transportresource("createdById");
CREATE INDEX ON app_public.transportresource("bookingCalendarId");
CREATE INDEX ON app_public.transportresource("presentationId");

CREATE INDEX ON app_public.transportresource("atGuide");

CREATE INDEX ON app_public.transportresource("atAgency");

--//


CREATE TABLE app_public.review (
    "id"     SERIAL primary key
,        "publisherId"       INT NOT NULL
,        "createdById"       INT NOT NULL
,        "halfStars"                        SMALLINT
,        "reviewText"                TEXT
,        "resourceType"                resourcetype NOT NULL
,        "resourceId"                INT NOT NULL
,        "publisherTarget"         INT NOT NULL
,        "startDateTripEvent"        DATE
,        "byRomanian"        BOOLEAN
,   "isActive"          BOOLEAN DEFAULT true
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
,    FOREIGN KEY ("publisherTarget") REFERENCES app_public.publisher("id")

);

CREATE INDEX ON app_public.review("createdById");
CREATE INDEX ON app_public.review("publisherId");
CREATE INDEX ON app_public.review("publisherTarget");

--//


CREATE TABLE app_public.hostresource (
    "id"    SERIAL primary key
,   "hostResourceName"  VARCHAR(240)
,         "contactId"         INT NOT NULL
,        "publisherId"       INT NOT NULL
,        "createdById"       INT NOT NULL
,        "withAccomodation"  BOOLEAN NOT NULL
,   "atAccomodation"        INT
,   "atAgency"          INT
,   "atGuide"         INT
,    "tripTypeName" VARCHAR(128)
,        "locatedIn"                        area
,        "addressInfoId"                INT NOT NULL
,        "ownedByAt"         BOOLEAN NOT NULL DEFAULT false
,        "presentationId"                 INT NOT NULL
,   "bookingCalendarId"        INT NOT NULL
,        "isRomanian"        BOOLEAN
,   "isActive"          BOOLEAN DEFAULT true
,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
,    "lastModified"     TIMESTAMP
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("contactId") REFERENCES app_public.contact("id")
,    FOREIGN KEY ("addressInfoId") REFERENCES app_public.contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")

,    FOREIGN KEY ("bookingCalendarId") REFERENCES app_public.bookingcalendar("id")
,    FOREIGN KEY ("presentationId") REFERENCES app_public.presentation("id")
,    FOREIGN KEY ("atAccomodation") REFERENCES app_public.accomodationresource("id")

);

CREATE INDEX ON app_public.hostresource("tripTypeName");
CREATE INDEX ON app_public.hostresource("contactId");
CREATE INDEX ON app_public.hostresource("addressInfoId");
CREATE INDEX ON app_public.hostresource("publisherId");
CREATE INDEX ON app_public.hostresource("createdById");
CREATE INDEX ON app_public.hostresource("bookingCalendarId");
CREATE INDEX ON app_public.hostresource("presentationId");
CREATE INDEX ON app_public.hostresource("atAccomodation");

CREATE INDEX ON app_public.hostresource("atAgency");

CREATE INDEX ON app_public.hostresource("atGuide");

--//


CREATE TABLE app_public.tourist (
    "id"              SERIAL primary key
,   "touristFirstName"       VARCHAR(64)
,   "touristLastName"        VARCHAR(64)
,         "contactId"              INT NOT NULL
,        "publisherId"            INT NOT NULL
,        "createdById"            INT NOT NULL
,   "nativeLanguage"         languages
,   "alternativeLanguage"    languages
,        "touristOfferId"          INT NOT NULL
,        "touristFavoriteId"       INT NOT NULL
,        "touristBidId"            INT NOT NULL
,        "touristDealId"           INT NOT NULL
,        "guideReviewInIdPool"         INT[]
,        "agencyReviewInIdPool"        INT[]
,        "guideReviewOutIdPool"        INT[]
,        "agencyReviewOutIdPool"       INT[]
,   "timeCreated"            TIMESTAMP DEFAULT NOW()
,   "atTravelGroup"          INT
,   "isActive"               BOOLEAN DEFAULT true
,   "isRomanian"             BOOLEAN NOT NULL
,    FOREIGN KEY ("contactId") REFERENCES app_public.contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")


);

CREATE INDEX ON app_public.tourist("contactId");
CREATE INDEX ON app_public.tourist("publisherId");
CREATE INDEX ON app_public.tourist("createdById");
CREATE INDEX ON app_public.tourist("touristOfferId");
CREATE INDEX ON app_public.tourist("touristFavoriteId");
CREATE INDEX ON app_public.tourist("touristDealId");
CREATE INDEX ON app_public.tourist("touristBidId");


ALTER TABLE app_public.usertable
ADD  FOREIGN KEY ("atTourist") REFERENCES app_public.tourist("id");

--//




CREATE TABLE app_public.languagelevel  (
    "id"  SERIAL primary key
,        "langauges"                        languages NOT NULL
,        "langaugesSkill"    languageskill NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,   "createdById"       INT NOT NULL
,   "publisherId"       INT NOT NULL
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")

);


CREATE INDEX ON app_public.languagelevel("publisherId");

CREATE INDEX ON app_public.languagelevel("createdById");

--//


CREATE TABLE app_public.guideresource (
    "id"          SERIAL primary key
,   "guideResourceName"        VARCHAR(240)
,        "publisherId"       INT NOT NULL
,        "createdById"       INT NOT NULL
,        "atGuide"         INT
,        "timeRangeId"      INT
,        "priceInfoId"                INT NOT NULL
,        "atAgency"                        INT
,   "multipleTimeRange" BOOLEAN NOT NULL
,   "bookingCalendarId" INT
,        "isRomanian"        BOOLEAN
,   "isActive"          BOOLEAN DEFAULT true
,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
,    "lastModified"     TIMESTAMP
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
,    FOREIGN KEY ("bookingCalendarId") REFERENCES app_public.bookingcalendar("id")
,    FOREIGN KEY ("timeRangeId") REFERENCES timerange("id")
,    FOREIGN KEY ("priceInfoId") REFERENCES  app_public.priceinfo("id")


);
CREATE INDEX ON app_public.guideresource("atAgency");
CREATE INDEX ON app_public.guideresource("atGuide");
CREATE INDEX ON app_public.guideresource("publisherId");
CREATE INDEX ON app_public.guideresource("createdById");
CREATE INDEX ON app_public.guideresource("bookingCalendarId");
CREATE INDEX ON app_public.guideresource("timeRangeId");
CREATE INDEX ON app_public.guideresource("priceInfoId");

--//


CREATE TABLE app_public.guide (
    "id"           SERIAL primary key
,    "name"            VARCHAR(240)
,         "contactId"         INT NOT NULL
,        "hasGuideLicence"   BOOLEAN NOT NULL
,        "guideLicenceUrl"   VARCHAR(128)
,        "publisherId"       INT NOT NULL
,        "createdById"       INT NOT NULL
,        "guideFirstName"    VARCHAR(64)
,   "guideLastName"     VARCHAR(64)
,        "hasOwnCompany"     BOOLEAN NOT NULL
,        "atAgency"          INT
,        "languageLevelId"    INT NOT NULL
,        "areas"             area[] NOT NULL
,    "tripTypeName" VARCHAR(128)
,        "guideOfferId"     INT NOT NULL
,        "guideBidId"       INT NOT NULL
,        "guideFavoriteId"  INT NOT NULL
,        "guideDealId"      INT NOT NULL
,        "agencyReviewInIdPool"   INT[]
,        "touristReviewInIdPool"  INT[]
,        "agencyReviewOutIdPool"  INT[]
,        "touristReviewOutIdPool"  INT[]
,        "bookingCalendarId"     INT NOT NULL
,        "hostIdPool"          INT[]
,        "eventIdPool"         INT[]
,        "accomodationIdPool"  INT[]
,        "transportIdPool"     INT[]
,    "lastModified"     TIMESTAMP
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,   "isActive"          BOOLEAN DEFAULT true
,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
,    FOREIGN KEY ("contactId") REFERENCES app_public.contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
,    FOREIGN KEY ("languageLevelId") REFERENCES languagelevel("id")
,    FOREIGN KEY ("bookingCalendarId") REFERENCES app_public.bookingcalendar("id")


);

CREATE INDEX ON app_public.guide("tripTypeName");
CREATE INDEX ON app_public.guide("guideOfferId");
CREATE INDEX ON app_public.guide("guideBidId");
CREATE INDEX ON app_public.guide("guideDealId");
CREATE INDEX ON app_public.guide("guideBidId");
CREATE INDEX ON app_public.guide("guideFavoriteId");
CREATE INDEX ON app_public.guide("atAgency");
CREATE INDEX ON app_public.guide("contactId");
CREATE INDEX ON app_public.guide("publisherId");
CREATE INDEX ON app_public.guide("createdById");
CREATE INDEX ON app_public.guide("languageLevelId");
CREATE INDEX ON app_public.guide("bookingCalendarId");


ALTER TABLE tripofferresource
ADD FOREIGN KEY ("guideResponsibleId") REFERENCES app_public.guide("id");


ALTER TABLE tripofferresource
ADD FOREIGN KEY ("guideSecondaryId") REFERENCES app_public.guide("id");


ALTER TABLE hostresource
ADD FOREIGN KEY ("atGuide") REFERENCES app_public.guide("id");





ALTER TABLE eventresource
ADD FOREIGN KEY ("atGuide") REFERENCES app_public.guide("id");



ALTER TABLE app_public.accomodationresource
ADD FOREIGN KEY ("atGuide") REFERENCES app_public.guide("id");






ALTER TABLE transportresource
ADD FOREIGN KEY ("atGuide") REFERENCES app_public.guide("id");




ALTER TABLE app_public.guideresource
ADD FOREIGN KEY ("atGuide") REFERENCES app_public.guide("id");



ALTER TABLE app_public.usertable
ADD FOREIGN KEY ("atGuide") REFERENCES app_public.guide("id");

--//




CREATE TABLE app_public.agency (
    "id"          SERIAL primary key
,   "name"             VARCHAR(240) NOT NULL
,         "contactId"         INT
,        "activeInsurance"   BOOLEAN NOT NULL
,        "insuranceUrl"      VARCHAR(128)
,   "insuranceExpery"   DATE
,        "publisherId"       INT
,        "createdById"       INT NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,   "isPublic"          BOOLEAN DEFAULT true
,        "agencyBidId"      INT
,        "agencyFavoriteId" INT
,        "agencyOfferId"    INT
,        "agencyDealId"     INT
,        "trustedPartnerIdPool"   INT[]
,        "extendedNetworkIdPool"   INT[]
,        "guideReviewInIdPool"    INT[]
,        "agencyReviewInIdPool"   INT[]
,        "touristReviewInIdPool"  INT[]
,        "guideReviewOutIdPool"   INT[]
,        "agencyReviewOutIdPool"  INT[]
,        "touristReviewOutIdPool" INT[]
,   "agencyMediaLibraryId"    INT
,        "isRomanian"        BOOLEAN NOT NULL
,        "bookingCalendarId"  INT
,        "specializedAgency" resourcetype
,    "lastModified"     TIMESTAMP
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("contactId") REFERENCES app_public.contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
,    FOREIGN KEY ("bookingCalendarId") REFERENCES app_public.bookingcalendar("id")



);

CREATE INDEX ON app_public.agency("contactId");
CREATE INDEX ON app_public.agency("publisherId");
CREATE INDEX ON app_public.agency("createdById");
CREATE INDEX ON app_public.agency("bookingCalendarId");
CREATE INDEX ON app_public.agency("agencyOfferId");
CREATE INDEX ON app_public.agency("agencyFavoriteId");
CREATE INDEX ON app_public.agency("agencyDealId");
CREATE INDEX ON app_public.agency("agencyMediaLibraryId");
CREATE INDEX ON app_public.agency("agencyBidId");

ALTER TABLE app_public.usertable
ADD  FOREIGN KEY ("atAgency") REFERENCES app_public.agency("id");

ALTER TABLE triptype
ADD  FOREIGN KEY ("atAgency") REFERENCES app_public.agency("id") ON DELETE CASCADE;

ALTER TABLE app_public.guide
ADD FOREIGN KEY ("atAgency") REFERENCES app_public.agency("id");


ALTER TABLE app_public.guideresource
ADD FOREIGN KEY ("atAgency") REFERENCES app_public.agency("id") ON DELETE CASCADE;

ALTER TABLE tripofferresource
ADD FOREIGN KEY ("atAgency") REFERENCES app_public.agency("id") ON DELETE CASCADE;

ALTER TABLE hostresource
ADD FOREIGN KEY ("atAgency") REFERENCES app_public.agency("id") ON DELETE CASCADE;

ALTER TABLE eventresource
ADD FOREIGN KEY ("atAgency") REFERENCES app_public.agency("id") ON DELETE CASCADE;


ALTER TABLE app_public.accomodationresource
ADD FOREIGN KEY ("atAgency") REFERENCES app_public.agency("id") ON DELETE CASCADE;


ALTER TABLE transportresource
ADD FOREIGN KEY ("atAgency") REFERENCES app_public.agency("id") ON DELETE CASCADE;

ALTER TABLE destinationresource
ADD FOREIGN KEY ("atAgency") REFERENCES app_public.agency("id") ON DELETE CASCADE;

--//



CREATE TABLE app_public.medialocation (
        "id" INT UNIQUE  ,
    "mediaLocationPlacement" app_public.medialocationplacement,
    "atAgency"  INT REFERENCES app_public.agency("id"),
    "atResource" INT NOT NULL,
    "uploadLocationOriginal" TEXT UNIQUE,
    "uploadLocationThumbnail" TEXT UNIQUE,
    "uploadLocationMobile" TEXT UNIQUE,
    "uploadLocationTablet" TEXT UNIQUE,
    "uploadLocationDesktop" TEXT UNIQUE,
    "uploadLocation2K" TEXT UNIQUE,
    "signedUrlThumbnail" TEXT,
    "signedUrlMobile" TEXT,
    "signedUrlTablet" TEXT,
    "signedUrlDesktop" TEXT,
    "signedUrl2K" TEXT,
    "signedUrlsUpdate" TIMESTAMP NOT NULL DEFAULT (NOW() + cast('1 day' as interval) * 6) CHECK ("signedUrlsUpdate" > NOW() AND "signedUrlsUpdate" < ("signedUrlsUpdate" + cast('1 day' as interval) * 7 )),
    "timeCreated" TIMESTAMP default NOW(),
    PRIMARY KEY("atAgency", "atResource", "mediaLocationPlacement")
);


-- CREATE INDEX ON app_public.medialocation("uploadLocationOriginal");
-- CREATE INDEX ON app_public.medialocation("uploadLocationThumbnail");
-- CREATE INDEX ON app_public.medialocation("uploadLocationOriginal");
-- CREATE INDEX ON app_public.medialocation("uploadLocationOriginal");
CREATE INDEX ON app_public.medialocation("atAgency");
CREATE INDEX ON app_public.medialocation("atResource");

--//


CREATE TABLE app_public.touristresource (
    "id" SERIAL primary key
,    "name"             VARCHAR(240)
,         "contactId"         INT NOT NULL
,        "publisherId"       INT NOT NULL
,        "createdById"       INT NOT NULL
,        "atTravelGroup"                        INT
,        "atAgency"                        INT
,        "atGuide"                        INT
,        "isSigned"                        BOOLEAN NOT NULL
,        "priceInfoId"                    INT NOT NULL
,        "travellingCalendarId"        INT NOT NULL
,        "isRomanian"        BOOLEAN
,   "isActive"           BOOLEAN DEFAULT TRUE
,   "isPublic"          BOOLEAN NOT NULL DEFAULT true
,    "lastModified"     TIMESTAMP
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("contactId") REFERENCES app_public.contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("priceInfoId") REFERENCES  app_public.priceinfo("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")

,    FOREIGN KEY ("atAgency") REFERENCES app_public.agency("id")
,    FOREIGN KEY ("atGuide") REFERENCES app_public.guide("id")
,    FOREIGN KEY ("travellingCalendarId") REFERENCES app_public.bookingcalendar("id")

);

CREATE INDEX ON app_public.touristresource("contactId");
CREATE INDEX ON app_public.touristresource("publisherId");
CREATE INDEX ON app_public.touristresource("priceInfoId");
CREATE INDEX ON app_public.touristresource("createdById");

CREATE INDEX ON app_public.touristresource("atGuide");
CREATE INDEX ON app_public.touristresource("atAgency");

CREATE INDEX ON app_public.touristresource("atTravelGroup");
CREATE INDEX ON app_public.touristresource("travellingCalendarId");

--//


CREATE TABLE app_public.travelgroupresource (
    "id"          SERIAL primary key
,   "travelGroupName"        VARCHAR(240)
,         "contactId"         INT NOT NULL
,        "publisherId"       INT NOT NULL
,        "createdById"       INT NOT NULL
,        "numberOfAdults"    SMALLINT
,        "numberOfChildren"  SMALLINT
,        "customInfo"        TEXT[]
,        "bookingCalendarId"        INT NOT NULL
,        "atAgency"                        INT
,        "atGuide"                        INT
,        "language"                        languages NOT NULL
,        "atTripOfferResource" INT
,        "atTouristResource"   INT NOT NULL
,        "isRomanian"        BOOLEAN NOT NULL
,   "isActive"          BOOLEAN DEFAULT TRUE
,    "lastModified"     TIMESTAMP
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("contactId") REFERENCES app_public.contact("id")
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
,    FOREIGN KEY ("bookingCalendarId") REFERENCES app_public.bookingcalendar("id")
,    FOREIGN KEY ("atAgency") REFERENCES app_public.agency("id")
,    FOREIGN KEY ("atGuide") REFERENCES app_public.guide("id")
,    FOREIGN KEY ("atTripOfferResource") REFERENCES tripofferresource("id")
,    FOREIGN KEY ("atTouristResource") REFERENCES app_public.touristresource("id")

);

ALTER TABLE app_public.touristresource
ADD FOREIGN KEY ("atTravelGroup") REFERENCES app_public.travelgroupresource("id");


CREATE INDEX ON app_public.travelgroupresource ("contactId");
CREATE INDEX ON app_public.travelgroupresource ("publisherId");
CREATE INDEX ON app_public.travelgroupresource ("createdById");
CREATE INDEX ON app_public.travelgroupresource ("bookingCalendarId");
CREATE INDEX ON app_public.travelgroupresource ("atAgency");
CREATE INDEX ON app_public.travelgroupresource ("atGuide");
CREATE INDEX ON app_public.travelgroupresource ("atTripOfferResource");
CREATE INDEX ON app_public.travelgroupresource ("atTouristResource");

--//

CREATE TABLE app_public.agencyaccomodation (
  "agencyId" INT NOT NULL,
  "accomodationId" INT NOT NULL,
  "lastModified" TIMESTAMP,
  "urlExperyAt" TIMESTAMP NOT NULL CHECK (
    ("urlExperyAt") > NOW()
    AND ("urlExperyAt") < (("urlExperyAt") + cast('1 day' as interval) * 7)
  ) -- OR interval '1' day * days_count;
,
  "presentationPlacements" TEXT[],
  "agencyBucketUrls" TEXT[],
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY("agencyId", "accomodationId"),
  FOREIGN KEY ("agencyId") REFERENCES app_public.agency("id") ON DELETE CASCADE,
  FOREIGN KEY ("accomodationId") REFERENCES app_public.accomodationresource("id") ON DELETE CASCADE
);
CREATE INDEX ON app_public.agencyaccomodation("accomodationId");
CREATE INDEX ON app_public.agencyaccomodation("agencyId");
CREATE INDEX ON app_public.agencyaccomodation("lastModified");
CREATE INDEX ON app_public.agencyaccomodation("urlExperyAt");

COMMENT ON COLUMN app_public.agencyaccomodation."urlExperyAt" is E'Upcoming Signed Url expery at amazon S3 bucket, (max value: now+7days)';
COMMENT ON COLUMN app_public.agencyaccomodation."agencyBucketUrls" is E'This is the Urls of the original image uploaded to Amazon app_public.agency bucket (needs also app_public.presentationPlacements!)';
COMMENT ON COLUMN app_public.agencyaccomodation."presentationPlacements" is E'This is the resource-specific placement names in the app_public.agency interface app_public.presentation';

--//

CREATE TABLE app_public.agencyevent (
  "agencyId"     INT NOT NULL
,        "eventId"    INT NOT NULL
,  "timeCreated" TIMESTAMP DEFAULT NOW()
,  PRIMARY KEY("agencyId", "eventId")
,  FOREIGN KEY ("agencyId") REFERENCES app_public.agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("eventId") REFERENCES app_public.eventresource("id") ON DELETE CASCADE
);

CREATE INDEX ON app_public.agencyevent("eventId");

--//

CREATE TABLE app_public.agencyguide (
  "agencyId"     INT NOT NULL
,  "guideId"     INT NOT NULL
,  "timeCreated" TIMESTAMP DEFAULT NOW()
,  PRIMARY KEY("agencyId", "guideId")
,  FOREIGN KEY ("agencyId") REFERENCES app_public.agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("guideId") REFERENCES app_public.guide("id") ON DELETE CASCADE
);

CREATE INDEX ON app_public.agencyguide("agencyId");
CREATE INDEX ON app_public.agencyguide("guideId");
CREATE INDEX ON app_public.agencyguide("agencyId", "guideId");

--//

CREATE TABLE app_public.agencyhost (
  "agencyId"     INT NOT NULL
,        "hostId"    INT NOT NULL
,  "timeCreated" TIMESTAMP DEFAULT NOW()
,  PRIMARY KEY("agencyId", "hostId")
,  FOREIGN KEY ("agencyId") REFERENCES app_public.agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("hostId") REFERENCES hostresource("id") ON DELETE CASCADE
);
CREATE INDEX ON app_public.agencyhost("hostId");

--//

CREATE TABLE app_public.agencytourist (
  "agencyId"     INT NOT NULL
,        "touristId"     INT NOT NULL
,  "timeCreated" TIMESTAMP DEFAULT NOW()
,  PRIMARY KEY("agencyId", "touristId")
,  FOREIGN KEY ("agencyId") REFERENCES app_public.agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("touristId") REFERENCES app_public.touristresource("id") ON DELETE CASCADE
);
CREATE INDEX ON app_public.agencytourist("agencyId");
CREATE INDEX ON "app_public"."agencytourist"("touristId");
CREATE INDEX ON "app_public"."agencytourist"("agencyId", "touristId");
--//

CREATE TABLE app_public.agencytransport (
  "agencyId"     INT NOT NULL
,        "transportId"     INT NOT NULL
,  "timeCreated" TIMESTAMP DEFAULT NOW()
,  PRIMARY KEY("agencyId", "transportId")
,  FOREIGN KEY ("agencyId") REFERENCES app_public.agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("transportId") REFERENCES transportresource("id") ON DELETE CASCADE
);
CREATE INDEX ON app_public.agencytransport("transportId");

--//

CREATE TABLE app_public.agencytravelgroup (
  "agencyId"        INT
,  "travelGroupId"   INT
,  "timeCreated" TIMESTAMP DEFAULT NOW()
,  PRIMARY KEY("agencyId", "travelGroupId")
,  FOREIGN KEY ("agencyId") REFERENCES app_public.agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("travelGroupId") REFERENCES app_public.travelgroupresource("id") ON DELETE CASCADE
);
CREATE INDEX ON app_public.agencytravelgroup("travelGroupId");

--//

CREATE TABLE app_public.agencytripoffer (
  "agencyId"     INT NOT NULL
,        "tripOfferId"     INT NOT NULL
,  "timeCreated" TIMESTAMP DEFAULT NOW()
,  PRIMARY KEY("agencyId", "tripOfferId")
,  FOREIGN KEY ("agencyId") REFERENCES app_public.agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("tripOfferId") REFERENCES tripofferresource("id") ON DELETE CASCADE
);
CREATE INDEX ON app_public.agencytripoffer("tripOfferId");

--//

CREATE TABLE app_public.agencyuser (
  "agencyId"     INT
,        "userId"     INT
,  "timeCreated" TIMESTAMP DEFAULT NOW()
,  PRIMARY KEY("agencyId", "userId")
,  FOREIGN KEY ("agencyId") REFERENCES app_public.agency("id") ON DELETE CASCADE
,  FOREIGN KEY ("userId") REFERENCES app_public.usertable("id") ON DELETE CASCADE
);

CREATE INDEX ON app_public.agencyuser("userId");

--//

CREATE TABLE app_public.mediadestinationresource (
        "id" INT UNIQUE  ,
    "atAgency"  INT NOT NULL REFERENCES app_public.agency("id")  ON DELETE CASCADE,
    "atDestination"  INT NOT NULL REFERENCES destinationresource("id") ON DELETE CASCADE,
    "lastModified" TIMESTAMP DEFAULT NOW(),
     "lastModifiedBy" INT,
    "mainImage" INT REFERENCES app_public.medialocation("id"),
    "mainImageSignedUrl" TEXT UNIQUE,
    "guideImage" INT REFERENCES app_public.medialocation("id"),
    "guideSignedUrl" TEXT UNIQUE,
    "mapImage" INT REFERENCES app_public.medialocation("id"),
    "mapImageSignedUrl" TEXT UNIQUE,
    "thumbnailImage" INT REFERENCES app_public.medialocation("id"),
    "thumbnailImageSignedUrl" TEXT UNIQUE,
    "imageGallery1" INT REFERENCES app_public.medialocation("id"),
    "imageGallery1SignedUrl" TEXT UNIQUE,
    "imageGallery2" INT REFERENCES app_public.medialocation("id"),
    "imageGallery2SignedUrl" TEXT UNIQUE,
    "imageGallery3" INT REFERENCES app_public.medialocation("id"),
    "imageGallery3SignedUrl" TEXT UNIQUE,
    "imageGallery4" INT REFERENCES app_public.medialocation("id"),
    "imageGallery4SignedUrl" TEXT UNIQUE,
    "imageGallery5" INT REFERENCES app_public.medialocation("id"),
    "imageGallery5SignedUrl" TEXT UNIQUE,
    "imageGallery6" INT REFERENCES app_public.medialocation("id"),
    "imageGallery6SignedUrl" TEXT UNIQUE,
    "imageGallery7" INT REFERENCES app_public.medialocation("id"),
    "imageGallery7SignedUrl" TEXT UNIQUE,
    "imageGallery8" INT REFERENCES app_public.medialocation("id"),
    "imageGallery8SignedUrl" TEXT UNIQUE,
    "imageGallery9" INT REFERENCES app_public.medialocation("id"),
    "imageGallery9SignedUrl" TEXT UNIQUE,
    "imageGallery10" INT REFERENCES app_public.medialocation("id"),
    "imageGallery10SignedUrl" TEXT UNIQUE,
    "signedUrlsUpdate" TIMESTAMP NOT NULL DEFAULT (NOW() + cast('1 day' as interval) * 6) CHECK (
        ("signedUrlsUpdate") > NOW()
        AND ("signedUrlsUpdate") < (
            ("signedUrlsUpdate") + cast('1 day' as interval) * 7
        )
    ),
    "timeCreated" TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY("atAgency", "atDestination"),
    FOREIGN KEY ("lastModifiedBy") REFERENCES app_public.usertable("id")
);

CREATE INDEX ON app_public.mediadestinationresource("signedUrlsUpdate");

CREATE INDEX ON app_public.mediadestinationresource("atAgency");
CREATE INDEX ON app_public.mediadestinationresource("atDestination");
CREATE INDEX ON app_public.mediadestinationresource("lastModifiedBy");
CREATE INDEX ON app_public.mediadestinationresource("lastModified");
CREATE INDEX ON app_public.mediadestinationresource("mainImage");
CREATE INDEX ON app_public.mediadestinationresource("guideImage");
CREATE INDEX ON app_public.mediadestinationresource("mapImage");
CREATE INDEX ON app_public.mediadestinationresource("thumbnailImage");
CREATE INDEX ON app_public.mediadestinationresource("imageGallery1");
CREATE INDEX ON app_public.mediadestinationresource("imageGallery2");
CREATE INDEX ON app_public.mediadestinationresource("imageGallery3");
CREATE INDEX ON app_public.mediadestinationresource("imageGallery4");
CREATE INDEX ON app_public.mediadestinationresource("imageGallery5");
CREATE INDEX ON app_public.mediadestinationresource("imageGallery6");
CREATE INDEX ON app_public.mediadestinationresource("imageGallery7");
CREATE INDEX ON app_public.mediadestinationresource("imageGallery8");
CREATE INDEX ON app_public.mediadestinationresource("imageGallery9");
CREATE INDEX ON app_public.mediadestinationresource("imageGallery10");



--//

CREATE TABLE app_public.agencyreview (
    "id"          SERIAL primary key
,        "publisherId"            INT NOT NULL
,        "createdById"            INT NOT NULL
,   "isActive"                BOOLEAN DEFAULT TRUE
,        "halfStars"              SMALLINT
,        "reviewText"                      VARCHAR(1000)
,        "agencyIdTarget"             INT NOT NULL
,        "startDateTripEvent"     DATE
,        "byRomanian"             BOOLEAN
,   "timeCreated"           TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("agencyIdTarget") REFERENCES app_public.agency("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
);


CREATE INDEX ON app_public.agencyreview("publisherId");
CREATE INDEX ON app_public.agencyreview("agencyIdTarget");
CREATE INDEX ON app_public.agencyreview("createdById");

--//


CREATE TABLE app_public.guidereview (
    "id"     SERIAL primary key
,        "publisherId"       INT NOT NULL
,        "createdById"       INT NOT NULL
,   "isActive"           BOOLEAN DEFAULT TRUE
,        "halfStars"         SMALLINT
,        "reviewText"                 VARCHAR(1000)
,        "guideIdTarget"            INT NOT NULL
,        "startDateTripEvent"                DATE
,        "byRomanian"        BOOLEAN
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("guideIdTarget") REFERENCES app_public.guide("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")

);

CREATE INDEX ON app_public.guidereview("publisherId");
CREATE INDEX ON app_public.guidereview("guideIdTarget");
CREATE INDEX ON app_public.guidereview("createdById");

--//

CREATE TABLE app_public.agencybid (
    "id"            SERIAL primary key
,   "agencyId"                INT REFERENCES app_public.agency("id")
,   "touristResourceIdPool"  INT[]

);

CREATE INDEX ON app_public.agencybid("agencyId");

--//


CREATE TABLE app_public.agencymedialibrary (
    "id"         INT UNIQUE  ,
    "atAgency"          INT NOT NULL,
    "uploadLocations"       TEXT[],
    "locationSignedUrls"      TEXT[],
    "signedUrlsUpdate"      TIMESTAMP[],
        "lastModifiedBy"            INT NOT NULL,
   "timeCreated"           TIMESTAMP DEFAULT NOW(),
   "lastModified"           TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY ("atAgency") REFERENCES app_public.agency("id"),
    FOREIGN KEY ("lastModifiedBy") REFERENCES app_public.usertable("id")
);


CREATE INDEX ON app_public.agencymedialibrary("atAgency");
CREATE INDEX ON app_public.agencymedialibrary("lastModifiedBy");
CREATE INDEX ON app_public.agencymedialibrary("lastModified");

--//

ALTER TABLE app_public.agency
ADD FOREIGN KEY ("agencyMediaLibraryId") REFERENCES app_public.agencymedialibrary("id");
CREATE TABLE app_public.agencydeal (
    "id"                SERIAL primary key
,        "tripOfferResourceIdPool"     INT[]
,        "guideResourceIdPool"         INT[]
,        "touristResouceIdPool"        INT[]
,        "eventResourceIdPool"          INT[]
,        "transportationResourceIdPool" INT[]
,        "accomodationResourceIdPool"   INT[]
,        "hostResourceIdPool"           INT[]
);

ALTER TABLE app_public.agency
ADD FOREIGN KEY ("agencyDealId") REFERENCES app_public.agencydeal("id");

--//


CREATE TABLE app_public.agencyfavorite (
    "resourceId"   INT
,   "resourceType"  resourcetype
,   "atAgency"      INT REFERENCES app_public.agency
,  PRIMARY KEY( "atAgency","resourceId", "resourceType")

);

CREATE INDEX ON app_public.agencyfavorite("resourceType");
CREATE INDEX ON app_public.agencyfavorite("resourceId");
CREATE INDEX ON app_public.agencyfavorite("atAgency");


CREATE TABLE app_public.agencyoffer (
    "id"                   SERIAL primary key
,        "tripsOfferesourceIdPool"         INT[]
,        "guideResourceIdPool"             INT[]


);

ALTER TABLE app_public.agency
ADD FOREIGN KEY ("agencyOfferId") REFERENCES app_public.agencyoffer("id");

--//


CREATE TABLE app_public.date_ (
        "useTimeStamp"  Boolean NOT NULL DEFAULT false
,        "timeStamp"                TIMESTAMP
,        "year"          CHAR(4)
,        "month"         VARCHAR(10)
,        "day"           VARCHAR(10)
,        "allDayEvent"   BOOLEAN NOT NULL DEFAULT false
,        "hour"         VARCHAR(2)
,        "minute"       VARCHAR(2)
,   "timeCreated"   TIMESTAMP DEFAULT NOW()
);

--//

CREATE TABLE app_public.guidebid (
    "id"        SERIAL primary key
,   "tripOfferIdPool"    INT[]

);

ALTER TABLE app_public.guide
ADD  FOREIGN KEY ("guideBidId") REFERENCES app_public.guidebid("id");

--//


CREATE TABLE app_public.guidedeal (
    "id"               SERIAL primary key
,        "tripsOfferResourceIdPool"     INT[]
,        "agenciesRomanianIdPool"       INT[]
,        "agenciesAbroadIdPool"         INT[]
,        "touristResourceIdPool"          INT[]

);

ALTER TABLE app_public.guide
ADD   FOREIGN KEY ("guideDealId") REFERENCES app_public.guidedeal("id");

--//


CREATE TABLE app_public.guidefavorite (
    "id"           SERIAL primary key
,        "agenciesRomanianIdPool"     INT[]
,        "agenciesAbroadIdPool"       INT[]
,        "travelGroupResourceIdPool"  INT[]

);

ALTER TABLE app_public.guide
ADD   FOREIGN KEY ("guideFavoriteId") REFERENCES app_public.guidefavorite("id");

--//


CREATE TABLE app_public.guideoffer (
    "id"                   SERIAL primary key
,        "guideResourceIdPool"                  INT[]
,        "transportResourceIdPool"        INT[]
,        "hostResourceIdPool"             INT[]
,        "accomodationResourceIdPool"     INT[]

);

ALTER TABLE app_public.guide
ADD  FOREIGN KEY ("guideOfferId") REFERENCES app_public.guideoffer("id");

--//


CREATE TABLE app_public.touristbid (
    "id"                 SERIAL primary key
,   "tripOfferResourceIdPool"      INT[]
,        "eventResourceIdPool"          INT[]
,        "transportationResourceIdPool" INT[]
,        "accomodationResourceIdPool"   INT[]
,        "hostResourceIdPool"           INT[]

);

ALTER TABLE app_public.tourist
ADD   FOREIGN KEY ("touristBidId") REFERENCES app_public.touristbid("id");

--//


CREATE TABLE app_public.touristdeal (
    "id"               SERIAL primary key
,        "tripsOfferResourceIdPool"     INT[]
,   "guideOfferResourceIdPool"      INT[]
,        "agenciesRomanianIdPool"       INT[]
,        "agenciesAbroadIdPool"         INT[]
,        "eventResourceIdPool"          INT[]
,        "transportationResourceIdPool" INT[]
,        "accomodationResourceIdPool"   INT[]
,        "hostResourceIdPool"           INT[]

);

ALTER TABLE app_public.tourist
ADD   FOREIGN KEY ("touristDealId") REFERENCES app_public.touristdeal("id");

--//


CREATE TABLE app_public.touristfavorite (
    "id"               SERIAL primary key
,        "agenciesRomanianIdPool"       INT[]
,        "agenciesAbroadIdPool"         INT[]
,        "travelGroupResourceIdPool"    INT[]
,        "tripsOfferResourceIdPool"     INT[]
,        "guideResourceIdPool"          INT[]
,        "eventResourceIdPool"          INT[]
,        "transportationResourceIdPool" INT[]
,        "accomodationResourceIdPool"   INT[]
,        "hostResourceIdPool"           INT[]

);

ALTER TABLE app_public.tourist
ADD   FOREIGN KEY ("touristFavoriteId") REFERENCES app_public.touristfavorite("id");

--//


CREATE TABLE app_public.touristoffer (
    "id"               SERIAL primary key
,        "touristResourceIdPool"        INT[]

);

ALTER TABLE app_public.tourist
ADD FOREIGN KEY ("touristOfferId") REFERENCES app_public.touristoffer("id");

--//


CREATE TABLE app_public.touristreview (
    "id"     SERIAL primary key
,        "publisherId"       INT NOT NULL
,        "createdById"       INT NOT NULL
,   "isActive"          BOOLEAN DEFAULT true
,        "halfStars"         SMALLINT NOT NULL
,        "reviewText"                 VARCHAR(1000) NOT NULL
,        "touristIdTarget"        INT NOT NULL
,        "startDateTripEvent"                DATE NOT NULL
,        "byRomanian"        BOOLEAN
,   "timeCreated"       TIMESTAMP DEFAULT NOW()
,    FOREIGN KEY ("publisherId") REFERENCES app_public.publisher("id")
,    FOREIGN KEY ("touristIdTarget") REFERENCES app_public.tourist("id")
,    FOREIGN KEY ("createdById") REFERENCES app_public.usertable("id")
);

CREATE INDEX ON app_public.touristreview("publisherId");
CREATE INDEX ON app_public.touristreview("touristIdTarget");
CREATE INDEX ON app_public.touristreview("createdById");

--//

CREATE TABLE app_public.similarbytriptypeaccomodation (
  "accomodationIds" INT[],
     "tripTypeName"           VARCHAR(128),
  "atAgency"  INT REFERENCES app_public.agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT similartriptypeaccomodation_pkey PRIMARY KEY ("atAgency", "tripTypeName")
);
CREATE INDEX ON app_public.similarbytriptypeaccomodation("tripTypeName");
COMMENT ON COLUMN app_public.similarbytriptypeaccomodation."accomodationIds" is E'-- resourceIds in one dimension, resource types in the other (7-8 or so) [destinationres, eventres, accomodationres, hostres, transportres, app_public.guideres, app_public.tourist?, travelgroup?]
';

--//

CREATE TABLE app_public.similarbytriptypedestination (
  "destinationIds" INT[],
    "tripTypeName" VARCHAR(128),
  "atAgency"  INT REFERENCES app_public.agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT similartriptypedestination_pkey PRIMARY KEY ("atAgency", "tripTypeName")
);
CREATE INDEX ON app_public.similarbytriptypedestination ("tripTypeName");

--//

CREATE TABLE app_public.similarbytriptypeevent (
  "eventIds" INT[],
    "tripTypeName" VARCHAR(128),
  "atAgency"  INT REFERENCES app_public.agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT similartriptypeevent_pkey PRIMARY KEY ("atAgency", "tripTypeName")
);
CREATE INDEX ON app_public.similarbytriptypeevent ("tripTypeName");

--//

CREATE TABLE app_public.similarbytriptypeguide (
  "guideIds" INT[],
     "tripTypeName"           VARCHAR(128),
  "atAgency"  INT REFERENCES app_public.agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT similartriptypeguide_pkey PRIMARY KEY ("atAgency", "tripTypeName")
);
CREATE INDEX ON app_public.similarbytriptypeguide ("tripTypeName");

--//

CREATE TABLE app_public.similarbytriptypehost (
  "hostIds" INT[],
      "tripTypeName" VARCHAR(128),
  "atAgency"  INT REFERENCES app_public.agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT similartriptypehost_pkey PRIMARY KEY ("atAgency", "tripTypeName")
);
CREATE INDEX ON app_public.similarbytriptypehost("tripTypeName");


--//

CREATE TABLE app_public.similarbytriptypetransport (
  "transportIds" INT[],
   "tripTypeName" VARCHAR(128),
  "atAgency"  INT REFERENCES app_public.agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT similartriptypetransport_pkey PRIMARY KEY ("atAgency", "tripTypeName")
);
CREATE INDEX ON app_public.similarbytriptypetransport ("tripTypeName");

--//

CREATE TABLE app_public.similarbytriptypetravelgroup (
  "travelGroupIds" INT[],
      "tripTypeName" VARCHAR(128),
  "atAgency"  INT REFERENCES app_public.agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT similartriptypetravelgroup_pkey PRIMARY KEY ("atAgency", "tripTypeName")
);
CREATE INDEX ON app_public.similarbytriptypetravelgroup ("tripTypeName");

--//

CREATE TABLE app_public.assocaccomodation (
  "assocAccomodationId" INT[],
  "accomodationId" INT REFERENCES app_public.accomodationresource ON DELETE CASCADE,
  "atAgency"  INT REFERENCES app_public.agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT assocaccomodation_pkey PRIMARY KEY ("atAgency", "accomodationId")
);
CREATE INDEX ON app_public.assocaccomodation("accomodationId");
CREATE INDEX ON app_public.assocaccomodation("atAgency");
CREATE INDEX ON app_public.assocaccomodation("atAgency", "accomodationId");

--//

CREATE TABLE app_public.assochost (
  "assocHostId" INT[],
  "hostId" INT REFERENCES hostresource ON DELETE CASCADE,
  "atAgency"  INT REFERENCES app_public.agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT assochost_pkey PRIMARY KEY ("atAgency", "hostId")
);
CREATE INDEX ON app_public.assochost("hostId");
CREATE INDEX ON app_public.assochost("atAgency");
CREATE INDEX ON app_public.assochost("atAgency", "hostId");

--//

CREATE TABLE app_public.assocguide (
  "assocGuideId" INT[],
  "guideId" INT REFERENCES app_public.guideresource ON DELETE CASCADE,
  "atAgency"  INT REFERENCES app_public.agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT assocguide_pkey PRIMARY KEY ("atAgency", "guideId")
);
CREATE INDEX ON app_public.assocguide("guideId");

--//

CREATE TABLE app_public.assoctransport (
  "assocTransportId" INT[],
  "transportId" INT REFERENCES app_public.transportresource ON DELETE CASCADE,
  "atAgency"  INT REFERENCES app_public.agency ON DELETE CASCADE,
  CONSTRAINT assoctransport_pkey PRIMARY KEY ("atAgency", "transportId")
);
CREATE INDEX ON app_public.assoctransport("transportId");

--//

CREATE TABLE app_public.assocevent (
  "assocEventId" INT[],
  "eventId" INT REFERENCES eventresource ON DELETE CASCADE,
  "atAgency"  INT REFERENCES app_public.agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT assocevent_pkey PRIMARY KEY ("atAgency", "eventId")
);
CREATE INDEX ON app_public.assocevent("eventId");

--//

create function create_bookingcalendar() returns trigger as $$
DECLARE

p1 INT := NEW."createdById" ;
p2 INT := NEW."id" ;
p3 resourcetype := 'Unknown';
tname TEXT := TG_NAME ;

BEGIN

IF tName='guide_create_bookingcalendar' THEN
 p3 = 'Guide';
END IF;

IF tName='agency_create_bookingcalendar' THEN
 p3 = 'Agency';
END IF;

IF tName='touristresource_create_bookingcalendar' THEN
 p3 = 'TouristResource';
END IF;


IF tName='tourist_create_bookingcalendar' THEN
 p3 = 'Tourist';
END IF;

IF tName='event_create_bookingcalendar' THEN
 p3 = 'EventResource';
END IF;

IF tName='tripoffer_create_bookingcalendar' THEN
 p3 = 'TripOfferResource';
END IF;


IF tName='guideresource_create_bookingcalendar' THEN
 p3 = 'GuideResource';
END IF;

IF tName='host_create_bookingcalendar' THEN
 p3 = 'HostResource';
END IF;

IF tName='accomodationresource_create_bookingcalendar' THEN
 p3 = 'AccomodationResource';
END IF;

IF tName='carresource_create_bookingcalendar' THEN
 p3 = 'CarResource';
END IF;

IF tName='destinationresource_create_bookingcalendar' THEN
 p3 = 'DestinationResource';
END IF;

IF tName='travelgroup_create_bookingcalendar' THEN
 p3 = 'TravelGroup';
END IF;



IF p1 IS NULL THEN
    RAISE EXCEPTION 'createdById cannot be null in createCalendar';
END IF;

IF p2 IS NULL THEN
    RAISE EXCEPTION 'id cannot be null in createCalendar';
END IF;

IF tName IS NULL THEN
 p3 = 'Unknown';
END IF;



INSERT INTO app_public.bookingcalendar ("createdById", "belongsToId", "belongsToType")
  VALUES
  (p1, p2, p3);
  RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

--//
create function create_contact() returns trigger as $$
DECLARE

p1 INT := NEW."createdById" ;
p2 INT := NEW."id" ;
p3 resourcetype := 'Unknown';
tname TEXT := TG_NAME ;

BEGIN


IF tName='guide_create_contact' THEN
   p3 = 'Guide';
END IF;

IF tName='agency_create_contact' THEN
   p3 = 'Agency';
END IF;

IF tName='touristresource_create_contact' THEN
   p3 = 'TouristResource';
END IF;


IF tName='tourist_create_contact' THEN
   p3 = 'Tourist';
END IF;

IF tName='event_create_contact' THEN
   p3 = 'EventResource';
END IF;

IF tName='tripoffer_create_contact' THEN
   p3 = 'TripOfferResource';
END IF;


IF tName='guideresource_create_contact' THEN
   p3 = 'GuideResource';
END IF;

IF tName='host_create_contact' THEN
   p3 = 'HostResource';
END IF;

IF tName='accomodationresource_create_contact' THEN
   p3 = 'AccomodationResource';
END IF;

IF tName='carresource_create_contact' THEN
   p3 = 'CarResource';
END IF;

IF tName='destinationresource_create_contact' THEN
   p3 = 'DestinationResource';
END IF;

IF tName='travelgroup_create_contact' THEN
   p3 = 'TravelGroup';
END IF;


IF p1 IS NULL THEN
    RAISE EXCEPTION 'createdById cannot be null in createContact';
END IF;

IF p2 IS NULL THEN
    RAISE EXCEPTION 'id cannot be null in createContact';
END IF;

IF tName IS NULL THEN
   p3 = 'Unknown';
END IF;


INSERT INTO app_public.contact ("createdById", "belongsToId", "belongsToType")
  VALUES
  (p1, p2, p3);
  RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

--//
create function create_publisher() returns trigger as $$
DECLARE
p1 INT := NEW."createdById" ;
p2 VARCHAR(240)  := NEW."name" ;
p3 INT  := NEW."id" ;
p4 resourcetype := 'Unknown';
tname TEXT := TG_NAME ;

BEGIN

IF p1 IS NULL THEN
    RAISE EXCEPTION 'createdById cannot be null in createPublisher';
END IF;

IF p2 IS NULL THEN
    RAISE EXCEPTION 'name cannot be null in createPublisher';
END IF;

IF tname IS NULL THEN
    RAISE EXCEPTION 'tname cannot be null in createPublisher';
END IF;


IF tName='guide_create_publisher' THEN
    p4 = 'Guide';
END IF;

IF tName='agency_create_publisher' THEN
  p4 = 'Agency';
END IF;

IF tName='touristresource_create_publisher' THEN
 p4 = 'TouristResource';
END IF;


IF tName='tourist_create_publisher' THEN
 p4 = 'Tourist';
END IF;

INSERT INTO app_public.publisher ("createdById", "name", "belongsToId", "belongsToType")
  VALUES
  (p1, p2, p3, p4);
  RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

--//
CREATE FUNCTION updateAgencyUser_func() RETURNS TRIGGER AS $$
DECLARE
p1 INT := NEW."id" ;
p2 INT := NEW."createdById" ;

BEGIN

IF p1 IS NULL THEN
    RAISE EXCEPTION 'p1 cannot be null';
END IF;

IF p2 IS NULL THEN
    RAISE EXCEPTION 'p2 cannot be null';
END IF;

  INSERT INTO app_public.agencyuser ("agencyId", "userId")
  VALUES
  (p1, p2);

  UPDATE app_public.usertable SET "atAgency"=p1 WHERE "id"=p2;

  RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';



-- CREATE TRIGGER updateAgencyUserINS
-- AFTER
-- INSERT ON app_public.usertable AS $$ BEGIN
-- SET
--   NOCOUNT ON;
-- INSERT INTO app_public.agencyuser(
--     "atAgency",
--     "accomodationId"
--   )
-- SELECT
--   i."atAgency",
--   i."accomodationId"
-- FROM inserted i
-- END;
-- $$ LANGUAGE 'plpgsql';
-- CREATE TRIGGER updateAgencyUserDEL
-- AFTER
--   DELETE ON app_public.usertable AS $$ BEGIN
-- SET
--   NOCOUNT ON;
-- DELETE FROM app_public.agencyuser("accomodationId")
-- SELECT
--   d."accomodationId"
-- FROM deleted d
-- END;
-- $$ LANGUAGE 'plpgsql';
-- -- CREATE TRIGGER updateAgencyUser AFTER INSERT
-- --     ON app_public.usertable
-- --     EXECUTE PROCEDURE updateAgencyUser_func("atAgency", "userId");

--//

CREATE FUNCTION updatemediadestination_func()  RETURNS TRIGGER AS $$
DECLARE
p1 INT := NEW."atAgency" ;
p2 INT := NEW."id" ;
p3 timestamp := NEW."lastModified" ;

BEGIN

IF p1 IS NULL THEN
    RAISE EXCEPTION 'p1 cannot be null';
END IF;

IF p2 IS NULL THEN
    RAISE EXCEPTION 'p2 cannot be null';
END IF;

IF p3 IS NULL THEN
    RAISE EXCEPTION 'p3 cannot be null';
END IF;


  INSERT INTO app_public.mediadestinationresource ("atAgency", "atDestination", "lastModified")
  VALUES
  (p1, p2, p3);
  RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

--//



create function set_time_created() returns trigger as $$
begin
  new."timeCreated" := current_timestamp;
  return new;
end;
$$ language plpgsql;

--//
CREATE TABLE app_public.assocdestination (
  "assocDestinationId" INT[],
  "destinationId" INT REFERENCES destinationresource ON DELETE CASCADE,
  "atAgency"  INT REFERENCES app_public.agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT assocdestination_pkey PRIMARY KEY ("atAgency", "destinationId")
);
CREATE INDEX ON app_public.assocdestination("destinationId");

--//

CREATE TABLE app_public.assoctravelgroup (
  "assocTravelGroupId" INT[],
  "travelGroupId" INT REFERENCES app_public.travelgroupresource ON DELETE CASCADE,
  "atAgency"  INT REFERENCES app_public.agency ON DELETE CASCADE,
  "timeCreated" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT assoctravelgroup_pkey PRIMARY KEY ("atAgency", "travelGroupId")
);
CREATE INDEX ON app_public.assoctravelgroup("travelGroupId");

--//

--//

--// with SERIAL primary keys

--  INSERT INTO account("id") VALUES(1);

--  INSERT INTO app_public.usertable("id","userEmail") VALUES(1,'ss');

-- INSERT INTO app_public.agency("name","id","activeInsurance","insuranceExpery","createdById","isActive","isRomanian","lastModified") VALUES('Hemmingways construnction tours',1,false,'2020-03-20 18:45:45',1,true,true,'2000-10-10 08:08:19');


--//

--// with uuid s

-- INSERT INTO account("id") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');

-- INSERT INTO app_public.usertable("id","userEmail") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','sorens@gmail.com');

-- INSERT INTO app_public.contact("id","createdById","belongsToType","belongsToId") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','Guide','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');

-- INSERT INTO app_public.publisher("id","createdById","publisherId","isAgency","isTourist","isGuide","command") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12','true','false','false',ARRAY['Guide']::logcommand[]);

-- INSERT INTO calendarentry("id","comment") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14',ARRAY['THis is freakin marvelous']);

-- INSERT INTO app_public.bookingcalendar("id","id","publisherId","createdById","id") VALUES('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14');

-- INSERT INTO app_public.agency("agencyName","id","activeInsurance","insuranceExpery","publisherId","createdById","isActive","isRomanian","bookingCalendarId","lastModified") VALUES('Hemmingways construnction tours','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',false,'2020-03-20 18:45:45','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12','a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',true,true,'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14','2000-10-10 08:08:19');


-- --//



create function set_last_modified() returns trigger as $$
begin
  new."lastModified" := current_timestamp;
  return new;
end;
$$ language plpgsql;

--//
  create trigger travelgroupresource_create_bookingcalendar after insert
  on app_public.travelgroupresource
  for each row
  execute procedure create_bookingcalendar();

  --//

  create trigger guideresource_create_bookingcalendar after insert
  on app_public.guideresource
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger transportresource_create_bookingcalendar after insert
  on app_public.transportresource
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger hostresource_create_bookingcalendar after insert
  on app_public.hostresource
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger tourist_create_bookingcalendar after insert
  on app_public.touristresource
  for each row
  execute procedure create_bookingcalendar();

  --//
create trigger destinationresource_create_bookingcalendar after insert
  on app_public.destinationresource
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger eventresource_create_bookingcalendar after insert
  on app_public.eventresource
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger tripofferresource_create_bookingcalendar after insert
  on app_public.tripofferresource
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger accomodationresource_create_bookingcalendar after insert
  on app_public.accomodationresource
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger guide_create_bookingcalendar after insert
  on app_public.guide
  for each row
  execute procedure create_bookingcalendar();

  --//

create trigger agency_create_bookingcalendar after insert
  on app_public.agency
  for each row
  execute procedure create_bookingcalendar();

  --//


create trigger touristresource_create_bookingcalendar after insert
  on app_public.touristresource
  for each row
  execute procedure create_bookingcalendar();

  --//



create trigger guide_create_contact after insert
  on app_public.guide
  for each row
  execute procedure create_contact();

  --//

create trigger agency_create_contact after insert
  on app_public.agency
  for each row
  execute procedure create_contact();

  --//




create trigger touristresource_create_contact after insert
  on app_public.touristresource
  for each row
  execute procedure create_contact();

  --//


create trigger accomodationresource_create_contact after insert
  on app_public.accomodationresource
  for each row
  execute procedure create_contact();

  --//


create trigger eventresource_create_contact after insert
  on app_public.eventresource
  for each row
  execute procedure create_contact();

  --//


create trigger transportresource_create_contact after insert
  on app_public.transportresource
  for each row
  execute procedure create_contact();

  --//



create trigger hostresource_create_contact after insert
  on app_public.hostresource
  for each row
  execute procedure create_contact();

  --//

create trigger tourist_create_contact after insert
  on app_public.tourist
  for each row
  execute procedure create_contact();

  --//


create trigger travelgroupresource_create_contact after insert
  on app_public.travelgroupresource
  for each row
  execute procedure create_contact();

  --//
create trigger triptype_last_modified before update
  on triptype
  for each row
  execute procedure set_last_modified();

  --//

create trigger geocoding_last_modified before update
  on app_public.geocoding
  for each row
  execute procedure set_last_modified();

  --//

  create trigger presentation_last_modified before update
  on app_public.presentation
  for each row
  execute procedure set_last_modified();

  --//

create trigger  priceinfo_last_modified before update
  on  app_public.priceinfo
  for each row
  execute procedure set_last_modified();

  --//

create trigger accomodationresource_last_modified before update
  on app_public.accomodationresource
  for each row
  execute procedure set_last_modified();

  --//

create trigger destinationresource_last_modified before update
  on app_public.destinationresource
  for each row
  execute procedure set_last_modified();

  --//

create trigger eventresource_last_modified before update
  on app_public.eventresource
  for each row
  execute procedure set_last_modified();

  --//

create trigger tripofferresource_last_modified before update
  on app_public.tripofferresource
  for each row
  execute procedure set_last_modified();

  --//

create trigger transportresource_last_modified before update
  on app_public.transportresource
  for each row
  execute procedure set_last_modified();

  --//

create trigger hostresource_last_modified before update
  on app_public.hostresource
  for each row
  execute procedure set_last_modified();

  --//

create trigger guideresource_last_modified before update
  on app_public.guideresource
  for each row
  execute procedure set_last_modified();

  --//

create trigger guide_last_modified before update
  on app_public.guide
  for each row
  execute procedure set_last_modified();

  --//

create trigger agency_last_modified before update
  on app_public.agency
  for each row
  execute procedure set_last_modified();

  --//

create trigger touristresource_last_modified before update
  on app_public.touristresource
  for each row
  execute procedure set_last_modified();

  --//

  create trigger travelgroupresource_last_modified before update
  on app_public.travelgroupresource
  for each row
  execute procedure set_last_modified();

  --//

  create trigger agencyaccomodation_last_modified before update
  on app_public.agencyaccomodation
  for each row
  execute procedure set_last_modified();

  --//

  create trigger mediadestinationresource_last_modified before update
  on app_public.mediadestinationresource
  for each row
  execute procedure set_last_modified();

  --//

  create trigger agencymedialibrary_last_modified before update
  on app_public.agencymedialibrary
  for each row
  execute procedure set_last_modified();

  --//



create trigger guide_create_publisher after insert
  on app_public.guide
  for each row
  execute procedure create_publisher();

  --//

create trigger agency_create_publisher after insert
  on app_public.agency
  for each row
  execute procedure create_publisher();

  --//


create trigger touristresource_create_publisher after insert
  on app_public.touristresource
  for each row
  execute procedure create_publisher();

  --//
create trigger triptype_time_created before insert
  on app_public.triptype
  for each row
  execute procedure set_time_created();

  --//

create trigger usertable_time_created before insert
  on app_public.usertable
  for each row
  execute procedure set_time_created();

  --//

  create trigger contact_time_created before insert
  on app_public.contact
  for each row
  execute procedure set_time_created();

  --//

 create trigger publisher_time_created before insert
  on app_public.publisher
  for each row
  execute procedure set_time_created();

  --//

create trigger geocoding_time_created before insert
  on app_public.geocoding
  for each row
  execute procedure set_time_created();

  --//
  create trigger accounting_time_created before insert
  on app_public.accounting
  for each row
  execute procedure set_time_created();

  --//

  create trigger bid_time_created before insert
  on app_public.bid
  for each row
  execute procedure set_time_created();

  --//

  create trigger auctioninfo_time_created before insert
  on app_public.auctioninfo
  for each row
  execute procedure set_time_created();

  --//

    create trigger presentation_time_created before insert
  on app_public.presentation
  for each row
  execute procedure set_time_created();

  --//

create trigger priceinfo_time_created before insert
  on  app_public.priceinfo
  for each row
  execute procedure set_time_created();

  --//

  create trigger calendarentry_time_created before insert
  on app_public.calendarentry
  for each row
  execute procedure set_time_created();

  --//

  create trigger timerange_time_created before insert
  on app_public.timerange
  for each row
  execute procedure set_time_created();

  --//

  create trigger bookingcalendar_time_created before insert
  on app_public.bookingcalendar
  for each row
  execute procedure set_time_created();

  --//

create trigger accomodationresource_time_created before insert
  on app_public.accomodationresource
  for each row
  execute procedure set_time_created();

  --//

create trigger destinationresource_time_created before insert
  on app_public.destinationresource
  for each row
  execute procedure set_time_created();

  --//

create trigger eventresource_time_created before insert
  on app_public.eventresource
  for each row
  execute procedure set_time_created();

  --//

create trigger tripofferresource_time_created before insert
  on app_public.tripofferresource
  for each row
  execute procedure set_time_created();

  --//

  create trigger  roomcalendarentry_time_created before insert
  on  app_public.roomcalendarentry
  for each row
  execute procedure set_time_created();

  --//

  create trigger roomcalendar_time_created before insert
  on app_public.roomcalendar
  for each row
  execute procedure set_time_created();

  --//

create trigger transportresource_time_created before insert
  on app_public.transportresource
  for each row
  execute procedure set_time_created();

  --//

create trigger review_time_created before insert
  on app_public.review
  for each row
  execute procedure set_time_created();

  --//

create trigger hostresource_time_created before insert
  on app_public.hostresource
  for each row
  execute procedure set_time_created();

  --//

create trigger tourist_time_created before insert
  on app_public.touristresource
  for each row
  execute procedure set_time_created();

  --//

create trigger languagelevel_time_created before insert
  on app_public.languagelevel
  for each row
  execute procedure set_time_created();

  --//

create trigger guideresource_time_created before insert
  on app_public.guideresource
  for each row
  execute procedure set_time_created();

  --//

create trigger guide_time_created before insert
  on app_public.guide
  for each row
  execute procedure set_time_created();

  --//

create trigger agency_time_created before insert
  on app_public.agency
  for each row
  execute procedure set_time_created();

  --//

  create trigger medialocation_time_created before insert
  on app_public.medialocation
  for each row
  execute procedure set_time_created();

  --//

create trigger touristresource_time_created before insert
  on app_public.touristresource
  for each row
  execute procedure set_time_created();

  --//

  create trigger travelgroupresource_time_created before insert
  on app_public.travelgroupresource
  for each row
  execute procedure set_time_created();

  --//

  create trigger agencyaccomodation_time_created before insert
  on app_public.agencyaccomodation
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencyevent_time_created before insert
  on app_public.agencyevent
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencyguide_time_created before insert
  on app_public.agencyguide
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencyhost_time_created before insert
  on app_public.agencyhost
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencytourist_time_created before insert
  on app_public.agencytourist
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencytransport_time_created before insert
  on app_public.agencytransport
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencytravelgroup_time_created before insert
  on app_public.agencytravelgroup
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencytripoffer_time_created before insert
  on app_public.agencytripoffer
  for each row
  execute procedure set_time_created();

  --//

    create trigger agencyuser_time_created before insert
  on app_public.agencyuser
  for each row
  execute procedure set_time_created();

  --//

  create trigger mediadestinationresource_time_created before insert
  on app_public.mediadestinationresource
  for each row
  execute procedure set_time_created();

  --//

  create trigger agencyreview_time_created before insert
  on app_public.agencyreview
  for each row
  execute procedure set_time_created();

  --//


  create trigger guidereview_time_created before insert
  on app_public.guidereview
  for each row
  execute procedure set_time_created();

  --//


  create trigger date_time_created before insert
  on app_public.date_
  for each row
  execute procedure set_time_created();

  --//


  create trigger touristreview_time_created before insert
  on app_public.touristreview
  for each row
  execute procedure set_time_created();

  --//

  create trigger agencymedialibrary_time_created before insert
  on app_public.agencymedialibrary
  for each row
  execute procedure set_time_created();

  --//

  create trigger similarbytriptypeaccomodation_time_created before insert
  on app_public.similarbytriptypeaccomodation
  for each row
  execute procedure set_time_created();

  --//

  create trigger similarbytriptypeevent_time_created before insert
  on app_public.similarbytriptypeevent
  for each row
  execute procedure set_time_created();

  --//

  create trigger similarbytriptypeguide_time_created before insert
  on app_public.similarbytriptypeguide
  for each row
  execute procedure set_time_created();

  --//

  create trigger similarbytriptypehost_time_created before insert
  on app_public.similarbytriptypehost
  for each row
  execute procedure set_time_created();

  --//

  create trigger similarbytriptypetransport_time_created before insert
  on app_public.similarbytriptypetransport
  for each row
  execute procedure set_time_created();

  --//

  create trigger similarbytriptypetravelgroup_time_created before insert
  on app_public.similarbytriptypetravelgroup
  for each row
  execute procedure set_time_created();

  --//

  create trigger assocaccomodation_time_created before insert
  on app_public.assocaccomodation
  for each row
  execute procedure set_time_created();

  --//


  create trigger assocguide_time_created before insert
  on app_public.assocguide
  for each row
  execute procedure set_time_created();

  --//

  create trigger assochost_time_created before insert
  on app_public.assochost
  for each row
  execute procedure set_time_created();

  --//

  create trigger assocevent_time_created before insert
  on app_public.assocevent
  for each row
  execute procedure set_time_created();

  --//

  create trigger assocdestination_time_created before insert
  on app_public.assocdestination
  for each row
  execute procedure set_time_created();

  --//

  create trigger assoctravelgroup_time_created before insert
  on app_public.assoctravelgroup
  for each row
  execute procedure set_time_created();

  --//



CREATE TRIGGER updateAgencyUserINS
AFTER INSERT ON app_public.agency
FOR EACH ROW
    EXECUTE PROCEDURE updateAgencyUser_func();

--//



CREATE TRIGGER updateMediaDestinationINS
AFTER INSERT ON app_public.destinationresource
FOR EACH ROW
    EXECUTE PROCEDURE updatemediadestination_func();

--//
