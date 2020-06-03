
import topics from './psqlNodeQueries/topics'
import posts from './psqlNodeQueries/posts'
import user_feed_posts from './psqlNodeQueries/user_feed_posts'
import triptype from './psqlNodeQueries/triptype'
import usertable from './psqlNodeQueries/usertable'
import account from './psqlNodeQueries/account'
import contact from './psqlNodeQueries/contact'
import commandlogentry from './psqlNodeQueries/commandlogentry'
import publisher from './psqlNodeQueries/publisher'
import geocoding from './psqlNodeQueries/geocoding'
import accounting from './psqlNodeQueries/accounting'
import presentation from './psqlNodeQueries/presentation'
import bid from './psqlNodeQueries/bid'
import auctioninfo from './psqlNodeQueries/auctioninfo'
import priceinfo from './psqlNodeQueries/priceinfo'
import calendarentry from './psqlNodeQueries/calendarentry'
import timerange from './psqlNodeQueries/timerange'
import bookingcalendar from './psqlNodeQueries/bookingcalendar'
import accomodationresource from './psqlNodeQueries/accomodationresource'
import destinationresource from './psqlNodeQueries/destinationresource'
import eventresource from './psqlNodeQueries/eventresource'
import tripofferresource from './psqlNodeQueries/tripofferresource'
import roomcalendarentry from './psqlNodeQueries/roomcalendarentry'
import roomcalendar from './psqlNodeQueries/roomcalendar'
import roomlist from './psqlNodeQueries/roomlist'
import transportresource from './psqlNodeQueries/transportresource'
import review from './psqlNodeQueries/review'
import hostresource from './psqlNodeQueries/hostresource'
import tourist from './psqlNodeQueries/tourist'
import languagelevel from './psqlNodeQueries/languagelevel'
import guideresource from './psqlNodeQueries/guideresource'
import guide from './psqlNodeQueries/guide'
import agency from './psqlNodeQueries/agency'
import medialocation from './psqlNodeQueries/medialocation'
import touristresource from './psqlNodeQueries/touristresource'
import travelgroupresource from './psqlNodeQueries/travelgroupresource'
import agencyaccomodation from './psqlNodeQueries/agencyaccomodation'
import agencyevent from './psqlNodeQueries/agencyevent'
import agencyguide from './psqlNodeQueries/agencyguide'
import agencyhost from './psqlNodeQueries/agencyhost'
import agencytourist from './psqlNodeQueries/agencytourist'
import agencytransport from './psqlNodeQueries/agencytransport'
import agencytravelgroup from './psqlNodeQueries/agencytravelgroup'
import agencytripoffer from './psqlNodeQueries/agencytripoffer'
import agencyuser from './psqlNodeQueries/agencyuser'
import mediadestinationresource from './psqlNodeQueries/mediadestinationresource'
import agencyreview from './psqlNodeQueries/agencyreview'
import guidereview from './psqlNodeQueries/guidereview'
import agencybid from './psqlNodeQueries/agencybid'
import agencymedialibrary from './psqlNodeQueries/agencymedialibrary'
import agencydeal from './psqlNodeQueries/agencydeal'
import agencyfavorite from './psqlNodeQueries/agencyfavorite'
import agencyoffer from './psqlNodeQueries/agencyoffer'
import date_ from './psqlNodeQueries/date_'
import guidebid from './psqlNodeQueries/guidebid'
import guidedeal from './psqlNodeQueries/guidedeal'
import guidefavorite from './psqlNodeQueries/guidefavorite'
import guideoffer from './psqlNodeQueries/guideoffer'
import touristbid from './psqlNodeQueries/touristbid'
import touristdeal from './psqlNodeQueries/touristdeal'
import touristfavorite from './psqlNodeQueries/touristfavorite'
import touristoffer from './psqlNodeQueries/touristoffer'
import touristreview from './psqlNodeQueries/touristreview'
import similarbytriptypeaccomodation from './psqlNodeQueries/similarbytriptypeaccomodation'
import similarbytriptypedestination from './psqlNodeQueries/similarbytriptypedestination'
import similarbytriptypeevent from './psqlNodeQueries/similarbytriptypeevent'
import similarbytriptypeguide from './psqlNodeQueries/similarbytriptypeguide'
import similarbytriptypehost from './psqlNodeQueries/similarbytriptypehost'
import similarbytriptypetransport from './psqlNodeQueries/similarbytriptypetransport'
import similarbytriptypetravelgroup from './psqlNodeQueries/similarbytriptypetravelgroup'
import assocaccomodation from './psqlNodeQueries/assocaccomodation'
import assochost from './psqlNodeQueries/assochost'
import assocguide from './psqlNodeQueries/assocguide'
import assoctransport from './psqlNodeQueries/assoctransport'
import assocevent from './psqlNodeQueries/assocevent'
import assocdestination from './psqlNodeQueries/assocdestination'
import assoctravelgroup from './psqlNodeQueries/assoctravelgroup'


