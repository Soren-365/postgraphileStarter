
import topics from './psqlDeleteMutation/topics'
import posts from './psqlDeleteMutation/posts'
import user_feed_posts from './psqlDeleteMutation/user_feed_posts'
import triptype from './psqlDeleteMutation/triptype'
import usertabl from './psqlDeleteMutation/usertabl'
import account from './psqlDeleteMutation/account'
import contact from './psqlDeleteMutation/contact'
import publisher from './psqlDeleteMutation/publisher'
import commandlogentry from './psqlDeleteMutation/commandlogentry'
import publisher from './psqlDeleteMutation/publisher'
import geocoding from './psqlDeleteMutation/geocoding'
import accounting from './psqlDeleteMutation/accounting'
import presentation from './psqlDeleteMutation/presentation'
import bid from './psqlDeleteMutation/bid'
import auctioninfo from './psqlDeleteMutation/auctioninfo'
import priceinfo from './psqlDeleteMutation/priceinfo'
import calendarentry from './psqlDeleteMutation/calendarentry'
import timerange from './psqlDeleteMutation/timerange'
import bookingcalendar from './psqlDeleteMutation/bookingcalendar'
import accomodationresource from './psqlDeleteMutation/accomodationresource'
import destinationresource from './psqlDeleteMutation/destinationresource'
import eventresource from './psqlDeleteMutation/eventresource'
import tripofferresource from './psqlDeleteMutation/tripofferresource'
import roomcalendarentry from './psqlDeleteMutation/roomcalendarentry'
import roomcalendar from './psqlDeleteMutation/roomcalendar'
import roomlist from './psqlDeleteMutation/roomlist'
import transportresource from './psqlDeleteMutation/transportresource'
import review from './psqlDeleteMutation/review'
import hostresource from './psqlDeleteMutation/hostresource'
import tourist from './psqlDeleteMutation/tourist'
import languagelevel from './psqlDeleteMutation/languagelevel'
import guideresource from './psqlDeleteMutation/guideresource'
import guide from './psqlDeleteMutation/guide'
import agency from './psqlDeleteMutation/agency'
import medialocation from './psqlDeleteMutation/medialocation'
import touristresource from './psqlDeleteMutation/touristresource'
import travelgroupresource from './psqlDeleteMutation/travelgroupresource'
import agencyaccomodation from './psqlDeleteMutation/agencyaccomodation'
import agencyevent from './psqlDeleteMutation/agencyevent'
import agencyguide from './psqlDeleteMutation/agencyguide'
import agencyhost from './psqlDeleteMutation/agencyhost'
import agencytourist from './psqlDeleteMutation/agencytourist'
import agencytransport from './psqlDeleteMutation/agencytransport'
import agencytravelgroup from './psqlDeleteMutation/agencytravelgroup'
import agencytripoffer from './psqlDeleteMutation/agencytripoffer'
import agencyuser from './psqlDeleteMutation/agencyuser'
import mediadestinationresource from './psqlDeleteMutation/mediadestinationresource'
import agencyreview from './psqlDeleteMutation/agencyreview'
import guidereview from './psqlDeleteMutation/guidereview'
import agencybid from './psqlDeleteMutation/agencybid'
import agencymedialibrary from './psqlDeleteMutation/agencymedialibrary'
import agencydeal from './psqlDeleteMutation/agencydeal'
import agencyfavorite from './psqlDeleteMutation/agencyfavorite'
import agencyoffer from './psqlDeleteMutation/agencyoffer'
import date_ from './psqlDeleteMutation/date_'
import guidebid from './psqlDeleteMutation/guidebid'
import guidedeal from './psqlDeleteMutation/guidedeal'
import guidefavorite from './psqlDeleteMutation/guidefavorite'
import guideoffer from './psqlDeleteMutation/guideoffer'
import touristbid from './psqlDeleteMutation/touristbid'
import touristdeal from './psqlDeleteMutation/touristdeal'
import touristfavorite from './psqlDeleteMutation/touristfavorite'
import touristoffer from './psqlDeleteMutation/touristoffer'
import touristreview from './psqlDeleteMutation/touristreview'
import similarbytriptypeaccomodation from './psqlDeleteMutation/similarbytriptypeaccomodation'
import similarbytriptypedestination from './psqlDeleteMutation/similarbytriptypedestination'
import similarbytriptypeevent from './psqlDeleteMutation/similarbytriptypeevent'
import similarbytriptypeguide from './psqlDeleteMutation/similarbytriptypeguide'
import similarbytriptypehost from './psqlDeleteMutation/similarbytriptypehost'
import similarbytriptypetransport from './psqlDeleteMutation/similarbytriptypetransport'
import similarbytriptypetravelgroup from './psqlDeleteMutation/similarbytriptypetravelgroup'
import assocaccomodation from './psqlDeleteMutation/assocaccomodation'
import assochost from './psqlDeleteMutation/assochost'
import assocguide from './psqlDeleteMutation/assocguide'
import assoctransport from './psqlDeleteMutation/assoctransport'
import assocevent from './psqlDeleteMutation/assocevent'
import assocdestination from './psqlDeleteMutation/assocdestination'
import assoctravelgroup from './psqlDeleteMutation/assoctravelgroup'

