
import topics from './psqlCreateMutation/topics'
import posts from './psqlCreateMutation/posts'
import user_feed_posts from './psqlCreateMutation/user_feed_posts'
import triptype from './psqlCreateMutation/triptype'
import usertabl from './psqlCreateMutation/usertabl'
import account from './psqlCreateMutation/account'
import contact from './psqlCreateMutation/contact'
import publisher from './psqlCreateMutation/publisher'
import commandlogentry from './psqlCreateMutation/commandlogentry'
import publisher from './psqlCreateMutation/publisher'
import geocoding from './psqlCreateMutation/geocoding'
import accounting from './psqlCreateMutation/accounting'
import presentation from './psqlCreateMutation/presentation'
import bid from './psqlCreateMutation/bid'
import auctioninfo from './psqlCreateMutation/auctioninfo'
import priceinfo from './psqlCreateMutation/priceinfo'
import calendarentry from './psqlCreateMutation/calendarentry'
import timerange from './psqlCreateMutation/timerange'
import bookingcalendar from './psqlCreateMutation/bookingcalendar'
import accomodationresource from './psqlCreateMutation/accomodationresource'
import destinationresource from './psqlCreateMutation/destinationresource'
import eventresource from './psqlCreateMutation/eventresource'
import tripofferresource from './psqlCreateMutation/tripofferresource'
import roomcalendarentry from './psqlCreateMutation/roomcalendarentry'
import roomcalendar from './psqlCreateMutation/roomcalendar'
import roomlist from './psqlCreateMutation/roomlist'
import transportresource from './psqlCreateMutation/transportresource'
import review from './psqlCreateMutation/review'
import hostresource from './psqlCreateMutation/hostresource'
import tourist from './psqlCreateMutation/tourist'
import languagelevel from './psqlCreateMutation/languagelevel'
import guideresource from './psqlCreateMutation/guideresource'
import guide from './psqlCreateMutation/guide'
import agency from './psqlCreateMutation/agency'
import medialocation from './psqlCreateMutation/medialocation'
import touristresource from './psqlCreateMutation/touristresource'
import travelgroupresource from './psqlCreateMutation/travelgroupresource'
import agencyaccomodation from './psqlCreateMutation/agencyaccomodation'
import agencyevent from './psqlCreateMutation/agencyevent'
import agencyguide from './psqlCreateMutation/agencyguide'
import agencyhost from './psqlCreateMutation/agencyhost'
import agencytourist from './psqlCreateMutation/agencytourist'
import agencytransport from './psqlCreateMutation/agencytransport'
import agencytravelgroup from './psqlCreateMutation/agencytravelgroup'
import agencytripoffer from './psqlCreateMutation/agencytripoffer'
import agencyuser from './psqlCreateMutation/agencyuser'
import mediadestinationresource from './psqlCreateMutation/mediadestinationresource'
import agencyreview from './psqlCreateMutation/agencyreview'
import guidereview from './psqlCreateMutation/guidereview'
import agencybid from './psqlCreateMutation/agencybid'
import agencymedialibrary from './psqlCreateMutation/agencymedialibrary'
import agencydeal from './psqlCreateMutation/agencydeal'
import agencyfavorite from './psqlCreateMutation/agencyfavorite'
import agencyoffer from './psqlCreateMutation/agencyoffer'
import date_ from './psqlCreateMutation/date_'
import guidebid from './psqlCreateMutation/guidebid'
import guidedeal from './psqlCreateMutation/guidedeal'
import guidefavorite from './psqlCreateMutation/guidefavorite'
import guideoffer from './psqlCreateMutation/guideoffer'
import touristbid from './psqlCreateMutation/touristbid'
import touristdeal from './psqlCreateMutation/touristdeal'
import touristfavorite from './psqlCreateMutation/touristfavorite'
import touristoffer from './psqlCreateMutation/touristoffer'
import touristreview from './psqlCreateMutation/touristreview'
import similarbytriptypeaccomodation from './psqlCreateMutation/similarbytriptypeaccomodation'
import similarbytriptypedestination from './psqlCreateMutation/similarbytriptypedestination'
import similarbytriptypeevent from './psqlCreateMutation/similarbytriptypeevent'
import similarbytriptypeguide from './psqlCreateMutation/similarbytriptypeguide'
import similarbytriptypehost from './psqlCreateMutation/similarbytriptypehost'
import similarbytriptypetransport from './psqlCreateMutation/similarbytriptypetransport'
import similarbytriptypetravelgroup from './psqlCreateMutation/similarbytriptypetravelgroup'
import assocaccomodation from './psqlCreateMutation/assocaccomodation'
import assochost from './psqlCreateMutation/assochost'
import assocguide from './psqlCreateMutation/assocguide'
import assoctransport from './psqlCreateMutation/assoctransport'
import assocevent from './psqlCreateMutation/assocevent'
import assocdestination from './psqlCreateMutation/assocdestination'
import assoctravelgroup from './psqlCreateMutation/assoctravelgroup'

