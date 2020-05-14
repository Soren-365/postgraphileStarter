
import accomodationresource from './psqlAgencyQueries/accomodationresource'
import account from './psqlAgencyQueries/account'
import accounting from './psqlAgencyQueries/accounting'
import agency from './psqlAgencyQueries/agency'
import agencyaccomodation from './psqlAgencyQueries/agencyaccomodation'
import agencybid from './psqlAgencyQueries/agencybid'
import agencydeal from './psqlAgencyQueries/agencydeal'
import agencyevent from './psqlAgencyQueries/agencyevent'
import agencyfavorite from './psqlAgencyQueries/agencyfavorite'
import agencyguide from './psqlAgencyQueries/agencyguide'
import agencyhost from './psqlAgencyQueries/agencyhost'
import agencymedialibrary from './psqlAgencyQueries/agencymedialibrary'
import agencyoffer from './psqlAgencyQueries/agencyoffer'
import agencyreview from './psqlAgencyQueries/agencyreview'
import agencytourist from './psqlAgencyQueries/agencytourist'
import agencytransport from './psqlAgencyQueries/agencytransport'
import agencytravelgroup from './psqlAgencyQueries/agencytravelgroup'
import agencytripoffer from './psqlAgencyQueries/agencytripoffer'
import agencyuser from './psqlAgencyQueries/agencyuser'
import assocaccomodation from './psqlAgencyQueries/assocaccomodation'
import assocdestination from './psqlAgencyQueries/assocdestination'
import assocevent from './psqlAgencyQueries/assocevent'
import assocguide from './psqlAgencyQueries/assocguide'
import assochost from './psqlAgencyQueries/assochost'
import assoctransport from './psqlAgencyQueries/assoctransport'
import assoctravelgroup from './psqlAgencyQueries/assoctravelgroup'
import auctioninfo from './psqlAgencyQueries/auctioninfo'
import bid from './psqlAgencyQueries/bid'
import bookingcalendar from './psqlAgencyQueries/bookingcalendar'
import calendarentry from './psqlAgencyQueries/calendarentry'
import commandlogentry from './psqlAgencyQueries/commandlogentry'
import contact from './psqlAgencyQueries/contact'
import date_ from './psqlAgencyQueries/date_'
import destinationresource from './psqlAgencyQueries/destinationresource'
import eventresource from './psqlAgencyQueries/eventresource'
import geocoding from './psqlAgencyQueries/geocoding'
import guide from './psqlAgencyQueries/guide'
import guidebid from './psqlAgencyQueries/guidebid'
import guidedeal from './psqlAgencyQueries/guidedeal'
import guidefavorite from './psqlAgencyQueries/guidefavorite'
import guideoffer from './psqlAgencyQueries/guideoffer'
import guideresource from './psqlAgencyQueries/guideresource'
import guidereview from './psqlAgencyQueries/guidereview'
import hostresource from './psqlAgencyQueries/hostresource'
import languagelevel from './psqlAgencyQueries/languagelevel'
import mediadestinationresource from './psqlAgencyQueries/mediadestinationresource'
import medialocation from './psqlAgencyQueries/medialocation'
import presentation from './psqlAgencyQueries/presentation'
import priceinfo from './psqlAgencyQueries/priceinfo'
import publisher from './psqlAgencyQueries/publisher'
import review from './psqlAgencyQueries/review'
import roomcalendar from './psqlAgencyQueries/roomcalendar'
import roomcalendarentry from './psqlAgencyQueries/roomcalendarentry'
import roomlist from './psqlAgencyQueries/roomlist'
import similarbytriptypeaccomodation from './psqlAgencyQueries/similarbytriptypeaccomodation'
import similarbytriptypedestination from './psqlAgencyQueries/similarbytriptypedestination'
import similarbytriptypeevent from './psqlAgencyQueries/similarbytriptypeevent'
import similarbytriptypeguide from './psqlAgencyQueries/similarbytriptypeguide'
import similarbytriptypehost from './psqlAgencyQueries/similarbytriptypehost'
import similarbytriptypetransport from './psqlAgencyQueries/similarbytriptypetransport'
import similarbytriptypetravelgroup from './psqlAgencyQueries/similarbytriptypetravelgroup'
import timerange from './psqlAgencyQueries/timerange'
import tourist from './psqlAgencyQueries/tourist'
import touristbid from './psqlAgencyQueries/touristbid'
import touristdeal from './psqlAgencyQueries/touristdeal'
import touristfavorite from './psqlAgencyQueries/touristfavorite'
import touristoffer from './psqlAgencyQueries/touristoffer'
import touristresource from './psqlAgencyQueries/touristresource'
import touristreview from './psqlAgencyQueries/touristreview'
import transportresource from './psqlAgencyQueries/transportresource'
import travelgroupresource from './psqlAgencyQueries/travelgroupresource'
import tripofferresource from './psqlAgencyQueries/tripofferresource'
import triptype from './psqlAgencyQueries/triptype'
import type { accomodationresourceAgencyQueryType }  from './psqlAgencyQueries/types/accomodationresource'
import type { accountAgencyQueryType }  from './psqlAgencyQueries/types/account'
import type { accountingAgencyQueryType }  from './psqlAgencyQueries/types/accounting'
import type { agencyAgencyQueryType }  from './psqlAgencyQueries/types/agency'
import type { agencyaccomodationAgencyQueryType }  from './psqlAgencyQueries/types/agencyaccomodation'
import type { agencybidAgencyQueryType }  from './psqlAgencyQueries/types/agencybid'
import type { agencydealAgencyQueryType }  from './psqlAgencyQueries/types/agencydeal'
import type { agencyeventAgencyQueryType }  from './psqlAgencyQueries/types/agencyevent'
import type { agencyfavoriteAgencyQueryType }  from './psqlAgencyQueries/types/agencyfavorite'
import type { agencyguideAgencyQueryType }  from './psqlAgencyQueries/types/agencyguide'
import type { agencyhostAgencyQueryType }  from './psqlAgencyQueries/types/agencyhost'
import type { agencymedialibraryAgencyQueryType }  from './psqlAgencyQueries/types/agencymedialibrary'
import type { agencyofferAgencyQueryType }  from './psqlAgencyQueries/types/agencyoffer'
import type { agencyreviewAgencyQueryType }  from './psqlAgencyQueries/types/agencyreview'
import type { agencytouristAgencyQueryType }  from './psqlAgencyQueries/types/agencytourist'
import type { agencytransportAgencyQueryType }  from './psqlAgencyQueries/types/agencytransport'
import type { agencytravelgroupAgencyQueryType }  from './psqlAgencyQueries/types/agencytravelgroup'
import type { agencytripofferAgencyQueryType }  from './psqlAgencyQueries/types/agencytripoffer'
import type { agencyuserAgencyQueryType }  from './psqlAgencyQueries/types/agencyuser'
import type { assocaccomodationAgencyQueryType }  from './psqlAgencyQueries/types/assocaccomodation'
import type { assocdestinationAgencyQueryType }  from './psqlAgencyQueries/types/assocdestination'
import type { assoceventAgencyQueryType }  from './psqlAgencyQueries/types/assocevent'
import type { assocguideAgencyQueryType }  from './psqlAgencyQueries/types/assocguide'
import type { assochostAgencyQueryType }  from './psqlAgencyQueries/types/assochost'
import type { assoctransportAgencyQueryType }  from './psqlAgencyQueries/types/assoctransport'
import type { assoctravelgroupAgencyQueryType }  from './psqlAgencyQueries/types/assoctravelgroup'
import type { auctioninfoAgencyQueryType }  from './psqlAgencyQueries/types/auctioninfo'
import type { bidAgencyQueryType }  from './psqlAgencyQueries/types/bid'
import type { bookingcalendarAgencyQueryType }  from './psqlAgencyQueries/types/bookingcalendar'
import type { calendarentryAgencyQueryType }  from './psqlAgencyQueries/types/calendarentry'
import type { commandlogentryAgencyQueryType }  from './psqlAgencyQueries/types/commandlogentry'
import type { contactAgencyQueryType }  from './psqlAgencyQueries/types/contact'
import type { date_AgencyQueryType }  from './psqlAgencyQueries/types/date_'
import type { destinationresourceAgencyQueryType }  from './psqlAgencyQueries/types/destinationresource'
import type { eventresourceAgencyQueryType }  from './psqlAgencyQueries/types/eventresource'
import type { geocodingAgencyQueryType }  from './psqlAgencyQueries/types/geocoding'
import type { guideAgencyQueryType }  from './psqlAgencyQueries/types/guide'
import type { guidebidAgencyQueryType }  from './psqlAgencyQueries/types/guidebid'
import type { guidedealAgencyQueryType }  from './psqlAgencyQueries/types/guidedeal'
import type { guidefavoriteAgencyQueryType }  from './psqlAgencyQueries/types/guidefavorite'
import type { guideofferAgencyQueryType }  from './psqlAgencyQueries/types/guideoffer'
import type { guideresourceAgencyQueryType }  from './psqlAgencyQueries/types/guideresource'
import type { guidereviewAgencyQueryType }  from './psqlAgencyQueries/types/guidereview'
import type { hostresourceAgencyQueryType }  from './psqlAgencyQueries/types/hostresource'
import type { languagelevelAgencyQueryType }  from './psqlAgencyQueries/types/languagelevel'
import type { mediadestinationresourceAgencyQueryType }  from './psqlAgencyQueries/types/mediadestinationresource'
import type { medialocationAgencyQueryType }  from './psqlAgencyQueries/types/medialocation'
import type { presentationAgencyQueryType }  from './psqlAgencyQueries/types/presentation'
import type { priceinfoAgencyQueryType }  from './psqlAgencyQueries/types/priceinfo'
import type { publisherAgencyQueryType }  from './psqlAgencyQueries/types/publisher'
import type { reviewAgencyQueryType }  from './psqlAgencyQueries/types/review'
import type { roomcalendarAgencyQueryType }  from './psqlAgencyQueries/types/roomcalendar'
import type { roomcalendarentryAgencyQueryType }  from './psqlAgencyQueries/types/roomcalendarentry'
import type { roomlistAgencyQueryType }  from './psqlAgencyQueries/types/roomlist'
import type { similarbytriptypeaccomodationAgencyQueryType }  from './psqlAgencyQueries/types/similarbytriptypeaccomodation'
import type { similarbytriptypedestinationAgencyQueryType }  from './psqlAgencyQueries/types/similarbytriptypedestination'
import type { similarbytriptypeeventAgencyQueryType }  from './psqlAgencyQueries/types/similarbytriptypeevent'
import type { similarbytriptypeguideAgencyQueryType }  from './psqlAgencyQueries/types/similarbytriptypeguide'
import type { similarbytriptypehostAgencyQueryType }  from './psqlAgencyQueries/types/similarbytriptypehost'
import type { similarbytriptypetransportAgencyQueryType }  from './psqlAgencyQueries/types/similarbytriptypetransport'
import type { similarbytriptypetravelgroupAgencyQueryType }  from './psqlAgencyQueries/types/similarbytriptypetravelgroup'
import type { timerangeAgencyQueryType }  from './psqlAgencyQueries/types/timerange'
import type { touristAgencyQueryType }  from './psqlAgencyQueries/types/tourist'
import type { touristbidAgencyQueryType }  from './psqlAgencyQueries/types/touristbid'
import type { touristdealAgencyQueryType }  from './psqlAgencyQueries/types/touristdeal'
import type { touristfavoriteAgencyQueryType }  from './psqlAgencyQueries/types/touristfavorite'
import type { touristofferAgencyQueryType }  from './psqlAgencyQueries/types/touristoffer'
import type { touristresourceAgencyQueryType }  from './psqlAgencyQueries/types/touristresource'
import type { touristreviewAgencyQueryType }  from './psqlAgencyQueries/types/touristreview'
import type { transportresourceAgencyQueryType }  from './psqlAgencyQueries/types/transportresource'
import type { travelgroupresourceAgencyQueryType }  from './psqlAgencyQueries/types/travelgroupresource'
import type { tripofferresourceAgencyQueryType }  from './psqlAgencyQueries/types/tripofferresource'
import type { triptypeAgencyQueryType }  from './psqlAgencyQueries/types/triptype'
import type { usertableAgencyQueryType }  from './psqlAgencyQueries/types/usertable'
import usertable from './psqlAgencyQueries/usertable'

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