import type { topicsdeleteMutationType }  from './psqlDeleteMutation/types/topics'
import type { postsdeleteMutationType }  from './psqlDeleteMutation/types/posts'
import type { user_feed_postsdeleteMutationType }  from './psqlDeleteMutation/types/user_feed_posts'
import type { triptypedeleteMutationType }  from './psqlDeleteMutation/types/triptype'
import type { usertabldeleteMutationType }  from './psqlDeleteMutation/types/usertabl'
import type { accountdeleteMutationType }  from './psqlDeleteMutation/types/account'
import type { contactdeleteMutationType }  from './psqlDeleteMutation/types/contact'
import type { publisherdeleteMutationType }  from './psqlDeleteMutation/types/publisher'
import type { commandlogentrydeleteMutationType }  from './psqlDeleteMutation/types/commandlogentry'
import type { publisherdeleteMutationType }  from './psqlDeleteMutation/types/publisher'
import type { geocodingdeleteMutationType }  from './psqlDeleteMutation/types/geocoding'
import type { accountingdeleteMutationType }  from './psqlDeleteMutation/types/accounting'
import type { presentationdeleteMutationType }  from './psqlDeleteMutation/types/presentation'
import type { biddeleteMutationType }  from './psqlDeleteMutation/types/bid'
import type { auctioninfodeleteMutationType }  from './psqlDeleteMutation/types/auctioninfo'
import type { priceinfodeleteMutationType }  from './psqlDeleteMutation/types/priceinfo'
import type { calendarentrydeleteMutationType }  from './psqlDeleteMutation/types/calendarentry'
import type { timerangedeleteMutationType }  from './psqlDeleteMutation/types/timerange'
import type { bookingcalendardeleteMutationType }  from './psqlDeleteMutation/types/bookingcalendar'
import type { accomodationresourcedeleteMutationType }  from './psqlDeleteMutation/types/accomodationresource'
import type { destinationresourcedeleteMutationType }  from './psqlDeleteMutation/types/destinationresource'
import type { eventresourcedeleteMutationType }  from './psqlDeleteMutation/types/eventresource'
import type { tripofferresourcedeleteMutationType }  from './psqlDeleteMutation/types/tripofferresource'
import type { roomcalendarentrydeleteMutationType }  from './psqlDeleteMutation/types/roomcalendarentry'
import type { roomcalendardeleteMutationType }  from './psqlDeleteMutation/types/roomcalendar'
import type { roomlistdeleteMutationType }  from './psqlDeleteMutation/types/roomlist'
import type { transportresourcedeleteMutationType }  from './psqlDeleteMutation/types/transportresource'
import type { reviewdeleteMutationType }  from './psqlDeleteMutation/types/review'
import type { hostresourcedeleteMutationType }  from './psqlDeleteMutation/types/hostresource'
import type { touristdeleteMutationType }  from './psqlDeleteMutation/types/tourist'
import type { languageleveldeleteMutationType }  from './psqlDeleteMutation/types/languagelevel'
import type { guideresourcedeleteMutationType }  from './psqlDeleteMutation/types/guideresource'
import type { guidedeleteMutationType }  from './psqlDeleteMutation/types/guide'
import type { agencydeleteMutationType }  from './psqlDeleteMutation/types/agency'
import type { medialocationdeleteMutationType }  from './psqlDeleteMutation/types/medialocation'
import type { touristresourcedeleteMutationType }  from './psqlDeleteMutation/types/touristresource'
import type { travelgroupresourcedeleteMutationType }  from './psqlDeleteMutation/types/travelgroupresource'
import type { agencyaccomodationdeleteMutationType }  from './psqlDeleteMutation/types/agencyaccomodation'
import type { agencyeventdeleteMutationType }  from './psqlDeleteMutation/types/agencyevent'
import type { agencyguidedeleteMutationType }  from './psqlDeleteMutation/types/agencyguide'
import type { agencyhostdeleteMutationType }  from './psqlDeleteMutation/types/agencyhost'
import type { agencytouristdeleteMutationType }  from './psqlDeleteMutation/types/agencytourist'
import type { agencytransportdeleteMutationType }  from './psqlDeleteMutation/types/agencytransport'
import type { agencytravelgroupdeleteMutationType }  from './psqlDeleteMutation/types/agencytravelgroup'
import type { agencytripofferdeleteMutationType }  from './psqlDeleteMutation/types/agencytripoffer'
import type { agencyuserdeleteMutationType }  from './psqlDeleteMutation/types/agencyuser'
import type { mediadestinationresourcedeleteMutationType }  from './psqlDeleteMutation/types/mediadestinationresource'
import type { agencyreviewdeleteMutationType }  from './psqlDeleteMutation/types/agencyreview'
import type { guidereviewdeleteMutationType }  from './psqlDeleteMutation/types/guidereview'
import type { agencybiddeleteMutationType }  from './psqlDeleteMutation/types/agencybid'
import type { agencymedialibrarydeleteMutationType }  from './psqlDeleteMutation/types/agencymedialibrary'
import type { agencydealdeleteMutationType }  from './psqlDeleteMutation/types/agencydeal'
import type { agencyfavoritedeleteMutationType }  from './psqlDeleteMutation/types/agencyfavorite'
import type { agencyofferdeleteMutationType }  from './psqlDeleteMutation/types/agencyoffer'
import type { date_deleteMutationType }  from './psqlDeleteMutation/types/date_'
import type { guidebiddeleteMutationType }  from './psqlDeleteMutation/types/guidebid'
import type { guidedealdeleteMutationType }  from './psqlDeleteMutation/types/guidedeal'
import type { guidefavoritedeleteMutationType }  from './psqlDeleteMutation/types/guidefavorite'
import type { guideofferdeleteMutationType }  from './psqlDeleteMutation/types/guideoffer'
import type { touristbiddeleteMutationType }  from './psqlDeleteMutation/types/touristbid'
import type { touristdealdeleteMutationType }  from './psqlDeleteMutation/types/touristdeal'
import type { touristfavoritedeleteMutationType }  from './psqlDeleteMutation/types/touristfavorite'
import type { touristofferdeleteMutationType }  from './psqlDeleteMutation/types/touristoffer'
import type { touristreviewdeleteMutationType }  from './psqlDeleteMutation/types/touristreview'
import type { similarbytriptypeaccomodationdeleteMutationType }  from './psqlDeleteMutation/types/similarbytriptypeaccomodation'
import type { similarbytriptypedestinationdeleteMutationType }  from './psqlDeleteMutation/types/similarbytriptypedestination'
import type { similarbytriptypeeventdeleteMutationType }  from './psqlDeleteMutation/types/similarbytriptypeevent'
import type { similarbytriptypeguidedeleteMutationType }  from './psqlDeleteMutation/types/similarbytriptypeguide'
import type { similarbytriptypehostdeleteMutationType }  from './psqlDeleteMutation/types/similarbytriptypehost'
import type { similarbytriptypetransportdeleteMutationType }  from './psqlDeleteMutation/types/similarbytriptypetransport'
import type { similarbytriptypetravelgroupdeleteMutationType }  from './psqlDeleteMutation/types/similarbytriptypetravelgroup'
import type { assocaccomodationdeleteMutationType }  from './psqlDeleteMutation/types/assocaccomodation'
import type { assochostdeleteMutationType }  from './psqlDeleteMutation/types/assochost'
import type { assocguidedeleteMutationType }  from './psqlDeleteMutation/types/assocguide'
import type { assoctransportdeleteMutationType }  from './psqlDeleteMutation/types/assoctransport'
import type { assoceventdeleteMutationType }  from './psqlDeleteMutation/types/assocevent'
import type { assocdestinationdeleteMutationType }  from './psqlDeleteMutation/types/assocdestination'
import type { assoctravelgroupdeleteMutationType }  from './psqlDeleteMutation/types/assoctravelgroup'

