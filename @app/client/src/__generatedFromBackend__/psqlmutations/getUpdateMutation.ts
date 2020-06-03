
import topics from './psqlUpdateMutation/topics'
import posts from './psqlUpdateMutation/posts'
import user_feed_posts from './psqlUpdateMutation/user_feed_posts'
import triptype from './psqlUpdateMutation/triptype'
import usertable from './psqlUpdateMutation/usertable'
import account from './psqlUpdateMutation/account'
import contact from './psqlUpdateMutation/contact'
import commandlogentry from './psqlUpdateMutation/commandlogentry'
import publisher from './psqlUpdateMutation/publisher'
import geocoding from './psqlUpdateMutation/geocoding'
import accounting from './psqlUpdateMutation/accounting'
import presentation from './psqlUpdateMutation/presentation'
import bid from './psqlUpdateMutation/bid'
import auctioninfo from './psqlUpdateMutation/auctioninfo'
import priceinfo from './psqlUpdateMutation/priceinfo'
import calendarentry from './psqlUpdateMutation/calendarentry'
import timerange from './psqlUpdateMutation/timerange'
import bookingcalendar from './psqlUpdateMutation/bookingcalendar'
import accomodationresource from './psqlUpdateMutation/accomodationresource'
import destinationresource from './psqlUpdateMutation/destinationresource'
import eventresource from './psqlUpdateMutation/eventresource'
import tripofferresource from './psqlUpdateMutation/tripofferresource'
import roomcalendarentry from './psqlUpdateMutation/roomcalendarentry'
import roomcalendar from './psqlUpdateMutation/roomcalendar'
import roomlist from './psqlUpdateMutation/roomlist'
import transportresource from './psqlUpdateMutation/transportresource'
import review from './psqlUpdateMutation/review'
import hostresource from './psqlUpdateMutation/hostresource'
import tourist from './psqlUpdateMutation/tourist'
import languagelevel from './psqlUpdateMutation/languagelevel'
import guideresource from './psqlUpdateMutation/guideresource'
import guide from './psqlUpdateMutation/guide'
import agency from './psqlUpdateMutation/agency'
import medialocation from './psqlUpdateMutation/medialocation'
import touristresource from './psqlUpdateMutation/touristresource'
import travelgroupresource from './psqlUpdateMutation/travelgroupresource'
import agencyaccomodation from './psqlUpdateMutation/agencyaccomodation'
import agencyevent from './psqlUpdateMutation/agencyevent'
import agencyguide from './psqlUpdateMutation/agencyguide'
import agencyhost from './psqlUpdateMutation/agencyhost'
import agencytourist from './psqlUpdateMutation/agencytourist'
import agencytransport from './psqlUpdateMutation/agencytransport'
import agencytravelgroup from './psqlUpdateMutation/agencytravelgroup'
import agencytripoffer from './psqlUpdateMutation/agencytripoffer'
import agencyuser from './psqlUpdateMutation/agencyuser'
import mediadestinationresource from './psqlUpdateMutation/mediadestinationresource'
import agencyreview from './psqlUpdateMutation/agencyreview'
import guidereview from './psqlUpdateMutation/guidereview'
import agencybid from './psqlUpdateMutation/agencybid'
import agencymedialibrary from './psqlUpdateMutation/agencymedialibrary'
import agencydeal from './psqlUpdateMutation/agencydeal'
import agencyfavorite from './psqlUpdateMutation/agencyfavorite'
import agencyoffer from './psqlUpdateMutation/agencyoffer'
import date_ from './psqlUpdateMutation/date_'
import guidebid from './psqlUpdateMutation/guidebid'
import guidedeal from './psqlUpdateMutation/guidedeal'
import guidefavorite from './psqlUpdateMutation/guidefavorite'
import guideoffer from './psqlUpdateMutation/guideoffer'
import touristbid from './psqlUpdateMutation/touristbid'
import touristdeal from './psqlUpdateMutation/touristdeal'
import touristfavorite from './psqlUpdateMutation/touristfavorite'
import touristoffer from './psqlUpdateMutation/touristoffer'
import touristreview from './psqlUpdateMutation/touristreview'
import similarbytriptypeaccomodation from './psqlUpdateMutation/similarbytriptypeaccomodation'
import similarbytriptypedestination from './psqlUpdateMutation/similarbytriptypedestination'
import similarbytriptypeevent from './psqlUpdateMutation/similarbytriptypeevent'
import similarbytriptypeguide from './psqlUpdateMutation/similarbytriptypeguide'
import similarbytriptypehost from './psqlUpdateMutation/similarbytriptypehost'
import similarbytriptypetransport from './psqlUpdateMutation/similarbytriptypetransport'
import similarbytriptypetravelgroup from './psqlUpdateMutation/similarbytriptypetravelgroup'
import assocaccomodation from './psqlUpdateMutation/assocaccomodation'
import assochost from './psqlUpdateMutation/assochost'
import assocguide from './psqlUpdateMutation/assocguide'
import assoctransport from './psqlUpdateMutation/assoctransport'
import assocevent from './psqlUpdateMutation/assocevent'
import assocdestination from './psqlUpdateMutation/assocdestination'
import assoctravelgroup from './psqlUpdateMutation/assoctravelgroup'

