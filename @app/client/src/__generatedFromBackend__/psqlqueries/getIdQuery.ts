
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


import type { topicsIdQueryType }  from './psqlIdQueries/types/topics'
import type { postsIdQueryType }  from './psqlIdQueries/types/posts'
import type { user_feed_postsIdQueryType }  from './psqlIdQueries/types/user_feed_posts'
import type { triptypeIdQueryType }  from './psqlIdQueries/types/triptype'
import type { usertableIdQueryType }  from './psqlIdQueries/types/usertable'
import type { accountIdQueryType }  from './psqlIdQueries/types/account'
import type { contactIdQueryType }  from './psqlIdQueries/types/contact'
import type { commandlogentryIdQueryType }  from './psqlIdQueries/types/commandlogentry'
import type { publisherIdQueryType }  from './psqlIdQueries/types/publisher'
import type { geocodingIdQueryType }  from './psqlIdQueries/types/geocoding'
import type { accountingIdQueryType }  from './psqlIdQueries/types/accounting'
import type { presentationIdQueryType }  from './psqlIdQueries/types/presentation'
import type { bidIdQueryType }  from './psqlIdQueries/types/bid'
import type { auctioninfoIdQueryType }  from './psqlIdQueries/types/auctioninfo'
import type { priceinfoIdQueryType }  from './psqlIdQueries/types/priceinfo'
import type { calendarentryIdQueryType }  from './psqlIdQueries/types/calendarentry'
import type { timerangeIdQueryType }  from './psqlIdQueries/types/timerange'
import type { bookingcalendarIdQueryType }  from './psqlIdQueries/types/bookingcalendar'
import type { accomodationresourceIdQueryType }  from './psqlIdQueries/types/accomodationresource'
import type { destinationresourceIdQueryType }  from './psqlIdQueries/types/destinationresource'
import type { eventresourceIdQueryType }  from './psqlIdQueries/types/eventresource'
import type { tripofferresourceIdQueryType }  from './psqlIdQueries/types/tripofferresource'
import type { roomcalendarentryIdQueryType }  from './psqlIdQueries/types/roomcalendarentry'
import type { roomcalendarIdQueryType }  from './psqlIdQueries/types/roomcalendar'
import type { roomlistIdQueryType }  from './psqlIdQueries/types/roomlist'
import type { transportresourceIdQueryType }  from './psqlIdQueries/types/transportresource'
import type { reviewIdQueryType }  from './psqlIdQueries/types/review'
import type { hostresourceIdQueryType }  from './psqlIdQueries/types/hostresource'
import type { touristIdQueryType }  from './psqlIdQueries/types/tourist'
import type { languagelevelIdQueryType }  from './psqlIdQueries/types/languagelevel'
import type { guideresourceIdQueryType }  from './psqlIdQueries/types/guideresource'
import type { guideIdQueryType }  from './psqlIdQueries/types/guide'
import type { agencyIdQueryType }  from './psqlIdQueries/types/agency'
import type { medialocationIdQueryType }  from './psqlIdQueries/types/medialocation'
import type { touristresourceIdQueryType }  from './psqlIdQueries/types/touristresource'
import type { travelgroupresourceIdQueryType }  from './psqlIdQueries/types/travelgroupresource'
import type { agencyaccomodationIdQueryType }  from './psqlIdQueries/types/agencyaccomodation'
import type { agencyeventIdQueryType }  from './psqlIdQueries/types/agencyevent'
import type { agencyguideIdQueryType }  from './psqlIdQueries/types/agencyguide'
import type { agencyhostIdQueryType }  from './psqlIdQueries/types/agencyhost'
import type { agencytouristIdQueryType }  from './psqlIdQueries/types/agencytourist'
import type { agencytransportIdQueryType }  from './psqlIdQueries/types/agencytransport'
import type { agencytravelgroupIdQueryType }  from './psqlIdQueries/types/agencytravelgroup'
import type { agencytripofferIdQueryType }  from './psqlIdQueries/types/agencytripoffer'
import type { agencyuserIdQueryType }  from './psqlIdQueries/types/agencyuser'
import type { mediadestinationresourceIdQueryType }  from './psqlIdQueries/types/mediadestinationresource'
import type { agencyreviewIdQueryType }  from './psqlIdQueries/types/agencyreview'
import type { guidereviewIdQueryType }  from './psqlIdQueries/types/guidereview'
import type { agencybidIdQueryType }  from './psqlIdQueries/types/agencybid'
import type { agencymedialibraryIdQueryType }  from './psqlIdQueries/types/agencymedialibrary'
import type { agencydealIdQueryType }  from './psqlIdQueries/types/agencydeal'
import type { agencyfavoriteIdQueryType }  from './psqlIdQueries/types/agencyfavorite'
import type { agencyofferIdQueryType }  from './psqlIdQueries/types/agencyoffer'
import type { date_IdQueryType }  from './psqlIdQueries/types/date_'
import type { guidebidIdQueryType }  from './psqlIdQueries/types/guidebid'
import type { guidedealIdQueryType }  from './psqlIdQueries/types/guidedeal'
import type { guidefavoriteIdQueryType }  from './psqlIdQueries/types/guidefavorite'
import type { guideofferIdQueryType }  from './psqlIdQueries/types/guideoffer'
import type { touristbidIdQueryType }  from './psqlIdQueries/types/touristbid'
import type { touristdealIdQueryType }  from './psqlIdQueries/types/touristdeal'
import type { touristfavoriteIdQueryType }  from './psqlIdQueries/types/touristfavorite'
import type { touristofferIdQueryType }  from './psqlIdQueries/types/touristoffer'
import type { touristreviewIdQueryType }  from './psqlIdQueries/types/touristreview'
import type { similarbytriptypeaccomodationIdQueryType }  from './psqlIdQueries/types/similarbytriptypeaccomodation'
import type { similarbytriptypedestinationIdQueryType }  from './psqlIdQueries/types/similarbytriptypedestination'
import type { similarbytriptypeeventIdQueryType }  from './psqlIdQueries/types/similarbytriptypeevent'
import type { similarbytriptypeguideIdQueryType }  from './psqlIdQueries/types/similarbytriptypeguide'
import type { similarbytriptypehostIdQueryType }  from './psqlIdQueries/types/similarbytriptypehost'
import type { similarbytriptypetransportIdQueryType }  from './psqlIdQueries/types/similarbytriptypetransport'
import type { similarbytriptypetravelgroupIdQueryType }  from './psqlIdQueries/types/similarbytriptypetravelgroup'
import type { assocaccomodationIdQueryType }  from './psqlIdQueries/types/assocaccomodation'
import type { assochostIdQueryType }  from './psqlIdQueries/types/assochost'
import type { assocguideIdQueryType }  from './psqlIdQueries/types/assocguide'
import type { assoctransportIdQueryType }  from './psqlIdQueries/types/assoctransport'
import type { assoceventIdQueryType }  from './psqlIdQueries/types/assocevent'
import type { assocdestinationIdQueryType }  from './psqlIdQueries/types/assocdestination'
import type { assoctravelgroupIdQueryType }  from './psqlIdQueries/types/assoctravelgroup'


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