import type { topicscreateMutationType }  from './psqlCreateMutation/types/topics'
import type { postscreateMutationType }  from './psqlCreateMutation/types/posts'
import type { user_feed_postscreateMutationType }  from './psqlCreateMutation/types/user_feed_posts'
import type { triptypecreateMutationType }  from './psqlCreateMutation/types/triptype'
import type { usertablcreateMutationType }  from './psqlCreateMutation/types/usertabl'
import type { accountcreateMutationType }  from './psqlCreateMutation/types/account'
import type { contactcreateMutationType }  from './psqlCreateMutation/types/contact'
import type { publishercreateMutationType }  from './psqlCreateMutation/types/publisher'
import type { commandlogentrycreateMutationType }  from './psqlCreateMutation/types/commandlogentry'
import type { publishercreateMutationType }  from './psqlCreateMutation/types/publisher'
import type { geocodingcreateMutationType }  from './psqlCreateMutation/types/geocoding'
import type { accountingcreateMutationType }  from './psqlCreateMutation/types/accounting'
import type { presentationcreateMutationType }  from './psqlCreateMutation/types/presentation'
import type { bidcreateMutationType }  from './psqlCreateMutation/types/bid'
import type { auctioninfocreateMutationType }  from './psqlCreateMutation/types/auctioninfo'
import type { priceinfocreateMutationType }  from './psqlCreateMutation/types/priceinfo'
import type { calendarentrycreateMutationType }  from './psqlCreateMutation/types/calendarentry'
import type { timerangecreateMutationType }  from './psqlCreateMutation/types/timerange'
import type { bookingcalendarcreateMutationType }  from './psqlCreateMutation/types/bookingcalendar'
import type { accomodationresourcecreateMutationType }  from './psqlCreateMutation/types/accomodationresource'
import type { destinationresourcecreateMutationType }  from './psqlCreateMutation/types/destinationresource'
import type { eventresourcecreateMutationType }  from './psqlCreateMutation/types/eventresource'
import type { tripofferresourcecreateMutationType }  from './psqlCreateMutation/types/tripofferresource'
import type { roomcalendarentrycreateMutationType }  from './psqlCreateMutation/types/roomcalendarentry'
import type { roomcalendarcreateMutationType }  from './psqlCreateMutation/types/roomcalendar'
import type { roomlistcreateMutationType }  from './psqlCreateMutation/types/roomlist'
import type { transportresourcecreateMutationType }  from './psqlCreateMutation/types/transportresource'
import type { reviewcreateMutationType }  from './psqlCreateMutation/types/review'
import type { hostresourcecreateMutationType }  from './psqlCreateMutation/types/hostresource'
import type { touristcreateMutationType }  from './psqlCreateMutation/types/tourist'
import type { languagelevelcreateMutationType }  from './psqlCreateMutation/types/languagelevel'
import type { guideresourcecreateMutationType }  from './psqlCreateMutation/types/guideresource'
import type { guidecreateMutationType }  from './psqlCreateMutation/types/guide'
import type { agencycreateMutationType }  from './psqlCreateMutation/types/agency'
import type { medialocationcreateMutationType }  from './psqlCreateMutation/types/medialocation'
import type { touristresourcecreateMutationType }  from './psqlCreateMutation/types/touristresource'
import type { travelgroupresourcecreateMutationType }  from './psqlCreateMutation/types/travelgroupresource'
import type { agencyaccomodationcreateMutationType }  from './psqlCreateMutation/types/agencyaccomodation'
import type { agencyeventcreateMutationType }  from './psqlCreateMutation/types/agencyevent'
import type { agencyguidecreateMutationType }  from './psqlCreateMutation/types/agencyguide'
import type { agencyhostcreateMutationType }  from './psqlCreateMutation/types/agencyhost'
import type { agencytouristcreateMutationType }  from './psqlCreateMutation/types/agencytourist'
import type { agencytransportcreateMutationType }  from './psqlCreateMutation/types/agencytransport'
import type { agencytravelgroupcreateMutationType }  from './psqlCreateMutation/types/agencytravelgroup'
import type { agencytripoffercreateMutationType }  from './psqlCreateMutation/types/agencytripoffer'
import type { agencyusercreateMutationType }  from './psqlCreateMutation/types/agencyuser'
import type { mediadestinationresourcecreateMutationType }  from './psqlCreateMutation/types/mediadestinationresource'
import type { agencyreviewcreateMutationType }  from './psqlCreateMutation/types/agencyreview'
import type { guidereviewcreateMutationType }  from './psqlCreateMutation/types/guidereview'
import type { agencybidcreateMutationType }  from './psqlCreateMutation/types/agencybid'
import type { agencymedialibrarycreateMutationType }  from './psqlCreateMutation/types/agencymedialibrary'
import type { agencydealcreateMutationType }  from './psqlCreateMutation/types/agencydeal'
import type { agencyfavoritecreateMutationType }  from './psqlCreateMutation/types/agencyfavorite'
import type { agencyoffercreateMutationType }  from './psqlCreateMutation/types/agencyoffer'
import type { date_createMutationType }  from './psqlCreateMutation/types/date_'
import type { guidebidcreateMutationType }  from './psqlCreateMutation/types/guidebid'
import type { guidedealcreateMutationType }  from './psqlCreateMutation/types/guidedeal'
import type { guidefavoritecreateMutationType }  from './psqlCreateMutation/types/guidefavorite'
import type { guideoffercreateMutationType }  from './psqlCreateMutation/types/guideoffer'
import type { touristbidcreateMutationType }  from './psqlCreateMutation/types/touristbid'
import type { touristdealcreateMutationType }  from './psqlCreateMutation/types/touristdeal'
import type { touristfavoritecreateMutationType }  from './psqlCreateMutation/types/touristfavorite'
import type { touristoffercreateMutationType }  from './psqlCreateMutation/types/touristoffer'
import type { touristreviewcreateMutationType }  from './psqlCreateMutation/types/touristreview'
import type { similarbytriptypeaccomodationcreateMutationType }  from './psqlCreateMutation/types/similarbytriptypeaccomodation'
import type { similarbytriptypedestinationcreateMutationType }  from './psqlCreateMutation/types/similarbytriptypedestination'
import type { similarbytriptypeeventcreateMutationType }  from './psqlCreateMutation/types/similarbytriptypeevent'
import type { similarbytriptypeguidecreateMutationType }  from './psqlCreateMutation/types/similarbytriptypeguide'
import type { similarbytriptypehostcreateMutationType }  from './psqlCreateMutation/types/similarbytriptypehost'
import type { similarbytriptypetransportcreateMutationType }  from './psqlCreateMutation/types/similarbytriptypetransport'
import type { similarbytriptypetravelgroupcreateMutationType }  from './psqlCreateMutation/types/similarbytriptypetravelgroup'
import type { assocaccomodationcreateMutationType }  from './psqlCreateMutation/types/assocaccomodation'
import type { assochostcreateMutationType }  from './psqlCreateMutation/types/assochost'
import type { assocguidecreateMutationType }  from './psqlCreateMutation/types/assocguide'
import type { assoctransportcreateMutationType }  from './psqlCreateMutation/types/assoctransport'
import type { assoceventcreateMutationType }  from './psqlCreateMutation/types/assocevent'
import type { assocdestinationcreateMutationType }  from './psqlCreateMutation/types/assocdestination'
import type { assoctravelgroupcreateMutationType }  from './psqlCreateMutation/types/assoctravelgroup'

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

