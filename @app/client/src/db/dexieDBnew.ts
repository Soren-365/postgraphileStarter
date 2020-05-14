
import Dexie from 'dexie'

import type { accomodationresourceDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/accomodationresourceDbType'
import type { accountDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/accountDbType'
import type { accountingDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/accountingDbType'
import type { agencyaccomodationDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencyaccomodationDbType'
import type { agencybidDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencybidDbType'
import type { agencyDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencyDbType'
import type { agencydealDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencydealDbType'
import type { agencyeventDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencyeventDbType'
import type { agencyfavoriteDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencyfavoriteDbType'
import type { agencyguideDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencyguideDbType'
import type { agencyhostDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencyhostDbType'
import type { agencymedialibraryDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencymedialibraryDbType'
import type { agencyofferDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencyofferDbType'
import type { agencyreviewDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencyreviewDbType'
import type { agencytouristDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencytouristDbType'
import type { agencytransportDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencytransportDbType'
import type { agencytravelgroupDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencytravelgroupDbType'
import type { agencytripofferDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencytripofferDbType'
import type { agencyuserDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/agencyuserDbType'
import type { assocaccomodationDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/assocaccomodationDbType'
import type { assocdestinationDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/assocdestinationDbType'
import type { assoceventDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/assoceventDbType'
import type { assocguideDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/assocguideDbType'
import type { assochostDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/assochostDbType'
import type { assoctransportDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/assoctransportDbType'
import type { assoctravelgroupDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/assoctravelgroupDbType'
import type { auctioninfoDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/auctioninfoDbType'
import type { bidDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/bidDbType'
import type { bookingcalendarDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/bookingcalendarDbType'
import type { calendarentryDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/calendarentryDbType'
import type { commandlogentryDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/commandlogentryDbType'
import type { contactDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/contactDbType'
import type { date_DbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/date_DbType'
import type { destinationresourceDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/destinationresourceDbType'
import type { eventresourceDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/eventresourceDbType'
import type { geocodingDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/geocodingDbType'
import type { guidebidDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/guidebidDbType'
import type { guideDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/guideDbType'
import type { guidedealDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/guidedealDbType'
import type { guidefavoriteDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/guidefavoriteDbType'
import type { guideofferDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/guideofferDbType'
import type { guideresourceDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/guideresourceDbType'
import type { guidereviewDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/guidereviewDbType'
import type { hostresourceDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/hostresourceDbType'
import type { languagelevelDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/languagelevelDbType'
import type { mediadestinationresourceDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/mediadestinationresourceDbType'
import type { medialocationDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/medialocationDbType'
import type { presentationDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/presentationDbType'
import type { priceinfoDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/priceinfoDbType'
import type { publisherDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/publisherDbType'
import type { reviewDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/reviewDbType'
import type { roomcalendarDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/roomcalendarDbType'
import type { roomcalendarentryDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/roomcalendarentryDbType'
import type { roomlistDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/roomlistDbType'
import type { similarbytriptypeaccomodationDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/similarbytriptypeaccomodationDbType'
import type { similarbytriptypedestinationDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/similarbytriptypedestinationDbType'
import type { similarbytriptypeeventDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/similarbytriptypeeventDbType'
import type { similarbytriptypeguideDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/similarbytriptypeguideDbType'
import type { similarbytriptypehostDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/similarbytriptypehostDbType'
import type { similarbytriptypetransportDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/similarbytriptypetransportDbType'
import type { similarbytriptypetravelgroupDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/similarbytriptypetravelgroupDbType'
import type { timerangeDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/timerangeDbType'
import type { touristbidDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/touristbidDbType'
import type { touristDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/touristDbType'
import type { touristdealDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/touristdealDbType'
import type { touristfavoriteDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/touristfavoriteDbType'
import type { touristofferDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/touristofferDbType'
import type { touristresourceDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/touristresourceDbType'
import type { touristreviewDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/touristreviewDbType'
import type { transportresourceDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/transportresourceDbType'
import type { travelgroupresourceDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/travelgroupresourceDbType'
import type { tripofferresourceDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/tripofferresourceDbType'
import type { triptypeDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/triptypeDbType'
import type { usertableDbType }  from '../dexie/dbTypes/__generatedFromBackend__/types/usertableDbType'
import { AccomodationresourceDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AccomodationresourceDbClass'
import { AccountDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AccountDbClass'
import { AccountingDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AccountingDbClass'
import { AgencyaccomodationDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencyaccomodationDbClass'
import { AgencybidDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencybidDbClass'
import { AgencyDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencyDbClass'
import { AgencydealDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencydealDbClass'
import { AgencyeventDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencyeventDbClass'
import { AgencyfavoriteDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencyfavoriteDbClass'
import { AgencyguideDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencyguideDbClass'
import { AgencyhostDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencyhostDbClass'
import { AgencymedialibraryDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencymedialibraryDbClass'
import { AgencyofferDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencyofferDbClass'
import { AgencyreviewDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencyreviewDbClass'
import { AgencytouristDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencytouristDbClass'
import { AgencytransportDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencytransportDbClass'
import { AgencytravelgroupDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencytravelgroupDbClass'
import { AgencytripofferDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencytripofferDbClass'
import { AgencyuserDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AgencyuserDbClass'
import { AssocaccomodationDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AssocaccomodationDbClass'
import { AssocdestinationDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AssocdestinationDbClass'
import { AssoceventDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AssoceventDbClass'
import { AssocguideDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AssocguideDbClass'
import { AssochostDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AssochostDbClass'
import { AssoctransportDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AssoctransportDbClass'
import { AssoctravelgroupDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AssoctravelgroupDbClass'
import { AuctioninfoDbClass } from '../dexie/tableClasses/__generatedFromBackend__/AuctioninfoDbClass'
import { BidDbClass } from '../dexie/tableClasses/__generatedFromBackend__/BidDbClass'
import { BookingcalendarDbClass } from '../dexie/tableClasses/__generatedFromBackend__/BookingcalendarDbClass'
import { CalendarentryDbClass } from '../dexie/tableClasses/__generatedFromBackend__/CalendarentryDbClass'
import { CommandlogentryDbClass } from '../dexie/tableClasses/__generatedFromBackend__/CommandlogentryDbClass'
import { ContactDbClass } from '../dexie/tableClasses/__generatedFromBackend__/ContactDbClass'
import { Date_DbClass } from '../dexie/tableClasses/__generatedFromBackend__/Date_DbClass'
import { DestinationresourceDbClass } from '../dexie/tableClasses/__generatedFromBackend__/DestinationresourceDbClass'
import { EventresourceDbClass } from '../dexie/tableClasses/__generatedFromBackend__/EventresourceDbClass'
import { GeocodingDbClass } from '../dexie/tableClasses/__generatedFromBackend__/GeocodingDbClass'
import { GuidebidDbClass } from '../dexie/tableClasses/__generatedFromBackend__/GuidebidDbClass'
import { GuideDbClass } from '../dexie/tableClasses/__generatedFromBackend__/GuideDbClass'
import { GuidedealDbClass } from '../dexie/tableClasses/__generatedFromBackend__/GuidedealDbClass'
import { GuidefavoriteDbClass } from '../dexie/tableClasses/__generatedFromBackend__/GuidefavoriteDbClass'
import { GuideofferDbClass } from '../dexie/tableClasses/__generatedFromBackend__/GuideofferDbClass'
import { GuideresourceDbClass } from '../dexie/tableClasses/__generatedFromBackend__/GuideresourceDbClass'
import { GuidereviewDbClass } from '../dexie/tableClasses/__generatedFromBackend__/GuidereviewDbClass'
import { HostresourceDbClass } from '../dexie/tableClasses/__generatedFromBackend__/HostresourceDbClass'
import { LanguagelevelDbClass } from '../dexie/tableClasses/__generatedFromBackend__/LanguagelevelDbClass'
import { MediadestinationresourceDbClass } from '../dexie/tableClasses/__generatedFromBackend__/MediadestinationresourceDbClass'
import { MedialocationDbClass } from '../dexie/tableClasses/__generatedFromBackend__/MedialocationDbClass'
import { PresentationDbClass } from '../dexie/tableClasses/__generatedFromBackend__/PresentationDbClass'
import { PriceinfoDbClass } from '../dexie/tableClasses/__generatedFromBackend__/PriceinfoDbClass'
import { PublisherDbClass } from '../dexie/tableClasses/__generatedFromBackend__/PublisherDbClass'
import { ReviewDbClass } from '../dexie/tableClasses/__generatedFromBackend__/ReviewDbClass'
import { RoomcalendarDbClass } from '../dexie/tableClasses/__generatedFromBackend__/RoomcalendarDbClass'
import { RoomcalendarentryDbClass } from '../dexie/tableClasses/__generatedFromBackend__/RoomcalendarentryDbClass'
import { RoomlistDbClass } from '../dexie/tableClasses/__generatedFromBackend__/RoomlistDbClass'
import { SimilarbytriptypeaccomodationDbClass } from '../dexie/tableClasses/__generatedFromBackend__/SimilarbytriptypeaccomodationDbClass'
import { SimilarbytriptypedestinationDbClass } from '../dexie/tableClasses/__generatedFromBackend__/SimilarbytriptypedestinationDbClass'
import { SimilarbytriptypeeventDbClass } from '../dexie/tableClasses/__generatedFromBackend__/SimilarbytriptypeeventDbClass'
import { SimilarbytriptypeguideDbClass } from '../dexie/tableClasses/__generatedFromBackend__/SimilarbytriptypeguideDbClass'
import { SimilarbytriptypehostDbClass } from '../dexie/tableClasses/__generatedFromBackend__/SimilarbytriptypehostDbClass'
import { SimilarbytriptypetransportDbClass } from '../dexie/tableClasses/__generatedFromBackend__/SimilarbytriptypetransportDbClass'
import { SimilarbytriptypetravelgroupDbClass } from '../dexie/tableClasses/__generatedFromBackend__/SimilarbytriptypetravelgroupDbClass'
import { TimerangeDbClass } from '../dexie/tableClasses/__generatedFromBackend__/TimerangeDbClass'
import { TouristbidDbClass } from '../dexie/tableClasses/__generatedFromBackend__/TouristbidDbClass'
import { TouristDbClass } from '../dexie/tableClasses/__generatedFromBackend__/TouristDbClass'
import { TouristdealDbClass } from '../dexie/tableClasses/__generatedFromBackend__/TouristdealDbClass'
import { TouristfavoriteDbClass } from '../dexie/tableClasses/__generatedFromBackend__/TouristfavoriteDbClass'
import { TouristofferDbClass } from '../dexie/tableClasses/__generatedFromBackend__/TouristofferDbClass'
import { TouristresourceDbClass } from '../dexie/tableClasses/__generatedFromBackend__/TouristresourceDbClass'
import { TouristreviewDbClass } from '../dexie/tableClasses/__generatedFromBackend__/TouristreviewDbClass'
import { TransportresourceDbClass } from '../dexie/tableClasses/__generatedFromBackend__/TransportresourceDbClass'
import { TravelgroupresourceDbClass } from '../dexie/tableClasses/__generatedFromBackend__/TravelgroupresourceDbClass'
import { TripofferresourceDbClass } from '../dexie/tableClasses/__generatedFromBackend__/TripofferresourceDbClass'
import { TriptypeDbClass } from '../dexie/tableClasses/__generatedFromBackend__/TriptypeDbClass'
import { UsertableDbClass } from '../dexie/tableClasses/__generatedFromBackend__/UsertableDbClass'
 



class clientDB extends Dexie {
    public triptype?: Dexie.Table<triptypeDbType, number>;
public usertable?: Dexie.Table<usertableDbType, number>;
public account?: Dexie.Table<accountDbType, number>;
public contact?: Dexie.Table<contactDbType, number>;
public commandlogentry?: Dexie.Table<commandlogentryDbType, number>;
public publisher?: Dexie.Table<publisherDbType, number>;
public geocoding?: Dexie.Table<geocodingDbType, number>;
public accounting?: Dexie.Table<accountingDbType, number>;
public presentation?: Dexie.Table<presentationDbType, number>;
public bid?: Dexie.Table<bidDbType, number>;
public auctioninfo?: Dexie.Table<auctioninfoDbType, number>;
public priceinfo?: Dexie.Table<priceinfoDbType, number>;
public calendarentry?: Dexie.Table<calendarentryDbType, number>;
public timerange?: Dexie.Table<timerangeDbType, number>;
public bookingcalendar?: Dexie.Table<bookingcalendarDbType, number>;
public accomodationresource?: Dexie.Table<accomodationresourceDbType, number>;
public destinationresource?: Dexie.Table<destinationresourceDbType, number>;
public eventresource?: Dexie.Table<eventresourceDbType, number>;
public tripofferresource?: Dexie.Table<tripofferresourceDbType, number>;
public roomcalendarentry?: Dexie.Table<roomcalendarentryDbType, number>;
public roomcalendar?: Dexie.Table<roomcalendarDbType, number>;
public roomlist?: Dexie.Table<roomlistDbType, number>;
public transportresource?: Dexie.Table<transportresourceDbType, number>;
public review?: Dexie.Table<reviewDbType, number>;
public hostresource?: Dexie.Table<hostresourceDbType, number>;
public tourist?: Dexie.Table<touristDbType, number>;
public languagelevel?: Dexie.Table<languagelevelDbType, number>;
public guideresource?: Dexie.Table<guideresourceDbType, number>;
public guide?: Dexie.Table<guideDbType, number>;
public agency?: Dexie.Table<agencyDbType, number>;
public medialocation?: Dexie.Table<medialocationDbType, number>;
public touristresource?: Dexie.Table<touristresourceDbType, number>;
public travelgroupresource?: Dexie.Table<travelgroupresourceDbType, number>;
public agencyaccomodation?: Dexie.Table<agencyaccomodationDbType, number>;
public agencyevent?: Dexie.Table<agencyeventDbType, number>;
public agencyguide?: Dexie.Table<agencyguideDbType, number>;
public agencyhost?: Dexie.Table<agencyhostDbType, number>;
public agencytourist?: Dexie.Table<agencytouristDbType, number>;
public agencytransport?: Dexie.Table<agencytransportDbType, number>;
public agencytravelgroup?: Dexie.Table<agencytravelgroupDbType, number>;
public agencytripoffer?: Dexie.Table<agencytripofferDbType, number>;
public agencyuser?: Dexie.Table<agencyuserDbType, number>;
public mediadestinationresource?: Dexie.Table<mediadestinationresourceDbType, number>;
public agencyreview?: Dexie.Table<agencyreviewDbType, number>;
public guidereview?: Dexie.Table<guidereviewDbType, number>;
public agencybid?: Dexie.Table<agencybidDbType, number>;
public agencymedialibrary?: Dexie.Table<agencymedialibraryDbType, number>;
public agencydeal?: Dexie.Table<agencydealDbType, number>;
public agencyfavorite?: Dexie.Table<agencyfavoriteDbType, number>;
public agencyoffer?: Dexie.Table<agencyofferDbType, number>;
public date_?: Dexie.Table<date_DbType, number>;
public guidebid?: Dexie.Table<guidebidDbType, number>;
public guidedeal?: Dexie.Table<guidedealDbType, number>;
public guidefavorite?: Dexie.Table<guidefavoriteDbType, number>;
public guideoffer?: Dexie.Table<guideofferDbType, number>;
public touristbid?: Dexie.Table<touristbidDbType, number>;
public touristdeal?: Dexie.Table<touristdealDbType, number>;
public touristfavorite?: Dexie.Table<touristfavoriteDbType, number>;
public touristoffer?: Dexie.Table<touristofferDbType, number>;
public touristreview?: Dexie.Table<touristreviewDbType, number>;
public similarbytriptypeaccomodation?: Dexie.Table<similarbytriptypeaccomodationDbType, number>;
public similarbytriptypedestination?: Dexie.Table<similarbytriptypedestinationDbType, number>;
public similarbytriptypeevent?: Dexie.Table<similarbytriptypeeventDbType, number>;
public similarbytriptypeguide?: Dexie.Table<similarbytriptypeguideDbType, number>;
public similarbytriptypehost?: Dexie.Table<similarbytriptypehostDbType, number>;
public similarbytriptypetransport?: Dexie.Table<similarbytriptypetransportDbType, number>;
public similarbytriptypetravelgroup?: Dexie.Table<similarbytriptypetravelgroupDbType, number>;
public assocaccomodation?: Dexie.Table<assocaccomodationDbType, number>;
public assochost?: Dexie.Table<assochostDbType, number>;
public assocguide?: Dexie.Table<assocguideDbType, number>;
public assoctransport?: Dexie.Table<assoctransportDbType, number>;
public assocevent?: Dexie.Table<assoceventDbType, number>;
public assocdestination?: Dexie.Table<assocdestinationDbType, number>;
public assoctravelgroup?: Dexie.Table<assoctravelgroupDbType, number>;



constructor() {
    super('clientDB')
    this.version(1).stores({
        triptype: 'id, tripTypeName, atAgency, lastModified, timeCreated',
 usertable: 'id, firstName, lastName, userEmail, atAgency, isAdmin, atGuide, atTourist, timeCreated, isActive',
 account: 'id, emailHash, passwordHash, sessionId',
 contact: 'id, firstName, lastName, associatedCompany, street, city, postCode, country, telephone, email, isCompany, createdById, belongsToType, belongsToId',
 commandlogentry: 'id, atPublisher, belongsToType, resourceId, logcommand, timeCommand',
 publisher: 'id, name, createdById, belongsToId, belongsToType, canReview, canPublish, isRomanian, isActive, commandLogEntryId, timeCreated',
 geocoding: 'id, locationLat, locationLng, locationType, placesId, formattedAdress, type, viewportNorthEastLat, viewportNorthEastLng, viewportSouthWestLat, viewportSouthWestLng, createdById, publishedById, lastModified, timeCreated',
 accounting: 'id, publisherId, paymentHistory, abonamentActive, lastPayment, lastPaymentAmount, abonamentExpires, onYearlyPayment, onFreePeriod, freePeriodExpires, isRomanian, isActive',
 presentation: 'id, headline, publisherId, createdById, resourceType, resourceTypeId, isActive, lastModified',
 bid: 'id, publisherId, createdById, bidAmount, isActive, timeCreated',
 auctioninfo: 'id, publishedById, createdById, advertisedPrice, currentHighBid, bidId, acceptsOffers, auctionExpiry, isAuction, isActive, atResourceType, belongsToId',
 priceinfo: 'id, publisherId, createdById, advertisedPrice, currentHighBId, bidId, acceptsOffers, auctionExpiry, isAuction, isActive, atResourceType, belongsToId, lastModified',
 calendarentry: 'id, fromTimestamp, toTimestamp, resourceType, comment, timeCreated',
 timerange: 'id, fromTimestamp, toTimestamp, timeCreated',
 bookingcalendar: 'id, belongsToId, belongsToType, createdById, isActive, fromTimestamp, toTimestamp, resourceType, comment',
 accomodationresource: 'id, accomodationName, contactId, addressId, locatedIn, locationCalendarId, tripTypeName, publisherId, createdById, isActive, ownedByAt, presentationId, atAgency, atGuide, isPublic, lastModified',
 destinationresource: 'id, destinationName, publishedById, createdById, area, judet, tripTypeName, isActive, priceInfoId, activeAtPeriodsId, presentationId, atAgency, geoCodingId, isPublic, lastModified, lastModifiedBy',
 eventresource: 'id, eventName, agencyName, contactId, publisherId, createdById, locatedIn, locationAddressId, tripTypeName, activeAtPeriodsId, ownedByAt, atAgency, atGuide, presentationId, isActive, isPublic, lastModified',
 tripofferresource: 'id, tripOfferName, publisherId, createdById, availableAtCalendarId, guideResponsibleId, guideSecondaryId, atAgency, priceInfoId, destinationId, isSigned, atGuide, isActive, isPublic, lastModified',
 roomcalendarentry: 'id, atRoomCalendar, fromDate, toDate, comment, timeCreated',
 roomcalendar: 'id, publisherId, createdById, isActive, calendarentryId, timeCreated',
 roomlist: 'id, atAccomodation, roomNames, roomNumPeople, roomCalendarId, roomPrices',
 transportresource: 'id, transportName, contactId, publisherId, createdById, locatedIn, addressInfoId, atAgency, atGuide, ownedByAt, presentationId, isBus, numberOfPlaces, bookingCalendarId, isActive, isPublic, lastModified',
 review: 'id, publisherId, createdById, halfStars, reviewText, resourceType, resourceId, publisherTarget, startDateTripEvent, byRomanian, isActive',
 hostresource: 'id, hostResourceName, contactId, publisherId, createdById, withAccomodation, atAccomodation, atAgency, atGuide, tripTypeName, locatedIn, addressInfoId, ownedByAt, presentationId, bookingCalendarId, isRomanian, isActive, isPublic, lastModified',
 tourist: 'id, touristFirstName, touristLastName, contactId, publisherId, createdById, nativeLanguage, alternativeLanguage, touristOfferId, touristFavoriteId, touristBidId, touristDealId, guideReviewInIdPool, agencyReviewInIdPool, guideReviewOutIdPool, agencyReviewOutIdPool, timeCreated, atTravelGroup, isActive',
 languagelevel: 'id, langauges, langaugesSkill, isActive, createdById, publisherId',
 guideresource: 'id, guideResourceName, publisherId, createdById, atGuide, timeRangeId, priceInfoId, atAgency, multipleTimeRange, bookingCalendarId, isRomanian, isActive, isPublic, lastModified',
 guide: 'id, name, contactId, hasGuideLicence, guideLicenceUrl, publisherId, createdById, guideFirstName, guideLastName, hasOwnCompany, atAgency, languageLevelId, areas, tripTypeName, guideOfferId, guideBidId, guideFavoriteId, guideDealId, agencyReviewInIdPool, touristReviewInIdPool, agencyReviewOutIdPool, touristReviewOutIdPool, bookingCalendarId, hostIdPool, eventIdPool, accomodationIdPool, transportIdPool, lastModified, timeCreated, isActive',
 agency: 'id, name, contactId, activeInsurance, insuranceUrl, insuranceExpery, publisherId, createdById, isActive, isPublic, agencyBidId, agencyFavoriteId, agencyOfferId, agencyDealId, trustedPartnerIdPool, extendedNetworkIdPool, guideReviewInIdPool, agencyReviewInIdPool, touristReviewInIdPool, guideReviewOutIdPool, agencyReviewOutIdPool, touristReviewOutIdPool, agencyMediaLibraryId, isRomanian, bookingCalendarId, specializedAgency, lastModified',
 medialocation: 'id, mediaLocationPlacement, atAgency, atResource, uploadLocationOriginal, uploadLocationThumbnail, uploadLocationMobile, uploadLocationTablet, uploadLocationDesktop, uploadLocation2K, signedUrlThumbnail, signedUrlMobile, signedUrlTablet, signedUrlDesktop, signedUrl2K, signedUrlsUpdate, timeCreated',
 touristresource: 'id, name, contactId, publisherId, createdById, atTravelGroup, atAgency, atGuide, isSigned, priceInfoId, travellingCalendarId, isRomanian, isActive, isPublic, lastModified',
 travelgroupresource: 'id, travelGroupName, contactId, publisherId, createdById, numberOfAdults, numberOfChildren, customInfo, bookingCalendarId, atAgency, atGuide, language, atTripOfferResource, atTouristResource, isRomanian, isActive, lastModified',
 agencyaccomodation: 'agencyId, accomodationId, lastModified, urlExperyAt, presentationPlacements, agencyBucketUrls, timeCreated',
 agencyevent: 'agencyId, eventId, timeCreated',
 agencyguide: 'agencyId, guideId, timeCreated',
 agencyhost: 'agencyId, hostId, timeCreated',
 agencytourist: 'agencyId, touristId, timeCreated',
 agencytransport: 'agencyId, transportId, timeCreated',
 agencytravelgroup: 'agencyId, travelGroupId, timeCreated',
 agencytripoffer: 'agencyId, tripOfferId, timeCreated',
 agencyuser: 'agencyId, userId, timeCreated',
 mediadestinationresource: 'id, atAgency, atDestination, lastModified, lastModifiedBy, mainImage, mainImageSignedUrl, guideImage, guideSignedUrl, mapImage, mapImageSignedUrl, thumbnailImage, thumbnailImageSignedUrl, imageGallery1, imageGallery1SignedUrl, imageGallery2, imageGallery2SignedUrl, imageGallery3, imageGallery3SignedUrl, imageGallery4, imageGallery4SignedUrl, imageGallery5, imageGallery5SignedUrl, imageGallery6, imageGallery6SignedUrl, imageGallery7, imageGallery7SignedUrl, imageGallery8, imageGallery8SignedUrl, imageGallery9, imageGallery9SignedUrl, imageGallery10, imageGallery10SignedUrl, signedUrlsUpdate',
 agencyreview: 'id, publisherId, createdById, isActive, halfStars, reviewText, agencyIdTarget, startDateTripEvent, byRomanian',
 guidereview: 'id, publisherId, createdById, isActive, halfStars, reviewText, guideIdTarget, startDateTripEvent, byRomanian',
 agencybid: 'id, agencyId',
 agencymedialibrary: 'id, atAgency, uploadLocations, locationSignedUrls, signedUrlsUpdate, lastModifiedBy, timeCreated',
 agencydeal: 'id, tripOfferResourceIdPool, guideResourceIdPool, touristResouceIdPool, eventResourceIdPool, transportationResourceIdPool, accomodationResourceIdPool',
 agencyfavorite: 'resourceId, resourceType, atAgency',
 agencyoffer: 'id, tripsOfferesourceIdPool',
 date_: 'useTimeStamp, timeStamp, year, month, day, allDayEvent, hour, minute, timeCreated',
 guidebid: 'id',
 guidedeal: 'id, tripsOfferResourceIdPool, agenciesRomanianIdPool, agenciesAbroadIdPool',
 guidefavorite: 'id, agenciesRomanianIdPool, agenciesAbroadIdPool',
 guideoffer: 'id, guideResourceIdPool, transportResourceIdPool, hostResourceIdPool',
 touristbid: 'id, tripOfferResourceIdPool, eventResourceIdPool, transportationResourceIdPool, accomodationResourceIdPool',
 touristdeal: 'id, tripsOfferResourceIdPool, guideOfferResourceIdPool, agenciesRomanianIdPool, agenciesAbroadIdPool, eventResourceIdPool, transportationResourceIdPool, accomodationResourceIdPool',
 touristfavorite: 'id, agenciesRomanianIdPool, agenciesAbroadIdPool, travelGroupResourceIdPool, tripsOfferResourceIdPool, guideResourceIdPool, eventResourceIdPool, transportationResourceIdPool, accomodationResourceIdPool',
 touristoffer: 'id',
 touristreview: 'id, publisherId, createdById, isActive, halfStars, reviewText, touristIdTarget, startDateTripEvent, byRomanian',
 similarbytriptypeaccomodation: 'accomodationIds, tripTypeName, atAgency, timeCreated',
 similarbytriptypedestination: 'destinationIds, tripTypeName, atAgency, timeCreated',
 similarbytriptypeevent: 'eventIds, tripTypeName, atAgency, timeCreated',
 similarbytriptypeguide: 'guideIds, tripTypeName, atAgency, timeCreated',
 similarbytriptypehost: 'hostIds, tripTypeName, atAgency, timeCreated',
 similarbytriptypetransport: 'transportIds, tripTypeName, atAgency, timeCreated',
 similarbytriptypetravelgroup: 'travelGroupIds, tripTypeName, atAgency, timeCreated',
 assocaccomodation: 'assocAccomodationId, accomodationId, atAgency, timeCreated',
 assochost: 'assocHostId, hostId, atAgency, timeCreated',
 assocguide: 'assocGuideId, guideId, atAgency, timeCreated',
 assoctransport: 'assocTransportId, transportId, atAgency',
 assocevent: 'assocEventId, eventId, atAgency, timeCreated',
 assocdestination: 'assocDestinationId, destinationId, atAgency, timeCreated',
 assoctravelgroup: 'assocTravelGroupId, travelGroupId, atAgency, timeCreated'

    })
    this.triptype = this.table("triptype")
this.usertable = this.table("usertable")
this.account = this.table("account")
this.contact = this.table("contact")
this.commandlogentry = this.table("commandlogentry")
this.publisher = this.table("publisher")
this.geocoding = this.table("geocoding")
this.accounting = this.table("accounting")
this.presentation = this.table("presentation")
this.bid = this.table("bid")
this.auctioninfo = this.table("auctioninfo")
this.priceinfo = this.table("priceinfo")
this.calendarentry = this.table("calendarentry")
this.timerange = this.table("timerange")
this.bookingcalendar = this.table("bookingcalendar")
this.accomodationresource = this.table("accomodationresource")
this.destinationresource = this.table("destinationresource")
this.eventresource = this.table("eventresource")
this.tripofferresource = this.table("tripofferresource")
this.roomcalendarentry = this.table("roomcalendarentry")
this.roomcalendar = this.table("roomcalendar")
this.roomlist = this.table("roomlist")
this.transportresource = this.table("transportresource")
this.review = this.table("review")
this.hostresource = this.table("hostresource")
this.tourist = this.table("tourist")
this.languagelevel = this.table("languagelevel")
this.guideresource = this.table("guideresource")
this.guide = this.table("guide")
this.agency = this.table("agency")
this.medialocation = this.table("medialocation")
this.touristresource = this.table("touristresource")
this.travelgroupresource = this.table("travelgroupresource")
this.agencyaccomodation = this.table("agencyaccomodation")
this.agencyevent = this.table("agencyevent")
this.agencyguide = this.table("agencyguide")
this.agencyhost = this.table("agencyhost")
this.agencytourist = this.table("agencytourist")
this.agencytransport = this.table("agencytransport")
this.agencytravelgroup = this.table("agencytravelgroup")
this.agencytripoffer = this.table("agencytripoffer")
this.agencyuser = this.table("agencyuser")
this.mediadestinationresource = this.table("mediadestinationresource")
this.agencyreview = this.table("agencyreview")
this.guidereview = this.table("guidereview")
this.agencybid = this.table("agencybid")
this.agencymedialibrary = this.table("agencymedialibrary")
this.agencydeal = this.table("agencydeal")
this.agencyfavorite = this.table("agencyfavorite")
this.agencyoffer = this.table("agencyoffer")
this.date_ = this.table("date_")
this.guidebid = this.table("guidebid")
this.guidedeal = this.table("guidedeal")
this.guidefavorite = this.table("guidefavorite")
this.guideoffer = this.table("guideoffer")
this.touristbid = this.table("touristbid")
this.touristdeal = this.table("touristdeal")
this.touristfavorite = this.table("touristfavorite")
this.touristoffer = this.table("touristoffer")
this.touristreview = this.table("touristreview")
this.similarbytriptypeaccomodation = this.table("similarbytriptypeaccomodation")
this.similarbytriptypedestination = this.table("similarbytriptypedestination")
this.similarbytriptypeevent = this.table("similarbytriptypeevent")
this.similarbytriptypeguide = this.table("similarbytriptypeguide")
this.similarbytriptypehost = this.table("similarbytriptypehost")
this.similarbytriptypetransport = this.table("similarbytriptypetransport")
this.similarbytriptypetravelgroup = this.table("similarbytriptypetravelgroup")
this.assocaccomodation = this.table("assocaccomodation")
this.assochost = this.table("assochost")
this.assocguide = this.table("assocguide")
this.assoctransport = this.table("assoctransport")
this.assocevent = this.table("assocevent")
this.assocdestination = this.table("assocdestination")
this.assoctravelgroup = this.table("assoctravelgroup")

    this.triptype.mapToClass(TriptypeDbClass)
this.usertable.mapToClass(UsertableDbClass)
this.account.mapToClass(AccountDbClass)
this.contact.mapToClass(ContactDbClass)
this.commandlogentry.mapToClass(CommandlogentryDbClass)
this.publisher.mapToClass(PublisherDbClass)
this.geocoding.mapToClass(GeocodingDbClass)
this.accounting.mapToClass(AccountingDbClass)
this.presentation.mapToClass(PresentationDbClass)
this.bid.mapToClass(BidDbClass)
this.auctioninfo.mapToClass(AuctioninfoDbClass)
this.priceinfo.mapToClass(PriceinfoDbClass)
this.calendarentry.mapToClass(CalendarentryDbClass)
this.timerange.mapToClass(TimerangeDbClass)
this.bookingcalendar.mapToClass(BookingcalendarDbClass)
this.accomodationresource.mapToClass(AccomodationresourceDbClass)
this.destinationresource.mapToClass(DestinationresourceDbClass)
this.eventresource.mapToClass(EventresourceDbClass)
this.tripofferresource.mapToClass(TripofferresourceDbClass)
this.roomcalendarentry.mapToClass(RoomcalendarentryDbClass)
this.roomcalendar.mapToClass(RoomcalendarDbClass)
this.roomlist.mapToClass(RoomlistDbClass)
this.transportresource.mapToClass(TransportresourceDbClass)
this.review.mapToClass(ReviewDbClass)
this.hostresource.mapToClass(HostresourceDbClass)
this.tourist.mapToClass(TouristDbClass)
this.languagelevel.mapToClass(LanguagelevelDbClass)
this.guideresource.mapToClass(GuideresourceDbClass)
this.guide.mapToClass(GuideDbClass)
this.agency.mapToClass(AgencyDbClass)
this.medialocation.mapToClass(MedialocationDbClass)
this.touristresource.mapToClass(TouristresourceDbClass)
this.travelgroupresource.mapToClass(TravelgroupresourceDbClass)
this.agencyaccomodation.mapToClass(AgencyaccomodationDbClass)
this.agencyevent.mapToClass(AgencyeventDbClass)
this.agencyguide.mapToClass(AgencyguideDbClass)
this.agencyhost.mapToClass(AgencyhostDbClass)
this.agencytourist.mapToClass(AgencytouristDbClass)
this.agencytransport.mapToClass(AgencytransportDbClass)
this.agencytravelgroup.mapToClass(AgencytravelgroupDbClass)
this.agencytripoffer.mapToClass(AgencytripofferDbClass)
this.agencyuser.mapToClass(AgencyuserDbClass)
this.mediadestinationresource.mapToClass(MediadestinationresourceDbClass)
this.agencyreview.mapToClass(AgencyreviewDbClass)
this.guidereview.mapToClass(GuidereviewDbClass)
this.agencybid.mapToClass(AgencybidDbClass)
this.agencymedialibrary.mapToClass(AgencymedialibraryDbClass)
this.agencydeal.mapToClass(AgencydealDbClass)
this.agencyfavorite.mapToClass(AgencyfavoriteDbClass)
this.agencyoffer.mapToClass(AgencyofferDbClass)
this.date_.mapToClass(Date_DbClass)
this.guidebid.mapToClass(GuidebidDbClass)
this.guidedeal.mapToClass(GuidedealDbClass)
this.guidefavorite.mapToClass(GuidefavoriteDbClass)
this.guideoffer.mapToClass(GuideofferDbClass)
this.touristbid.mapToClass(TouristbidDbClass)
this.touristdeal.mapToClass(TouristdealDbClass)
this.touristfavorite.mapToClass(TouristfavoriteDbClass)
this.touristoffer.mapToClass(TouristofferDbClass)
this.touristreview.mapToClass(TouristreviewDbClass)
this.similarbytriptypeaccomodation.mapToClass(SimilarbytriptypeaccomodationDbClass)
this.similarbytriptypedestination.mapToClass(SimilarbytriptypedestinationDbClass)
this.similarbytriptypeevent.mapToClass(SimilarbytriptypeeventDbClass)
this.similarbytriptypeguide.mapToClass(SimilarbytriptypeguideDbClass)
this.similarbytriptypehost.mapToClass(SimilarbytriptypehostDbClass)
this.similarbytriptypetransport.mapToClass(SimilarbytriptypetransportDbClass)
this.similarbytriptypetravelgroup.mapToClass(SimilarbytriptypetravelgroupDbClass)
this.assocaccomodation.mapToClass(AssocaccomodationDbClass)
this.assochost.mapToClass(AssochostDbClass)
this.assocguide.mapToClass(AssocguideDbClass)
this.assoctransport.mapToClass(AssoctransportDbClass)
this.assocevent.mapToClass(AssoceventDbClass)
this.assocdestination.mapToClass(AssocdestinationDbClass)
this.assoctravelgroup.mapToClass(AssoctravelgroupDbClass)

 }
}

export default clientDB