import { DbTables } from 'src/functions/__generatedFromBackend__/tableEnums'

export const Lookup = {
    
topics:  topics,
posts:  posts,
user_feed_posts:  user_feed_posts,
triptype:  triptype,
usertabl:  usertabl,
account:  account,
contact:  contact,
publisher:  publisher,
commandlogentry:  commandlogentry,
publisher:  publisher,
geocoding:  geocoding,
accounting:  accounting,
presentation:  presentation,
bid:  bid,
auctioninfo:  auctioninfo,
priceinfo:  priceinfo,
calendarentry:  calendarentry,
timerange:  timerange,
bookingcalendar:  bookingcalendar,
accomodationresource:  accomodationresource,
destinationresource:  destinationresource,
eventresource:  eventresource,
tripofferresource:  tripofferresource,
roomcalendarentry:  roomcalendarentry,
roomcalendar:  roomcalendar,
roomlist:  roomlist,
transportresource:  transportresource,
review:  review,
hostresource:  hostresource,
tourist:  tourist,
languagelevel:  languagelevel,
guideresource:  guideresource,
guide:  guide,
agency:  agency,
medialocation:  medialocation,
touristresource:  touristresource,
travelgroupresource:  travelgroupresource,
agencyaccomodation:  agencyaccomodation,
agencyevent:  agencyevent,
agencyguide:  agencyguide,
agencyhost:  agencyhost,
agencytourist:  agencytourist,
agencytransport:  agencytransport,
agencytravelgroup:  agencytravelgroup,
agencytripoffer:  agencytripoffer,
agencyuser:  agencyuser,
mediadestinationresource:  mediadestinationresource,
agencyreview:  agencyreview,
guidereview:  guidereview,
agencybid:  agencybid,
agencymedialibrary:  agencymedialibrary,
agencydeal:  agencydeal,
agencyfavorite:  agencyfavorite,
agencyoffer:  agencyoffer,
date_:  date_,
guidebid:  guidebid,
guidedeal:  guidedeal,
guidefavorite:  guidefavorite,
guideoffer:  guideoffer,
touristbid:  touristbid,
touristdeal:  touristdeal,
touristfavorite:  touristfavorite,
touristoffer:  touristoffer,
touristreview:  touristreview,
similarbytriptypeaccomodation:  similarbytriptypeaccomodation,
similarbytriptypedestination:  similarbytriptypedestination,
similarbytriptypeevent:  similarbytriptypeevent,
similarbytriptypeguide:  similarbytriptypeguide,
similarbytriptypehost:  similarbytriptypehost,
similarbytriptypetransport:  similarbytriptypetransport,
similarbytriptypetravelgroup:  similarbytriptypetravelgroup,
assocaccomodation:  assocaccomodation,
assochost:  assochost,
assocguide:  assocguide,
assoctransport:  assoctransport,
assocevent:  assocevent,
assocdestination:  assocdestination,
assoctravelgroup:  assoctravelgroup
}

