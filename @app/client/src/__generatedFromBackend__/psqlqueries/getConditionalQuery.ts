
import topics from './psqlIdQueries/topics'
import posts from './psqlIdQueries/posts'
import user_feed_posts from './psqlIdQueries/user_feed_posts'
import triptype from './psqlIdQueries/triptype'
import usertable from './psqlIdQueries/usertable'
import account from './psqlIdQueries/account'
import contact from './psqlIdQueries/contact'
import commandlogentry from './psqlIdQueries/commandlogentry'
import publisher from './psqlIdQueries/publisher'
import geocoding from './psqlIdQueries/geocoding'
import accounting from './psqlIdQueries/accounting'
import presentation from './psqlIdQueries/presentation'
import bid from './psqlIdQueries/bid'
import auctioninfo from './psqlIdQueries/auctioninfo'
import priceinfo from './psqlIdQueries/priceinfo'
import calendarentry from './psqlIdQueries/calendarentry'
import timerange from './psqlIdQueries/timerange'
import bookingcalendar from './psqlIdQueries/bookingcalendar'
import accomodationresource from './psqlIdQueries/accomodationresource'
import destinationresource from './psqlIdQueries/destinationresource'
import eventresource from './psqlIdQueries/eventresource'
import tripofferresource from './psqlIdQueries/tripofferresource'
import roomcalendarentry from './psqlIdQueries/roomcalendarentry'
import roomcalendar from './psqlIdQueries/roomcalendar'
import roomlist from './psqlIdQueries/roomlist'
import transportresource from './psqlIdQueries/transportresource'
import review from './psqlIdQueries/review'
import hostresource from './psqlIdQueries/hostresource'
import tourist from './psqlIdQueries/tourist'
import languagelevel from './psqlIdQueries/languagelevel'
import guideresource from './psqlIdQueries/guideresource'
import guide from './psqlIdQueries/guide'
import agency from './psqlIdQueries/agency'
import medialocation from './psqlIdQueries/medialocation'
import touristresource from './psqlIdQueries/touristresource'
import travelgroupresource from './psqlIdQueries/travelgroupresource'
import agencyaccomodation from './psqlIdQueries/agencyaccomodation'
import agencyevent from './psqlIdQueries/agencyevent'
import agencyguide from './psqlIdQueries/agencyguide'
import agencyhost from './psqlIdQueries/agencyhost'
import agencytourist from './psqlIdQueries/agencytourist'
import agencytransport from './psqlIdQueries/agencytransport'
import agencytravelgroup from './psqlIdQueries/agencytravelgroup'
import agencytripoffer from './psqlIdQueries/agencytripoffer'
import agencyuser from './psqlIdQueries/agencyuser'
import mediadestinationresource from './psqlIdQueries/mediadestinationresource'
import agencyreview from './psqlIdQueries/agencyreview'
import guidereview from './psqlIdQueries/guidereview'
import agencybid from './psqlIdQueries/agencybid'
import agencymedialibrary from './psqlIdQueries/agencymedialibrary'
import agencydeal from './psqlIdQueries/agencydeal'
import agencyfavorite from './psqlIdQueries/agencyfavorite'
import agencyoffer from './psqlIdQueries/agencyoffer'
import date_ from './psqlIdQueries/date_'
import guidebid from './psqlIdQueries/guidebid'
import guidedeal from './psqlIdQueries/guidedeal'
import guidefavorite from './psqlIdQueries/guidefavorite'
import guideoffer from './psqlIdQueries/guideoffer'
import touristbid from './psqlIdQueries/touristbid'
import touristdeal from './psqlIdQueries/touristdeal'
import touristfavorite from './psqlIdQueries/touristfavorite'
import touristoffer from './psqlIdQueries/touristoffer'
import touristreview from './psqlIdQueries/touristreview'
import similarbytriptypeaccomodation from './psqlIdQueries/similarbytriptypeaccomodation'
import similarbytriptypedestination from './psqlIdQueries/similarbytriptypedestination'
import similarbytriptypeevent from './psqlIdQueries/similarbytriptypeevent'
import similarbytriptypeguide from './psqlIdQueries/similarbytriptypeguide'
import similarbytriptypehost from './psqlIdQueries/similarbytriptypehost'
import similarbytriptypetransport from './psqlIdQueries/similarbytriptypetransport'
import similarbytriptypetravelgroup from './psqlIdQueries/similarbytriptypetravelgroup'
import assocaccomodation from './psqlIdQueries/assocaccomodation'
import assochost from './psqlIdQueries/assochost'
import assocguide from './psqlIdQueries/assocguide'
import assoctransport from './psqlIdQueries/assoctransport'
import assocevent from './psqlIdQueries/assocevent'
import assocdestination from './psqlIdQueries/assocdestination'
import assoctravelgroup from './psqlIdQueries/assoctravelgroup'


