

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
,  CONSTRAINT triptype_pkey PRIMARY KEY ("atAgency", "tripTypeName") -- explicit pk
);

--//

CREATE TABLE app_public.contact (

     "firstName"         VARCHAR(64)
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
