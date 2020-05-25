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