export type idQueryType = {
    
topics:  topicsIdQueryType;
posts:  postsIdQueryType;
user_feed_posts:  user_feed_postsIdQueryType;
triptype:  triptypeIdQueryType;
usertable:  usertableIdQueryType;
account:  accountIdQueryType;
contact:  contactIdQueryType;
commandlogentry:  commandlogentryIdQueryType;
publisher:  publisherIdQueryType;
geocoding:  geocodingIdQueryType;
accounting:  accountingIdQueryType;
presentation:  presentationIdQueryType;
bid:  bidIdQueryType;
auctioninfo:  auctioninfoIdQueryType;
priceinfo:  priceinfoIdQueryType;
calendarentry:  calendarentryIdQueryType;
timerange:  timerangeIdQueryType;
bookingcalendar:  bookingcalendarIdQueryType;
accomodationresource:  accomodationresourceIdQueryType;
destinationresource:  destinationresourceIdQueryType;
eventresource:  eventresourceIdQueryType;
tripofferresource:  tripofferresourceIdQueryType;
roomcalendarentry:  roomcalendarentryIdQueryType;
roomcalendar:  roomcalendarIdQueryType;
roomlist:  roomlistIdQueryType;
transportresource:  transportresourceIdQueryType;
review:  reviewIdQueryType;
hostresource:  hostresourceIdQueryType;
tourist:  touristIdQueryType;
languagelevel:  languagelevelIdQueryType;
guideresource:  guideresourceIdQueryType;
guide:  guideIdQueryType;
agency:  agencyIdQueryType;
medialocation:  medialocationIdQueryType;
touristresource:  touristresourceIdQueryType;
travelgroupresource:  travelgroupresourceIdQueryType;
agencyaccomodation:  agencyaccomodationIdQueryType;
agencyevent:  agencyeventIdQueryType;
agencyguide:  agencyguideIdQueryType;
agencyhost:  agencyhostIdQueryType;
agencytourist:  agencytouristIdQueryType;
agencytransport:  agencytransportIdQueryType;
agencytravelgroup:  agencytravelgroupIdQueryType;
agencytripoffer:  agencytripofferIdQueryType;
agencyuser:  agencyuserIdQueryType;
mediadestinationresource:  mediadestinationresourceIdQueryType;
agencyreview:  agencyreviewIdQueryType;
guidereview:  guidereviewIdQueryType;
agencybid:  agencybidIdQueryType;
agencymedialibrary:  agencymedialibraryIdQueryType;
agencydeal:  agencydealIdQueryType;
agencyfavorite:  agencyfavoriteIdQueryType;
agencyoffer:  agencyofferIdQueryType;
date_:  date_IdQueryType;
guidebid:  guidebidIdQueryType;
guidedeal:  guidedealIdQueryType;
guidefavorite:  guidefavoriteIdQueryType;
guideoffer:  guideofferIdQueryType;
touristbid:  touristbidIdQueryType;
touristdeal:  touristdealIdQueryType;
touristfavorite:  touristfavoriteIdQueryType;
touristoffer:  touristofferIdQueryType;
touristreview:  touristreviewIdQueryType;
similarbytriptypeaccomodation:  similarbytriptypeaccomodationIdQueryType;
similarbytriptypedestination:  similarbytriptypedestinationIdQueryType;
similarbytriptypeevent:  similarbytriptypeeventIdQueryType;
similarbytriptypeguide:  similarbytriptypeguideIdQueryType;
similarbytriptypehost:  similarbytriptypehostIdQueryType;
similarbytriptypetransport:  similarbytriptypetransportIdQueryType;
similarbytriptypetravelgroup:  similarbytriptypetravelgroupIdQueryType;
assocaccomodation:  assocaccomodationIdQueryType;
assochost:  assochostIdQueryType;
assocguide:  assocguideIdQueryType;
assoctransport:  assoctransportIdQueryType;
assocevent:  assoceventIdQueryType;
assocdestination:  assocdestinationIdQueryType;
assoctravelgroup:  assoctravelgroupIdQueryType;
}

export function getIdQuery (queryName: string) {

    const query = Lookup[queryName]
    // console.log("querystring:" ,query)

    return { query }
}
