
import accomodationresource from './psqlIdQueries/accomodationresource'
import account from './psqlIdQueries/account'
import accounting from './psqlIdQueries/accounting'
import agency from './psqlIdQueries/agency'
import agencyaccomodation from './psqlIdQueries/agencyaccomodation'
import agencybid from './psqlIdQueries/agencybid'
import agencydeal from './psqlIdQueries/agencydeal'
import agencyevent from './psqlIdQueries/agencyevent'
import agencyfavorite from './psqlIdQueries/agencyfavorite'
import agencyguide from './psqlIdQueries/agencyguide'
import agencyhost from './psqlIdQueries/agencyhost'
import agencymedialibrary from './psqlIdQueries/agencymedialibrary'
import agencyoffer from './psqlIdQueries/agencyoffer'
import agencyreview from './psqlIdQueries/agencyreview'
import agencytourist from './psqlIdQueries/agencytourist'
import agencytransport from './psqlIdQueries/agencytransport'
import agencytravelgroup from './psqlIdQueries/agencytravelgroup'
import agencytripoffer from './psqlIdQueries/agencytripoffer'
import agencyuser from './psqlIdQueries/agencyuser'
import assocaccomodation from './psqlIdQueries/assocaccomodation'
import assocdestination from './psqlIdQueries/assocdestination'
import assocevent from './psqlIdQueries/assocevent'
import assocguide from './psqlIdQueries/assocguide'
import assochost from './psqlIdQueries/assochost'
import assoctransport from './psqlIdQueries/assoctransport'
import assoctravelgroup from './psqlIdQueries/assoctravelgroup'
import auctioninfo from './psqlIdQueries/auctioninfo'
import bid from './psqlIdQueries/bid'
import bookingcalendar from './psqlIdQueries/bookingcalendar'
import calendarentry from './psqlIdQueries/calendarentry'
import commandlogentry from './psqlIdQueries/commandlogentry'
import contact from './psqlIdQueries/contact'
import date_ from './psqlIdQueries/date_'
import destinationresource from './psqlIdQueries/destinationresource'
import eventresource from './psqlIdQueries/eventresource'
import geocoding from './psqlIdQueries/geocoding'
import guide from './psqlIdQueries/guide'
import guidebid from './psqlIdQueries/guidebid'
import guidedeal from './psqlIdQueries/guidedeal'
import guidefavorite from './psqlIdQueries/guidefavorite'
import guideoffer from './psqlIdQueries/guideoffer'
import guideresource from './psqlIdQueries/guideresource'
import guidereview from './psqlIdQueries/guidereview'
import hostresource from './psqlIdQueries/hostresource'
import languagelevel from './psqlIdQueries/languagelevel'
import mediadestinationresource from './psqlIdQueries/mediadestinationresource'
import medialocation from './psqlIdQueries/medialocation'
import presentation from './psqlIdQueries/presentation'
import priceinfo from './psqlIdQueries/priceinfo'
import publisher from './psqlIdQueries/publisher'
import review from './psqlIdQueries/review'
import roomcalendar from './psqlIdQueries/roomcalendar'
import roomcalendarentry from './psqlIdQueries/roomcalendarentry'
import roomlist from './psqlIdQueries/roomlist'
import similarbytriptypeaccomodation from './psqlIdQueries/similarbytriptypeaccomodation'
import similarbytriptypedestination from './psqlIdQueries/similarbytriptypedestination'
import similarbytriptypeevent from './psqlIdQueries/similarbytriptypeevent'
import similarbytriptypeguide from './psqlIdQueries/similarbytriptypeguide'
import similarbytriptypehost from './psqlIdQueries/similarbytriptypehost'
import similarbytriptypetransport from './psqlIdQueries/similarbytriptypetransport'
import similarbytriptypetravelgroup from './psqlIdQueries/similarbytriptypetravelgroup'
import timerange from './psqlIdQueries/timerange'
import tourist from './psqlIdQueries/tourist'
import touristbid from './psqlIdQueries/touristbid'
import touristdeal from './psqlIdQueries/touristdeal'
import touristfavorite from './psqlIdQueries/touristfavorite'
import touristoffer from './psqlIdQueries/touristoffer'
import touristresource from './psqlIdQueries/touristresource'
import touristreview from './psqlIdQueries/touristreview'
import transportresource from './psqlIdQueries/transportresource'
import travelgroupresource from './psqlIdQueries/travelgroupresource'
import tripofferresource from './psqlIdQueries/tripofferresource'
import triptype from './psqlIdQueries/triptype'
import type { accomodationresourceIdQueryType }  from './psqlIdQueries/types/accomodationresource'
import type { accountIdQueryType }  from './psqlIdQueries/types/account'
import type { accountingIdQueryType }  from './psqlIdQueries/types/accounting'
import type { agencyIdQueryType }  from './psqlIdQueries/types/agency'
import type { agencyaccomodationIdQueryType }  from './psqlIdQueries/types/agencyaccomodation'
import type { agencybidIdQueryType }  from './psqlIdQueries/types/agencybid'
import type { agencydealIdQueryType }  from './psqlIdQueries/types/agencydeal'
import type { agencyeventIdQueryType }  from './psqlIdQueries/types/agencyevent'
import type { agencyfavoriteIdQueryType }  from './psqlIdQueries/types/agencyfavorite'
import type { agencyguideIdQueryType }  from './psqlIdQueries/types/agencyguide'
import type { agencyhostIdQueryType }  from './psqlIdQueries/types/agencyhost'
import type { agencymedialibraryIdQueryType }  from './psqlIdQueries/types/agencymedialibrary'
import type { agencyofferIdQueryType }  from './psqlIdQueries/types/agencyoffer'
import type { agencyreviewIdQueryType }  from './psqlIdQueries/types/agencyreview'
import type { agencytouristIdQueryType }  from './psqlIdQueries/types/agencytourist'
import type { agencytransportIdQueryType }  from './psqlIdQueries/types/agencytransport'
import type { agencytravelgroupIdQueryType }  from './psqlIdQueries/types/agencytravelgroup'
import type { agencytripofferIdQueryType }  from './psqlIdQueries/types/agencytripoffer'
import type { agencyuserIdQueryType }  from './psqlIdQueries/types/agencyuser'
import type { assocaccomodationIdQueryType }  from './psqlIdQueries/types/assocaccomodation'
import type { assocdestinationIdQueryType }  from './psqlIdQueries/types/assocdestination'
import type { assoceventIdQueryType }  from './psqlIdQueries/types/assocevent'
import type { assocguideIdQueryType }  from './psqlIdQueries/types/assocguide'
import type { assochostIdQueryType }  from './psqlIdQueries/types/assochost'
import type { assoctransportIdQueryType }  from './psqlIdQueries/types/assoctransport'
import type { assoctravelgroupIdQueryType }  from './psqlIdQueries/types/assoctravelgroup'
import type { auctioninfoIdQueryType }  from './psqlIdQueries/types/auctioninfo'
import type { bidIdQueryType }  from './psqlIdQueries/types/bid'
import type { bookingcalendarIdQueryType }  from './psqlIdQueries/types/bookingcalendar'
import type { calendarentryIdQueryType }  from './psqlIdQueries/types/calendarentry'
import type { commandlogentryIdQueryType }  from './psqlIdQueries/types/commandlogentry'
import type { contactIdQueryType }  from './psqlIdQueries/types/contact'
import type { date_IdQueryType }  from './psqlIdQueries/types/date_'
import type { destinationresourceIdQueryType }  from './psqlIdQueries/types/destinationresource'
import type { eventresourceIdQueryType }  from './psqlIdQueries/types/eventresource'
import type { geocodingIdQueryType }  from './psqlIdQueries/types/geocoding'
import type { guideIdQueryType }  from './psqlIdQueries/types/guide'
import type { guidebidIdQueryType }  from './psqlIdQueries/types/guidebid'
import type { guidedealIdQueryType }  from './psqlIdQueries/types/guidedeal'
import type { guidefavoriteIdQueryType }  from './psqlIdQueries/types/guidefavorite'
import type { guideofferIdQueryType }  from './psqlIdQueries/types/guideoffer'
import type { guideresourceIdQueryType }  from './psqlIdQueries/types/guideresource'
import type { guidereviewIdQueryType }  from './psqlIdQueries/types/guidereview'
import type { hostresourceIdQueryType }  from './psqlIdQueries/types/hostresource'
import type { languagelevelIdQueryType }  from './psqlIdQueries/types/languagelevel'
import type { mediadestinationresourceIdQueryType }  from './psqlIdQueries/types/mediadestinationresource'
import type { medialocationIdQueryType }  from './psqlIdQueries/types/medialocation'
import type { presentationIdQueryType }  from './psqlIdQueries/types/presentation'
import type { priceinfoIdQueryType }  from './psqlIdQueries/types/priceinfo'
import type { publisherIdQueryType }  from './psqlIdQueries/types/publisher'
import type { reviewIdQueryType }  from './psqlIdQueries/types/review'
import type { roomcalendarIdQueryType }  from './psqlIdQueries/types/roomcalendar'
import type { roomcalendarentryIdQueryType }  from './psqlIdQueries/types/roomcalendarentry'
import type { roomlistIdQueryType }  from './psqlIdQueries/types/roomlist'
import type { similarbytriptypeaccomodationIdQueryType }  from './psqlIdQueries/types/similarbytriptypeaccomodation'
import type { similarbytriptypedestinationIdQueryType }  from './psqlIdQueries/types/similarbytriptypedestination'
import type { similarbytriptypeeventIdQueryType }  from './psqlIdQueries/types/similarbytriptypeevent'
import type { similarbytriptypeguideIdQueryType }  from './psqlIdQueries/types/similarbytriptypeguide'
import type { similarbytriptypehostIdQueryType }  from './psqlIdQueries/types/similarbytriptypehost'
import type { similarbytriptypetransportIdQueryType }  from './psqlIdQueries/types/similarbytriptypetransport'
import type { similarbytriptypetravelgroupIdQueryType }  from './psqlIdQueries/types/similarbytriptypetravelgroup'
import type { timerangeIdQueryType }  from './psqlIdQueries/types/timerange'
import type { touristIdQueryType }  from './psqlIdQueries/types/tourist'
import type { touristbidIdQueryType }  from './psqlIdQueries/types/touristbid'
import type { touristdealIdQueryType }  from './psqlIdQueries/types/touristdeal'
import type { touristfavoriteIdQueryType }  from './psqlIdQueries/types/touristfavorite'
import type { touristofferIdQueryType }  from './psqlIdQueries/types/touristoffer'
import type { touristresourceIdQueryType }  from './psqlIdQueries/types/touristresource'
import type { touristreviewIdQueryType }  from './psqlIdQueries/types/touristreview'
import type { transportresourceIdQueryType }  from './psqlIdQueries/types/transportresource'
import type { travelgroupresourceIdQueryType }  from './psqlIdQueries/types/travelgroupresource'
import type { tripofferresourceIdQueryType }  from './psqlIdQueries/types/tripofferresource'
import type { triptypeIdQueryType }  from './psqlIdQueries/types/triptype'
import type { usertableIdQueryType }  from './psqlIdQueries/types/usertable'
import usertable from './psqlIdQueries/usertable'


const Lookup = {
    
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

export function getIdQuery (queryName) {

    const query = Lookup[queryName]
    console.log("querystring:" ,query)
    
    return { query }
}