export type deleteMutationType = {
    
topics:  topicsdeleteMutationType;
posts:  postsdeleteMutationType;
user_feed_posts:  user_feed_postsdeleteMutationType;
triptype:  triptypedeleteMutationType;
usertabl:  usertabldeleteMutationType;
account:  accountdeleteMutationType;
contact:  contactdeleteMutationType;
publisher:  publisherdeleteMutationType;
commandlogentry:  commandlogentrydeleteMutationType;
publisher:  publisherdeleteMutationType;
geocoding:  geocodingdeleteMutationType;
accounting:  accountingdeleteMutationType;
presentation:  presentationdeleteMutationType;
bid:  biddeleteMutationType;
auctioninfo:  auctioninfodeleteMutationType;
priceinfo:  priceinfodeleteMutationType;
calendarentry:  calendarentrydeleteMutationType;
timerange:  timerangedeleteMutationType;
bookingcalendar:  bookingcalendardeleteMutationType;
accomodationresource:  accomodationresourcedeleteMutationType;
destinationresource:  destinationresourcedeleteMutationType;
eventresource:  eventresourcedeleteMutationType;
tripofferresource:  tripofferresourcedeleteMutationType;
roomcalendarentry:  roomcalendarentrydeleteMutationType;
roomcalendar:  roomcalendardeleteMutationType;
roomlist:  roomlistdeleteMutationType;
transportresource:  transportresourcedeleteMutationType;
review:  reviewdeleteMutationType;
hostresource:  hostresourcedeleteMutationType;
tourist:  touristdeleteMutationType;
languagelevel:  languageleveldeleteMutationType;
guideresource:  guideresourcedeleteMutationType;
guide:  guidedeleteMutationType;
agency:  agencydeleteMutationType;
medialocation:  medialocationdeleteMutationType;
touristresource:  touristresourcedeleteMutationType;
travelgroupresource:  travelgroupresourcedeleteMutationType;
agencyaccomodation:  agencyaccomodationdeleteMutationType;
agencyevent:  agencyeventdeleteMutationType;
agencyguide:  agencyguidedeleteMutationType;
agencyhost:  agencyhostdeleteMutationType;
agencytourist:  agencytouristdeleteMutationType;
agencytransport:  agencytransportdeleteMutationType;
agencytravelgroup:  agencytravelgroupdeleteMutationType;
agencytripoffer:  agencytripofferdeleteMutationType;
agencyuser:  agencyuserdeleteMutationType;
mediadestinationresource:  mediadestinationresourcedeleteMutationType;
agencyreview:  agencyreviewdeleteMutationType;
guidereview:  guidereviewdeleteMutationType;
agencybid:  agencybiddeleteMutationType;
agencymedialibrary:  agencymedialibrarydeleteMutationType;
agencydeal:  agencydealdeleteMutationType;
agencyfavorite:  agencyfavoritedeleteMutationType;
agencyoffer:  agencyofferdeleteMutationType;
date_:  date_deleteMutationType;
guidebid:  guidebiddeleteMutationType;
guidedeal:  guidedealdeleteMutationType;
guidefavorite:  guidefavoritedeleteMutationType;
guideoffer:  guideofferdeleteMutationType;
touristbid:  touristbiddeleteMutationType;
touristdeal:  touristdealdeleteMutationType;
touristfavorite:  touristfavoritedeleteMutationType;
touristoffer:  touristofferdeleteMutationType;
touristreview:  touristreviewdeleteMutationType;
similarbytriptypeaccomodation:  similarbytriptypeaccomodationdeleteMutationType;
similarbytriptypedestination:  similarbytriptypedestinationdeleteMutationType;
similarbytriptypeevent:  similarbytriptypeeventdeleteMutationType;
similarbytriptypeguide:  similarbytriptypeguidedeleteMutationType;
similarbytriptypehost:  similarbytriptypehostdeleteMutationType;
similarbytriptypetransport:  similarbytriptypetransportdeleteMutationType;
similarbytriptypetravelgroup:  similarbytriptypetravelgroupdeleteMutationType;
assocaccomodation:  assocaccomodationdeleteMutationType;
assochost:  assochostdeleteMutationType;
assocguide:  assocguidedeleteMutationType;
assoctransport:  assoctransportdeleteMutationType;
assocevent:  assoceventdeleteMutationType;
assocdestination:  assocdestinationdeleteMutationType;
assoctravelgroup:  assoctravelgroupdeleteMutationType;
}

export function getDeleteMutation(DbTablesSelection: keyof typeof DbTables) {
    // console.log('queryName:', DbTablesSelection)

     let queryNameAsString = DbTables[DbTablesSelection]
   //  console.log('queryNameAsString:', queryNameAsString)
     // const key = 'destinationresource'
     type getDeleteMutationTypes = deleteMutationType[typeof queryNameAsString]
   //  type Picked = Exclude<getDeleteMutationTypes, "object" >;
     const getTypesFromEmpty: getDeleteMutationTypes = {}


     const query = Lookup[DbTablesSelection]
     console.log('query:', query)

     return { query, getTypesFromEmpty }
 }