import type { topicsupdateMutationType }  from './psqlUpdateMutation/types/topics'
import type { postsupdateMutationType }  from './psqlUpdateMutation/types/posts'
import type { user_feed_postsupdateMutationType }  from './psqlUpdateMutation/types/user_feed_posts'
import type { triptypeupdateMutationType }  from './psqlUpdateMutation/types/triptype'
import type { usertableupdateMutationType }  from './psqlUpdateMutation/types/usertable'
import type { accountupdateMutationType }  from './psqlUpdateMutation/types/account'
import type { contactupdateMutationType }  from './psqlUpdateMutation/types/contact'
import type { commandlogentryupdateMutationType }  from './psqlUpdateMutation/types/commandlogentry'
import type { publisherupdateMutationType }  from './psqlUpdateMutation/types/publisher'
import type { geocodingupdateMutationType }  from './psqlUpdateMutation/types/geocoding'
import type { accountingupdateMutationType }  from './psqlUpdateMutation/types/accounting'
import type { presentationupdateMutationType }  from './psqlUpdateMutation/types/presentation'
import type { bidupdateMutationType }  from './psqlUpdateMutation/types/bid'
import type { auctioninfoupdateMutationType }  from './psqlUpdateMutation/types/auctioninfo'
import type { priceinfoupdateMutationType }  from './psqlUpdateMutation/types/priceinfo'
import type { calendarentryupdateMutationType }  from './psqlUpdateMutation/types/calendarentry'
import type { timerangeupdateMutationType }  from './psqlUpdateMutation/types/timerange'
import type { bookingcalendarupdateMutationType }  from './psqlUpdateMutation/types/bookingcalendar'
import type { accomodationresourceupdateMutationType }  from './psqlUpdateMutation/types/accomodationresource'
import type { destinationresourceupdateMutationType }  from './psqlUpdateMutation/types/destinationresource'
import type { eventresourceupdateMutationType }  from './psqlUpdateMutation/types/eventresource'
import type { tripofferresourceupdateMutationType }  from './psqlUpdateMutation/types/tripofferresource'
import type { roomcalendarentryupdateMutationType }  from './psqlUpdateMutation/types/roomcalendarentry'
import type { roomcalendarupdateMutationType }  from './psqlUpdateMutation/types/roomcalendar'
import type { roomlistupdateMutationType }  from './psqlUpdateMutation/types/roomlist'
import type { transportresourceupdateMutationType }  from './psqlUpdateMutation/types/transportresource'
import type { reviewupdateMutationType }  from './psqlUpdateMutation/types/review'
import type { hostresourceupdateMutationType }  from './psqlUpdateMutation/types/hostresource'
import type { touristupdateMutationType }  from './psqlUpdateMutation/types/tourist'
import type { languagelevelupdateMutationType }  from './psqlUpdateMutation/types/languagelevel'
import type { guideresourceupdateMutationType }  from './psqlUpdateMutation/types/guideresource'
import type { guideupdateMutationType }  from './psqlUpdateMutation/types/guide'
import type { agencyupdateMutationType }  from './psqlUpdateMutation/types/agency'
import type { medialocationupdateMutationType }  from './psqlUpdateMutation/types/medialocation'
import type { touristresourceupdateMutationType }  from './psqlUpdateMutation/types/touristresource'
import type { travelgroupresourceupdateMutationType }  from './psqlUpdateMutation/types/travelgroupresource'
import type { agencyaccomodationupdateMutationType }  from './psqlUpdateMutation/types/agencyaccomodation'
import type { agencyeventupdateMutationType }  from './psqlUpdateMutation/types/agencyevent'
import type { agencyguideupdateMutationType }  from './psqlUpdateMutation/types/agencyguide'
import type { agencyhostupdateMutationType }  from './psqlUpdateMutation/types/agencyhost'
import type { agencytouristupdateMutationType }  from './psqlUpdateMutation/types/agencytourist'
import type { agencytransportupdateMutationType }  from './psqlUpdateMutation/types/agencytransport'
import type { agencytravelgroupupdateMutationType }  from './psqlUpdateMutation/types/agencytravelgroup'
import type { agencytripofferupdateMutationType }  from './psqlUpdateMutation/types/agencytripoffer'
import type { agencyuserupdateMutationType }  from './psqlUpdateMutation/types/agencyuser'
import type { mediadestinationresourceupdateMutationType }  from './psqlUpdateMutation/types/mediadestinationresource'
import type { agencyreviewupdateMutationType }  from './psqlUpdateMutation/types/agencyreview'
import type { guidereviewupdateMutationType }  from './psqlUpdateMutation/types/guidereview'
import type { agencybidupdateMutationType }  from './psqlUpdateMutation/types/agencybid'
import type { agencymedialibraryupdateMutationType }  from './psqlUpdateMutation/types/agencymedialibrary'
import type { agencydealupdateMutationType }  from './psqlUpdateMutation/types/agencydeal'
import type { agencyfavoriteupdateMutationType }  from './psqlUpdateMutation/types/agencyfavorite'
import type { agencyofferupdateMutationType }  from './psqlUpdateMutation/types/agencyoffer'
import type { date_updateMutationType }  from './psqlUpdateMutation/types/date_'
import type { guidebidupdateMutationType }  from './psqlUpdateMutation/types/guidebid'
import type { guidedealupdateMutationType }  from './psqlUpdateMutation/types/guidedeal'
import type { guidefavoriteupdateMutationType }  from './psqlUpdateMutation/types/guidefavorite'
import type { guideofferupdateMutationType }  from './psqlUpdateMutation/types/guideoffer'
import type { touristbidupdateMutationType }  from './psqlUpdateMutation/types/touristbid'
import type { touristdealupdateMutationType }  from './psqlUpdateMutation/types/touristdeal'
import type { touristfavoriteupdateMutationType }  from './psqlUpdateMutation/types/touristfavorite'
import type { touristofferupdateMutationType }  from './psqlUpdateMutation/types/touristoffer'
import type { touristreviewupdateMutationType }  from './psqlUpdateMutation/types/touristreview'
import type { similarbytriptypeaccomodationupdateMutationType }  from './psqlUpdateMutation/types/similarbytriptypeaccomodation'
import type { similarbytriptypedestinationupdateMutationType }  from './psqlUpdateMutation/types/similarbytriptypedestination'
import type { similarbytriptypeeventupdateMutationType }  from './psqlUpdateMutation/types/similarbytriptypeevent'
import type { similarbytriptypeguideupdateMutationType }  from './psqlUpdateMutation/types/similarbytriptypeguide'
import type { similarbytriptypehostupdateMutationType }  from './psqlUpdateMutation/types/similarbytriptypehost'
import type { similarbytriptypetransportupdateMutationType }  from './psqlUpdateMutation/types/similarbytriptypetransport'
import type { similarbytriptypetravelgroupupdateMutationType }  from './psqlUpdateMutation/types/similarbytriptypetravelgroup'
import type { assocaccomodationupdateMutationType }  from './psqlUpdateMutation/types/assocaccomodation'
import type { assochostupdateMutationType }  from './psqlUpdateMutation/types/assochost'
import type { assocguideupdateMutationType }  from './psqlUpdateMutation/types/assocguide'
import type { assoctransportupdateMutationType }  from './psqlUpdateMutation/types/assoctransport'
import type { assoceventupdateMutationType }  from './psqlUpdateMutation/types/assocevent'
import type { assocdestinationupdateMutationType }  from './psqlUpdateMutation/types/assocdestination'
import type { assoctravelgroupupdateMutationType }  from './psqlUpdateMutation/types/assoctravelgroup'