export type createMutationType = {
    
topics:  topicscreateMutationType;
posts:  postscreateMutationType;
user_feed_posts:  user_feed_postscreateMutationType;
triptype:  triptypecreateMutationType;
usertabl:  usertablcreateMutationType;
account:  accountcreateMutationType;
contact:  contactcreateMutationType;
publisher:  publishercreateMutationType;
commandlogentry:  commandlogentrycreateMutationType;
publisher:  publishercreateMutationType;
geocoding:  geocodingcreateMutationType;
accounting:  accountingcreateMutationType;
presentation:  presentationcreateMutationType;
bid:  bidcreateMutationType;
auctioninfo:  auctioninfocreateMutationType;
priceinfo:  priceinfocreateMutationType;
calendarentry:  calendarentrycreateMutationType;
timerange:  timerangecreateMutationType;
bookingcalendar:  bookingcalendarcreateMutationType;
accomodationresource:  accomodationresourcecreateMutationType;
destinationresource:  destinationresourcecreateMutationType;
eventresource:  eventresourcecreateMutationType;
tripofferresource:  tripofferresourcecreateMutationType;
roomcalendarentry:  roomcalendarentrycreateMutationType;
roomcalendar:  roomcalendarcreateMutationType;
roomlist:  roomlistcreateMutationType;
transportresource:  transportresourcecreateMutationType;
review:  reviewcreateMutationType;
hostresource:  hostresourcecreateMutationType;
tourist:  touristcreateMutationType;
languagelevel:  languagelevelcreateMutationType;
guideresource:  guideresourcecreateMutationType;
guide:  guidecreateMutationType;
agency:  agencycreateMutationType;
medialocation:  medialocationcreateMutationType;
touristresource:  touristresourcecreateMutationType;
travelgroupresource:  travelgroupresourcecreateMutationType;
agencyaccomodation:  agencyaccomodationcreateMutationType;
agencyevent:  agencyeventcreateMutationType;
agencyguide:  agencyguidecreateMutationType;
agencyhost:  agencyhostcreateMutationType;
agencytourist:  agencytouristcreateMutationType;
agencytransport:  agencytransportcreateMutationType;
agencytravelgroup:  agencytravelgroupcreateMutationType;
agencytripoffer:  agencytripoffercreateMutationType;
agencyuser:  agencyusercreateMutationType;
mediadestinationresource:  mediadestinationresourcecreateMutationType;
agencyreview:  agencyreviewcreateMutationType;
guidereview:  guidereviewcreateMutationType;
agencybid:  agencybidcreateMutationType;
agencymedialibrary:  agencymedialibrarycreateMutationType;
agencydeal:  agencydealcreateMutationType;
agencyfavorite:  agencyfavoritecreateMutationType;
agencyoffer:  agencyoffercreateMutationType;
date_:  date_createMutationType;
guidebid:  guidebidcreateMutationType;
guidedeal:  guidedealcreateMutationType;
guidefavorite:  guidefavoritecreateMutationType;
guideoffer:  guideoffercreateMutationType;
touristbid:  touristbidcreateMutationType;
touristdeal:  touristdealcreateMutationType;
touristfavorite:  touristfavoritecreateMutationType;
touristoffer:  touristoffercreateMutationType;
touristreview:  touristreviewcreateMutationType;
similarbytriptypeaccomodation:  similarbytriptypeaccomodationcreateMutationType;
similarbytriptypedestination:  similarbytriptypedestinationcreateMutationType;
similarbytriptypeevent:  similarbytriptypeeventcreateMutationType;
similarbytriptypeguide:  similarbytriptypeguidecreateMutationType;
similarbytriptypehost:  similarbytriptypehostcreateMutationType;
similarbytriptypetransport:  similarbytriptypetransportcreateMutationType;
similarbytriptypetravelgroup:  similarbytriptypetravelgroupcreateMutationType;
assocaccomodation:  assocaccomodationcreateMutationType;
assochost:  assochostcreateMutationType;
assocguide:  assocguidecreateMutationType;
assoctransport:  assoctransportcreateMutationType;
assocevent:  assoceventcreateMutationType;
assocdestination:  assocdestinationcreateMutationType;
assoctravelgroup:  assoctravelgroupcreateMutationType;
}

export function getCreateMutation(DbTablesSelection: keyof typeof DbTables) {
    // console.log('queryName:', DbTablesSelection)

     let queryNameAsString = DbTables[DbTablesSelection]
   //  console.log('queryNameAsString:', queryNameAsString)
     // const key = 'destinationresource'
     type getCreateMutationTypes = createMutationType[typeof queryNameAsString]
   //  type Picked = Exclude<getCreateMutationTypes, "object" >;
     const getTypesFromEmpty: getCreateMutationTypes = {}


     const query = Lookup[DbTablesSelection]
     console.log('query:', query)

     return { query, getTypesFromEmpty }
 }