import type { topicsNodeQueryType }  from './psqlNodeQueries/types/topics'
import type { postsNodeQueryType }  from './psqlNodeQueries/types/posts'
import type { user_feed_postsNodeQueryType }  from './psqlNodeQueries/types/user_feed_posts'
import type { triptypeNodeQueryType }  from './psqlNodeQueries/types/triptype'
import type { usertableNodeQueryType }  from './psqlNodeQueries/types/usertable'
import type { accountNodeQueryType }  from './psqlNodeQueries/types/account'
import type { contactNodeQueryType }  from './psqlNodeQueries/types/contact'
import type { commandlogentryNodeQueryType }  from './psqlNodeQueries/types/commandlogentry'
import type { publisherNodeQueryType }  from './psqlNodeQueries/types/publisher'
import type { geocodingNodeQueryType }  from './psqlNodeQueries/types/geocoding'
import type { accountingNodeQueryType }  from './psqlNodeQueries/types/accounting'
import type { presentationNodeQueryType }  from './psqlNodeQueries/types/presentation'
import type { bidNodeQueryType }  from './psqlNodeQueries/types/bid'
import type { auctioninfoNodeQueryType }  from './psqlNodeQueries/types/auctioninfo'
import type { priceinfoNodeQueryType }  from './psqlNodeQueries/types/priceinfo'
import type { calendarentryNodeQueryType }  from './psqlNodeQueries/types/calendarentry'
import type { timerangeNodeQueryType }  from './psqlNodeQueries/types/timerange'
import type { bookingcalendarNodeQueryType }  from './psqlNodeQueries/types/bookingcalendar'
import type { accomodationresourceNodeQueryType }  from './psqlNodeQueries/types/accomodationresource'
import type { destinationresourceNodeQueryType }  from './psqlNodeQueries/types/destinationresource'
import type { eventresourceNodeQueryType }  from './psqlNodeQueries/types/eventresource'
import type { tripofferresourceNodeQueryType }  from './psqlNodeQueries/types/tripofferresource'
import type { roomcalendarentryNodeQueryType }  from './psqlNodeQueries/types/roomcalendarentry'
import type { roomcalendarNodeQueryType }  from './psqlNodeQueries/types/roomcalendar'
import type { roomlistNodeQueryType }  from './psqlNodeQueries/types/roomlist'
import type { transportresourceNodeQueryType }  from './psqlNodeQueries/types/transportresource'
import type { reviewNodeQueryType }  from './psqlNodeQueries/types/review'
import type { hostresourceNodeQueryType }  from './psqlNodeQueries/types/hostresource'
import type { touristNodeQueryType }  from './psqlNodeQueries/types/tourist'
import type { languagelevelNodeQueryType }  from './psqlNodeQueries/types/languagelevel'
import type { guideresourceNodeQueryType }  from './psqlNodeQueries/types/guideresource'
import type { guideNodeQueryType }  from './psqlNodeQueries/types/guide'
import type { agencyNodeQueryType }  from './psqlNodeQueries/types/agency'
import type { medialocationNodeQueryType }  from './psqlNodeQueries/types/medialocation'
import type { touristresourceNodeQueryType }  from './psqlNodeQueries/types/touristresource'
import type { travelgroupresourceNodeQueryType }  from './psqlNodeQueries/types/travelgroupresource'
import type { agencyaccomodationNodeQueryType }  from './psqlNodeQueries/types/agencyaccomodation'
import type { agencyeventNodeQueryType }  from './psqlNodeQueries/types/agencyevent'
import type { agencyguideNodeQueryType }  from './psqlNodeQueries/types/agencyguide'
import type { agencyhostNodeQueryType }  from './psqlNodeQueries/types/agencyhost'
import type { agencytouristNodeQueryType }  from './psqlNodeQueries/types/agencytourist'
import type { agencytransportNodeQueryType }  from './psqlNodeQueries/types/agencytransport'
import type { agencytravelgroupNodeQueryType }  from './psqlNodeQueries/types/agencytravelgroup'
import type { agencytripofferNodeQueryType }  from './psqlNodeQueries/types/agencytripoffer'
import type { agencyuserNodeQueryType }  from './psqlNodeQueries/types/agencyuser'
import type { mediadestinationresourceNodeQueryType }  from './psqlNodeQueries/types/mediadestinationresource'
import type { agencyreviewNodeQueryType }  from './psqlNodeQueries/types/agencyreview'
import type { guidereviewNodeQueryType }  from './psqlNodeQueries/types/guidereview'
import type { agencybidNodeQueryType }  from './psqlNodeQueries/types/agencybid'
import type { agencymedialibraryNodeQueryType }  from './psqlNodeQueries/types/agencymedialibrary'
import type { agencydealNodeQueryType }  from './psqlNodeQueries/types/agencydeal'
import type { agencyfavoriteNodeQueryType }  from './psqlNodeQueries/types/agencyfavorite'
import type { agencyofferNodeQueryType }  from './psqlNodeQueries/types/agencyoffer'
import type { date_NodeQueryType }  from './psqlNodeQueries/types/date_'
import type { guidebidNodeQueryType }  from './psqlNodeQueries/types/guidebid'
import type { guidedealNodeQueryType }  from './psqlNodeQueries/types/guidedeal'
import type { guidefavoriteNodeQueryType }  from './psqlNodeQueries/types/guidefavorite'
import type { guideofferNodeQueryType }  from './psqlNodeQueries/types/guideoffer'
import type { touristbidNodeQueryType }  from './psqlNodeQueries/types/touristbid'
import type { touristdealNodeQueryType }  from './psqlNodeQueries/types/touristdeal'
import type { touristfavoriteNodeQueryType }  from './psqlNodeQueries/types/touristfavorite'
import type { touristofferNodeQueryType }  from './psqlNodeQueries/types/touristoffer'
import type { touristreviewNodeQueryType }  from './psqlNodeQueries/types/touristreview'
import type { similarbytriptypeaccomodationNodeQueryType }  from './psqlNodeQueries/types/similarbytriptypeaccomodation'
import type { similarbytriptypedestinationNodeQueryType }  from './psqlNodeQueries/types/similarbytriptypedestination'
import type { similarbytriptypeeventNodeQueryType }  from './psqlNodeQueries/types/similarbytriptypeevent'
import type { similarbytriptypeguideNodeQueryType }  from './psqlNodeQueries/types/similarbytriptypeguide'
import type { similarbytriptypehostNodeQueryType }  from './psqlNodeQueries/types/similarbytriptypehost'
import type { similarbytriptypetransportNodeQueryType }  from './psqlNodeQueries/types/similarbytriptypetransport'
import type { similarbytriptypetravelgroupNodeQueryType }  from './psqlNodeQueries/types/similarbytriptypetravelgroup'
import type { assocaccomodationNodeQueryType }  from './psqlNodeQueries/types/assocaccomodation'
import type { assochostNodeQueryType }  from './psqlNodeQueries/types/assochost'
import type { assocguideNodeQueryType }  from './psqlNodeQueries/types/assocguide'
import type { assoctransportNodeQueryType }  from './psqlNodeQueries/types/assoctransport'
import type { assoceventNodeQueryType }  from './psqlNodeQueries/types/assocevent'
import type { assocdestinationNodeQueryType }  from './psqlNodeQueries/types/assocdestination'
import type { assoctravelgroupNodeQueryType }  from './psqlNodeQueries/types/assoctravelgroup'

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