import { DbTables } from '../../functions/__generatedFromBackend__/tableEnums'

export const Lookup = {
    
topics:  topics,
posts:  posts,
user_feed_posts:  user_feed_posts,
triptype:  triptype,
usertable:  usertable,
account:  account,
contact:  contact,
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

export type updateMutationType = {
    
topics:  topicsupdateMutationType;
posts:  postsupdateMutationType;
user_feed_posts:  user_feed_postsupdateMutationType;
triptype:  triptypeupdateMutationType;
usertable:  usertableupdateMutationType;
account:  accountupdateMutationType;
contact:  contactupdateMutationType;
commandlogentry:  commandlogentryupdateMutationType;
publisher:  publisherupdateMutationType;
geocoding:  geocodingupdateMutationType;
accounting:  accountingupdateMutationType;
presentation:  presentationupdateMutationType;
bid:  bidupdateMutationType;
auctioninfo:  auctioninfoupdateMutationType;
priceinfo:  priceinfoupdateMutationType;
calendarentry:  calendarentryupdateMutationType;
timerange:  timerangeupdateMutationType;
bookingcalendar:  bookingcalendarupdateMutationType;
accomodationresource:  accomodationresourceupdateMutationType;
destinationresource:  destinationresourceupdateMutationType;
eventresource:  eventresourceupdateMutationType;
tripofferresource:  tripofferresourceupdateMutationType;
roomcalendarentry:  roomcalendarentryupdateMutationType;
roomcalendar:  roomcalendarupdateMutationType;
roomlist:  roomlistupdateMutationType;
transportresource:  transportresourceupdateMutationType;
review:  reviewupdateMutationType;
hostresource:  hostresourceupdateMutationType;
tourist:  touristupdateMutationType;
languagelevel:  languagelevelupdateMutationType;
guideresource:  guideresourceupdateMutationType;
guide:  guideupdateMutationType;
agency:  agencyupdateMutationType;
medialocation:  medialocationupdateMutationType;
touristresource:  touristresourceupdateMutationType;
travelgroupresource:  travelgroupresourceupdateMutationType;
agencyaccomodation:  agencyaccomodationupdateMutationType;
agencyevent:  agencyeventupdateMutationType;
agencyguide:  agencyguideupdateMutationType;
agencyhost:  agencyhostupdateMutationType;
agencytourist:  agencytouristupdateMutationType;
agencytransport:  agencytransportupdateMutationType;
agencytravelgroup:  agencytravelgroupupdateMutationType;
agencytripoffer:  agencytripofferupdateMutationType;
agencyuser:  agencyuserupdateMutationType;
mediadestinationresource:  mediadestinationresourceupdateMutationType;
agencyreview:  agencyreviewupdateMutationType;
guidereview:  guidereviewupdateMutationType;
agencybid:  agencybidupdateMutationType;
agencymedialibrary:  agencymedialibraryupdateMutationType;
agencydeal:  agencydealupdateMutationType;
agencyfavorite:  agencyfavoriteupdateMutationType;
agencyoffer:  agencyofferupdateMutationType;
date_:  date_updateMutationType;
guidebid:  guidebidupdateMutationType;
guidedeal:  guidedealupdateMutationType;
guidefavorite:  guidefavoriteupdateMutationType;
guideoffer:  guideofferupdateMutationType;
touristbid:  touristbidupdateMutationType;
touristdeal:  touristdealupdateMutationType;
touristfavorite:  touristfavoriteupdateMutationType;
touristoffer:  touristofferupdateMutationType;
touristreview:  touristreviewupdateMutationType;
similarbytriptypeaccomodation:  similarbytriptypeaccomodationupdateMutationType;
similarbytriptypedestination:  similarbytriptypedestinationupdateMutationType;
similarbytriptypeevent:  similarbytriptypeeventupdateMutationType;
similarbytriptypeguide:  similarbytriptypeguideupdateMutationType;
similarbytriptypehost:  similarbytriptypehostupdateMutationType;
similarbytriptypetransport:  similarbytriptypetransportupdateMutationType;
similarbytriptypetravelgroup:  similarbytriptypetravelgroupupdateMutationType;
assocaccomodation:  assocaccomodationupdateMutationType;
assochost:  assochostupdateMutationType;
assocguide:  assocguideupdateMutationType;
assoctransport:  assoctransportupdateMutationType;
assocevent:  assoceventupdateMutationType;
assocdestination:  assocdestinationupdateMutationType;
assoctravelgroup:  assoctravelgroupupdateMutationType;
}

export function getUpdateMutation(DbTablesSelection: keyof typeof DbTables) {
    // // console.log('queryName:', DbTablesSelection)

     let queryNameAsString = DbTables[DbTablesSelection]
   //  // console.log('queryNameAsString:', queryNameAsString)
     // const key = 'destinationresource'
     type getUpdateMutationTypes = updateMutationType[typeof queryNameAsString]
   //  type Picked = Exclude<getUpdateMutationTypes, "object" >;
     const getTypesFromEmpty: getUpdateMutationTypes = {}


     const query = Lookup[DbTablesSelection]
     // console.log('query:', query)

     return { query, getTypesFromEmpty }
 }

