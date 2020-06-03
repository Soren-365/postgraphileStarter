
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