export type nodeQueryType = {
    
topics:  topicsNodeQueryType;
posts:  postsNodeQueryType;
user_feed_posts:  user_feed_postsNodeQueryType;
triptype:  triptypeNodeQueryType;
usertable:  usertableNodeQueryType;
account:  accountNodeQueryType;
contact:  contactNodeQueryType;
commandlogentry:  commandlogentryNodeQueryType;
publisher:  publisherNodeQueryType;
geocoding:  geocodingNodeQueryType;
accounting:  accountingNodeQueryType;
presentation:  presentationNodeQueryType;
bid:  bidNodeQueryType;
auctioninfo:  auctioninfoNodeQueryType;
priceinfo:  priceinfoNodeQueryType;
calendarentry:  calendarentryNodeQueryType;
timerange:  timerangeNodeQueryType;
bookingcalendar:  bookingcalendarNodeQueryType;
accomodationresource:  accomodationresourceNodeQueryType;
destinationresource:  destinationresourceNodeQueryType;
eventresource:  eventresourceNodeQueryType;
tripofferresource:  tripofferresourceNodeQueryType;
roomcalendarentry:  roomcalendarentryNodeQueryType;
roomcalendar:  roomcalendarNodeQueryType;
roomlist:  roomlistNodeQueryType;
transportresource:  transportresourceNodeQueryType;
review:  reviewNodeQueryType;
hostresource:  hostresourceNodeQueryType;
tourist:  touristNodeQueryType;
languagelevel:  languagelevelNodeQueryType;
guideresource:  guideresourceNodeQueryType;
guide:  guideNodeQueryType;
agency:  agencyNodeQueryType;
medialocation:  medialocationNodeQueryType;
touristresource:  touristresourceNodeQueryType;
travelgroupresource:  travelgroupresourceNodeQueryType;
agencyaccomodation:  agencyaccomodationNodeQueryType;
agencyevent:  agencyeventNodeQueryType;
agencyguide:  agencyguideNodeQueryType;
agencyhost:  agencyhostNodeQueryType;
agencytourist:  agencytouristNodeQueryType;
agencytransport:  agencytransportNodeQueryType;
agencytravelgroup:  agencytravelgroupNodeQueryType;
agencytripoffer:  agencytripofferNodeQueryType;
agencyuser:  agencyuserNodeQueryType;
mediadestinationresource:  mediadestinationresourceNodeQueryType;
agencyreview:  agencyreviewNodeQueryType;
guidereview:  guidereviewNodeQueryType;
agencybid:  agencybidNodeQueryType;
agencymedialibrary:  agencymedialibraryNodeQueryType;
agencydeal:  agencydealNodeQueryType;
agencyfavorite:  agencyfavoriteNodeQueryType;
agencyoffer:  agencyofferNodeQueryType;
date_:  date_NodeQueryType;
guidebid:  guidebidNodeQueryType;
guidedeal:  guidedealNodeQueryType;
guidefavorite:  guidefavoriteNodeQueryType;
guideoffer:  guideofferNodeQueryType;
touristbid:  touristbidNodeQueryType;
touristdeal:  touristdealNodeQueryType;
touristfavorite:  touristfavoriteNodeQueryType;
touristoffer:  touristofferNodeQueryType;
touristreview:  touristreviewNodeQueryType;
similarbytriptypeaccomodation:  similarbytriptypeaccomodationNodeQueryType;
similarbytriptypedestination:  similarbytriptypedestinationNodeQueryType;
similarbytriptypeevent:  similarbytriptypeeventNodeQueryType;
similarbytriptypeguide:  similarbytriptypeguideNodeQueryType;
similarbytriptypehost:  similarbytriptypehostNodeQueryType;
similarbytriptypetransport:  similarbytriptypetransportNodeQueryType;
similarbytriptypetravelgroup:  similarbytriptypetravelgroupNodeQueryType;
assocaccomodation:  assocaccomodationNodeQueryType;
assochost:  assochostNodeQueryType;
assocguide:  assocguideNodeQueryType;
assoctransport:  assoctransportNodeQueryType;
assocevent:  assoceventNodeQueryType;
assocdestination:  assocdestinationNodeQueryType;
assoctravelgroup:  assoctravelgroupNodeQueryType;
}

export function getNodeQuery (queryName: string) {


    const query = Lookup[queryName]
    // console.log("querystring:" ,query)

    return { query }
}