import type { topicsConditionalQueryType }  from './psqlConditionalQueries/types/topics'
import type { postsConditionalQueryType }  from './psqlConditionalQueries/types/posts'
import type { user_feed_postsConditionalQueryType }  from './psqlConditionalQueries/types/user_feed_posts'
import type { triptypeConditionalQueryType }  from './psqlConditionalQueries/types/triptype'
import type { usertableConditionalQueryType }  from './psqlConditionalQueries/types/usertable'
import type { accountConditionalQueryType }  from './psqlConditionalQueries/types/account'
import type { contactConditionalQueryType }  from './psqlConditionalQueries/types/contact'
import type { commandlogentryConditionalQueryType }  from './psqlConditionalQueries/types/commandlogentry'
import type { publisherConditionalQueryType }  from './psqlConditionalQueries/types/publisher'
import type { geocodingConditionalQueryType }  from './psqlConditionalQueries/types/geocoding'
import type { accountingConditionalQueryType }  from './psqlConditionalQueries/types/accounting'
import type { presentationConditionalQueryType }  from './psqlConditionalQueries/types/presentation'
import type { bidConditionalQueryType }  from './psqlConditionalQueries/types/bid'
import type { auctioninfoConditionalQueryType }  from './psqlConditionalQueries/types/auctioninfo'
import type { priceinfoConditionalQueryType }  from './psqlConditionalQueries/types/priceinfo'
import type { calendarentryConditionalQueryType }  from './psqlConditionalQueries/types/calendarentry'
import type { timerangeConditionalQueryType }  from './psqlConditionalQueries/types/timerange'
import type { bookingcalendarConditionalQueryType }  from './psqlConditionalQueries/types/bookingcalendar'
import type { accomodationresourceConditionalQueryType }  from './psqlConditionalQueries/types/accomodationresource'
import type { destinationresourceConditionalQueryType }  from './psqlConditionalQueries/types/destinationresource'
import type { eventresourceConditionalQueryType }  from './psqlConditionalQueries/types/eventresource'
import type { tripofferresourceConditionalQueryType }  from './psqlConditionalQueries/types/tripofferresource'
import type { roomcalendarentryConditionalQueryType }  from './psqlConditionalQueries/types/roomcalendarentry'
import type { roomcalendarConditionalQueryType }  from './psqlConditionalQueries/types/roomcalendar'
import type { roomlistConditionalQueryType }  from './psqlConditionalQueries/types/roomlist'
import type { transportresourceConditionalQueryType }  from './psqlConditionalQueries/types/transportresource'
import type { reviewConditionalQueryType }  from './psqlConditionalQueries/types/review'
import type { hostresourceConditionalQueryType }  from './psqlConditionalQueries/types/hostresource'
import type { touristConditionalQueryType }  from './psqlConditionalQueries/types/tourist'
import type { languagelevelConditionalQueryType }  from './psqlConditionalQueries/types/languagelevel'
import type { guideresourceConditionalQueryType }  from './psqlConditionalQueries/types/guideresource'
import type { guideConditionalQueryType }  from './psqlConditionalQueries/types/guide'
import type { agencyConditionalQueryType }  from './psqlConditionalQueries/types/agency'
import type { medialocationConditionalQueryType }  from './psqlConditionalQueries/types/medialocation'
import type { touristresourceConditionalQueryType }  from './psqlConditionalQueries/types/touristresource'
import type { travelgroupresourceConditionalQueryType }  from './psqlConditionalQueries/types/travelgroupresource'
import type { agencyaccomodationConditionalQueryType }  from './psqlConditionalQueries/types/agencyaccomodation'
import type { agencyeventConditionalQueryType }  from './psqlConditionalQueries/types/agencyevent'
import type { agencyguideConditionalQueryType }  from './psqlConditionalQueries/types/agencyguide'
import type { agencyhostConditionalQueryType }  from './psqlConditionalQueries/types/agencyhost'
import type { agencytouristConditionalQueryType }  from './psqlConditionalQueries/types/agencytourist'
import type { agencytransportConditionalQueryType }  from './psqlConditionalQueries/types/agencytransport'
import type { agencytravelgroupConditionalQueryType }  from './psqlConditionalQueries/types/agencytravelgroup'
import type { agencytripofferConditionalQueryType }  from './psqlConditionalQueries/types/agencytripoffer'
import type { agencyuserConditionalQueryType }  from './psqlConditionalQueries/types/agencyuser'
import type { mediadestinationresourceConditionalQueryType }  from './psqlConditionalQueries/types/mediadestinationresource'
import type { agencyreviewConditionalQueryType }  from './psqlConditionalQueries/types/agencyreview'
import type { guidereviewConditionalQueryType }  from './psqlConditionalQueries/types/guidereview'
import type { agencybidConditionalQueryType }  from './psqlConditionalQueries/types/agencybid'
import type { agencymedialibraryConditionalQueryType }  from './psqlConditionalQueries/types/agencymedialibrary'
import type { agencydealConditionalQueryType }  from './psqlConditionalQueries/types/agencydeal'
import type { agencyfavoriteConditionalQueryType }  from './psqlConditionalQueries/types/agencyfavorite'
import type { agencyofferConditionalQueryType }  from './psqlConditionalQueries/types/agencyoffer'
import type { date_ConditionalQueryType }  from './psqlConditionalQueries/types/date_'
import type { guidebidConditionalQueryType }  from './psqlConditionalQueries/types/guidebid'
import type { guidedealConditionalQueryType }  from './psqlConditionalQueries/types/guidedeal'
import type { guidefavoriteConditionalQueryType }  from './psqlConditionalQueries/types/guidefavorite'
import type { guideofferConditionalQueryType }  from './psqlConditionalQueries/types/guideoffer'
import type { touristbidConditionalQueryType }  from './psqlConditionalQueries/types/touristbid'
import type { touristdealConditionalQueryType }  from './psqlConditionalQueries/types/touristdeal'
import type { touristfavoriteConditionalQueryType }  from './psqlConditionalQueries/types/touristfavorite'
import type { touristofferConditionalQueryType }  from './psqlConditionalQueries/types/touristoffer'
import type { touristreviewConditionalQueryType }  from './psqlConditionalQueries/types/touristreview'
import type { similarbytriptypeaccomodationConditionalQueryType }  from './psqlConditionalQueries/types/similarbytriptypeaccomodation'
import type { similarbytriptypedestinationConditionalQueryType }  from './psqlConditionalQueries/types/similarbytriptypedestination'
import type { similarbytriptypeeventConditionalQueryType }  from './psqlConditionalQueries/types/similarbytriptypeevent'
import type { similarbytriptypeguideConditionalQueryType }  from './psqlConditionalQueries/types/similarbytriptypeguide'
import type { similarbytriptypehostConditionalQueryType }  from './psqlConditionalQueries/types/similarbytriptypehost'
import type { similarbytriptypetransportConditionalQueryType }  from './psqlConditionalQueries/types/similarbytriptypetransport'
import type { similarbytriptypetravelgroupConditionalQueryType }  from './psqlConditionalQueries/types/similarbytriptypetravelgroup'
import type { assocaccomodationConditionalQueryType }  from './psqlConditionalQueries/types/assocaccomodation'
import type { assochostConditionalQueryType }  from './psqlConditionalQueries/types/assochost'
import type { assocguideConditionalQueryType }  from './psqlConditionalQueries/types/assocguide'
import type { assoctransportConditionalQueryType }  from './psqlConditionalQueries/types/assoctransport'
import type { assoceventConditionalQueryType }  from './psqlConditionalQueries/types/assocevent'
import type { assocdestinationConditionalQueryType }  from './psqlConditionalQueries/types/assocdestination'
import type { assoctravelgroupConditionalQueryType }  from './psqlConditionalQueries/types/assoctravelgroup'