export type agencyQueryType = {
    
triptype:  triptypeAgencyQueryType;
usertable:  usertableAgencyQueryType;
account:  accountAgencyQueryType;
contact:  contactAgencyQueryType;
commandlogentry:  commandlogentryAgencyQueryType;
publisher:  publisherAgencyQueryType;
geocoding:  geocodingAgencyQueryType;
accounting:  accountingAgencyQueryType;
presentation:  presentationAgencyQueryType;
bid:  bidAgencyQueryType;
auctioninfo:  auctioninfoAgencyQueryType;
priceinfo:  priceinfoAgencyQueryType;
calendarentry:  calendarentryAgencyQueryType;
timerange:  timerangeAgencyQueryType;
bookingcalendar:  bookingcalendarAgencyQueryType;
accomodationresource:  accomodationresourceAgencyQueryType;
destinationresource:  destinationresourceAgencyQueryType;
eventresource:  eventresourceAgencyQueryType;
tripofferresource:  tripofferresourceAgencyQueryType;
roomcalendarentry:  roomcalendarentryAgencyQueryType;
roomcalendar:  roomcalendarAgencyQueryType;
roomlist:  roomlistAgencyQueryType;
transportresource:  transportresourceAgencyQueryType;
review:  reviewAgencyQueryType;
hostresource:  hostresourceAgencyQueryType;
tourist:  touristAgencyQueryType;
languagelevel:  languagelevelAgencyQueryType;
guideresource:  guideresourceAgencyQueryType;
guide:  guideAgencyQueryType;
agency:  agencyAgencyQueryType;
medialocation:  medialocationAgencyQueryType;
touristresource:  touristresourceAgencyQueryType;
travelgroupresource:  travelgroupresourceAgencyQueryType;
agencyaccomodation:  agencyaccomodationAgencyQueryType;
agencyevent:  agencyeventAgencyQueryType;
agencyguide:  agencyguideAgencyQueryType;
agencyhost:  agencyhostAgencyQueryType;
agencytourist:  agencytouristAgencyQueryType;
agencytransport:  agencytransportAgencyQueryType;
agencytravelgroup:  agencytravelgroupAgencyQueryType;
agencytripoffer:  agencytripofferAgencyQueryType;
agencyuser:  agencyuserAgencyQueryType;
mediadestinationresource:  mediadestinationresourceAgencyQueryType;
agencyreview:  agencyreviewAgencyQueryType;
guidereview:  guidereviewAgencyQueryType;
agencybid:  agencybidAgencyQueryType;
agencymedialibrary:  agencymedialibraryAgencyQueryType;
agencydeal:  agencydealAgencyQueryType;
agencyfavorite:  agencyfavoriteAgencyQueryType;
agencyoffer:  agencyofferAgencyQueryType;
date_:  date_AgencyQueryType;
guidebid:  guidebidAgencyQueryType;
guidedeal:  guidedealAgencyQueryType;
guidefavorite:  guidefavoriteAgencyQueryType;
guideoffer:  guideofferAgencyQueryType;
touristbid:  touristbidAgencyQueryType;
touristdeal:  touristdealAgencyQueryType;
touristfavorite:  touristfavoriteAgencyQueryType;
touristoffer:  touristofferAgencyQueryType;
touristreview:  touristreviewAgencyQueryType;
similarbytriptypeaccomodation:  similarbytriptypeaccomodationAgencyQueryType;
similarbytriptypedestination:  similarbytriptypedestinationAgencyQueryType;
similarbytriptypeevent:  similarbytriptypeeventAgencyQueryType;
similarbytriptypeguide:  similarbytriptypeguideAgencyQueryType;
similarbytriptypehost:  similarbytriptypehostAgencyQueryType;
similarbytriptypetransport:  similarbytriptypetransportAgencyQueryType;
similarbytriptypetravelgroup:  similarbytriptypetravelgroupAgencyQueryType;
assocaccomodation:  assocaccomodationAgencyQueryType;
assochost:  assochostAgencyQueryType;
assocguide:  assocguideAgencyQueryType;
assoctransport:  assoctransportAgencyQueryType;
assocevent:  assoceventAgencyQueryType;
assocdestination:  assocdestinationAgencyQueryType;
assoctravelgroup:  assoctravelgroupAgencyQueryType;  
}


export function getAgencyQuery (queryName) {

 

    const query = Lookup[queryName]
    console.log("querystring:" ,query)
    
    return { query }
}