const Lookup = {
    
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

export type conditionalQueryType = {
    
topics:  topicsConditionalQueryType;
posts:  postsConditionalQueryType;
user_feed_posts:  user_feed_postsConditionalQueryType;
triptype:  triptypeConditionalQueryType;
usertable:  usertableConditionalQueryType;
account:  accountConditionalQueryType;
contact:  contactConditionalQueryType;
commandlogentry:  commandlogentryConditionalQueryType;
publisher:  publisherConditionalQueryType;
geocoding:  geocodingConditionalQueryType;
accounting:  accountingConditionalQueryType;
presentation:  presentationConditionalQueryType;
bid:  bidConditionalQueryType;
auctioninfo:  auctioninfoConditionalQueryType;
priceinfo:  priceinfoConditionalQueryType;
calendarentry:  calendarentryConditionalQueryType;
timerange:  timerangeConditionalQueryType;
bookingcalendar:  bookingcalendarConditionalQueryType;
accomodationresource:  accomodationresourceConditionalQueryType;
destinationresource:  destinationresourceConditionalQueryType;
eventresource:  eventresourceConditionalQueryType;
tripofferresource:  tripofferresourceConditionalQueryType;
roomcalendarentry:  roomcalendarentryConditionalQueryType;
roomcalendar:  roomcalendarConditionalQueryType;
roomlist:  roomlistConditionalQueryType;
transportresource:  transportresourceConditionalQueryType;
review:  reviewConditionalQueryType;
hostresource:  hostresourceConditionalQueryType;
tourist:  touristConditionalQueryType;
languagelevel:  languagelevelConditionalQueryType;
guideresource:  guideresourceConditionalQueryType;
guide:  guideConditionalQueryType;
agency:  agencyConditionalQueryType;
medialocation:  medialocationConditionalQueryType;
touristresource:  touristresourceConditionalQueryType;
travelgroupresource:  travelgroupresourceConditionalQueryType;
agencyaccomodation:  agencyaccomodationConditionalQueryType;
agencyevent:  agencyeventConditionalQueryType;
agencyguide:  agencyguideConditionalQueryType;
agencyhost:  agencyhostConditionalQueryType;
agencytourist:  agencytouristConditionalQueryType;
agencytransport:  agencytransportConditionalQueryType;
agencytravelgroup:  agencytravelgroupConditionalQueryType;
agencytripoffer:  agencytripofferConditionalQueryType;
agencyuser:  agencyuserConditionalQueryType;
mediadestinationresource:  mediadestinationresourceConditionalQueryType;
agencyreview:  agencyreviewConditionalQueryType;
guidereview:  guidereviewConditionalQueryType;
agencybid:  agencybidConditionalQueryType;
agencymedialibrary:  agencymedialibraryConditionalQueryType;
agencydeal:  agencydealConditionalQueryType;
agencyfavorite:  agencyfavoriteConditionalQueryType;
agencyoffer:  agencyofferConditionalQueryType;
date_:  date_ConditionalQueryType;
guidebid:  guidebidConditionalQueryType;
guidedeal:  guidedealConditionalQueryType;
guidefavorite:  guidefavoriteConditionalQueryType;
guideoffer:  guideofferConditionalQueryType;
touristbid:  touristbidConditionalQueryType;
touristdeal:  touristdealConditionalQueryType;
touristfavorite:  touristfavoriteConditionalQueryType;
touristoffer:  touristofferConditionalQueryType;
touristreview:  touristreviewConditionalQueryType;
similarbytriptypeaccomodation:  similarbytriptypeaccomodationConditionalQueryType;
similarbytriptypedestination:  similarbytriptypedestinationConditionalQueryType;
similarbytriptypeevent:  similarbytriptypeeventConditionalQueryType;
similarbytriptypeguide:  similarbytriptypeguideConditionalQueryType;
similarbytriptypehost:  similarbytriptypehostConditionalQueryType;
similarbytriptypetransport:  similarbytriptypetransportConditionalQueryType;
similarbytriptypetravelgroup:  similarbytriptypetravelgroupConditionalQueryType;
assocaccomodation:  assocaccomodationConditionalQueryType;
assochost:  assochostConditionalQueryType;
assocguide:  assocguideConditionalQueryType;
assoctransport:  assoctransportConditionalQueryType;
assocevent:  assoceventConditionalQueryType;
assocdestination:  assocdestinationConditionalQueryType;
assoctravelgroup:  assoctravelgroupConditionalQueryType;
}

export function getConditionalQuery (queryName: string) {

    const query = Lookup[queryName]
    // console.log("querystring:" ,query)

    return { query }
}
