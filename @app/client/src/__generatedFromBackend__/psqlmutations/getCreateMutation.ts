import { DbTables } from "../../functions/__generatedFromBackend__/tableEnums";
import accomodationresource from "./psqlCreateMutation/accomodationresource";
import account from "./psqlCreateMutation/account";
import accounting from "./psqlCreateMutation/accounting";
import agency from "./psqlCreateMutation/agency";
import agencyaccomodation from "./psqlCreateMutation/agencyaccomodation";
import agencybid from "./psqlCreateMutation/agencybid";
import agencydeal from "./psqlCreateMutation/agencydeal";
import agencyevent from "./psqlCreateMutation/agencyevent";
import agencyfavorite from "./psqlCreateMutation/agencyfavorite";
import agencyguide from "./psqlCreateMutation/agencyguide";
import agencyhost from "./psqlCreateMutation/agencyhost";
import agencymedialibrary from "./psqlCreateMutation/agencymedialibrary";
import agencyoffer from "./psqlCreateMutation/agencyoffer";
import agencyreview from "./psqlCreateMutation/agencyreview";
import agencytourist from "./psqlCreateMutation/agencytourist";
import agencytransport from "./psqlCreateMutation/agencytransport";
import agencytravelgroup from "./psqlCreateMutation/agencytravelgroup";
import agencytripoffer from "./psqlCreateMutation/agencytripoffer";
import agencyuser from "./psqlCreateMutation/agencyuser";
import assocaccomodation from "./psqlCreateMutation/assocaccomodation";
import assocdestination from "./psqlCreateMutation/assocdestination";
import assocevent from "./psqlCreateMutation/assocevent";
import assocguide from "./psqlCreateMutation/assocguide";
import assochost from "./psqlCreateMutation/assochost";
import assoctransport from "./psqlCreateMutation/assoctransport";
import assoctravelgroup from "./psqlCreateMutation/assoctravelgroup";
import auctioninfo from "./psqlCreateMutation/auctioninfo";
import bid from "./psqlCreateMutation/bid";
import bookingcalendar from "./psqlCreateMutation/bookingcalendar";
import calendarentry from "./psqlCreateMutation/calendarentry";
import commandlogentry from "./psqlCreateMutation/commandlogentry";
import contact from "./psqlCreateMutation/contact";
import date_ from "./psqlCreateMutation/date_";
import destinationresource from "./psqlCreateMutation/destinationresource";
import eventresource from "./psqlCreateMutation/eventresource";
import geocoding from "./psqlCreateMutation/geocoding";
import guide from "./psqlCreateMutation/guide";
import guidebid from "./psqlCreateMutation/guidebid";
import guidedeal from "./psqlCreateMutation/guidedeal";
import guidefavorite from "./psqlCreateMutation/guidefavorite";
import guideoffer from "./psqlCreateMutation/guideoffer";
import guideresource from "./psqlCreateMutation/guideresource";
import guidereview from "./psqlCreateMutation/guidereview";
import hostresource from "./psqlCreateMutation/hostresource";
import languagelevel from "./psqlCreateMutation/languagelevel";
import mediadestinationresource from "./psqlCreateMutation/mediadestinationresource";
import medialocation from "./psqlCreateMutation/medialocation";
import presentation from "./psqlCreateMutation/presentation";
import priceinfo from "./psqlCreateMutation/priceinfo";
import publisher from "./psqlCreateMutation/publisher";
import review from "./psqlCreateMutation/review";
import roomcalendar from "./psqlCreateMutation/roomcalendar";
import roomcalendarentry from "./psqlCreateMutation/roomcalendarentry";
import roomlist from "./psqlCreateMutation/roomlist";
import similarbytriptypeaccomodation from "./psqlCreateMutation/similarbytriptypeaccomodation";
import similarbytriptypedestination from "./psqlCreateMutation/similarbytriptypedestination";
import similarbytriptypeevent from "./psqlCreateMutation/similarbytriptypeevent";
import similarbytriptypeguide from "./psqlCreateMutation/similarbytriptypeguide";
import similarbytriptypehost from "./psqlCreateMutation/similarbytriptypehost";
import similarbytriptypetransport from "./psqlCreateMutation/similarbytriptypetransport";
import similarbytriptypetravelgroup from "./psqlCreateMutation/similarbytriptypetravelgroup";
import timerange from "./psqlCreateMutation/timerange";
import tourist from "./psqlCreateMutation/tourist";
import touristbid from "./psqlCreateMutation/touristbid";
import touristdeal from "./psqlCreateMutation/touristdeal";
import touristfavorite from "./psqlCreateMutation/touristfavorite";
import touristoffer from "./psqlCreateMutation/touristoffer";
import touristresource from "./psqlCreateMutation/touristresource";
import touristreview from "./psqlCreateMutation/touristreview";
import transportresource from "./psqlCreateMutation/transportresource";
import travelgroupresource from "./psqlCreateMutation/travelgroupresource";
import tripofferresource from "./psqlCreateMutation/tripofferresource";
import triptype from "./psqlCreateMutation/triptype";
import type { accomodationresourcecreateMutationType } from "./psqlCreateMutation/types/accomodationresource";
import type { accountcreateMutationType } from "./psqlCreateMutation/types/account";
import type { accountingcreateMutationType } from "./psqlCreateMutation/types/accounting";
import type { agencycreateMutationType } from "./psqlCreateMutation/types/agency";
import type { agencyaccomodationcreateMutationType } from "./psqlCreateMutation/types/agencyaccomodation";
import type { agencybidcreateMutationType } from "./psqlCreateMutation/types/agencybid";
import type { agencydealcreateMutationType } from "./psqlCreateMutation/types/agencydeal";
import type { agencyeventcreateMutationType } from "./psqlCreateMutation/types/agencyevent";
import type { agencyfavoritecreateMutationType } from "./psqlCreateMutation/types/agencyfavorite";
import type { agencyguidecreateMutationType } from "./psqlCreateMutation/types/agencyguide";
import type { agencyhostcreateMutationType } from "./psqlCreateMutation/types/agencyhost";
import type { agencymedialibrarycreateMutationType } from "./psqlCreateMutation/types/agencymedialibrary";
import type { agencyoffercreateMutationType } from "./psqlCreateMutation/types/agencyoffer";
import type { agencyreviewcreateMutationType } from "./psqlCreateMutation/types/agencyreview";
import type { agencytouristcreateMutationType } from "./psqlCreateMutation/types/agencytourist";
import type { agencytransportcreateMutationType } from "./psqlCreateMutation/types/agencytransport";
import type { agencytravelgroupcreateMutationType } from "./psqlCreateMutation/types/agencytravelgroup";
import type { agencytripoffercreateMutationType } from "./psqlCreateMutation/types/agencytripoffer";
import type { agencyusercreateMutationType } from "./psqlCreateMutation/types/agencyuser";
import type { assocaccomodationcreateMutationType } from "./psqlCreateMutation/types/assocaccomodation";
import type { assocdestinationcreateMutationType } from "./psqlCreateMutation/types/assocdestination";
import type { assoceventcreateMutationType } from "./psqlCreateMutation/types/assocevent";
import type { assocguidecreateMutationType } from "./psqlCreateMutation/types/assocguide";
import type { assochostcreateMutationType } from "./psqlCreateMutation/types/assochost";
import type { assoctransportcreateMutationType } from "./psqlCreateMutation/types/assoctransport";
import type { assoctravelgroupcreateMutationType } from "./psqlCreateMutation/types/assoctravelgroup";
import type { auctioninfocreateMutationType } from "./psqlCreateMutation/types/auctioninfo";
import type { bidcreateMutationType } from "./psqlCreateMutation/types/bid";
import type { bookingcalendarcreateMutationType } from "./psqlCreateMutation/types/bookingcalendar";
import type { calendarentrycreateMutationType } from "./psqlCreateMutation/types/calendarentry";
import type { commandlogentrycreateMutationType } from "./psqlCreateMutation/types/commandlogentry";
import type { contactcreateMutationType } from "./psqlCreateMutation/types/contact";
import type { date_createMutationType } from "./psqlCreateMutation/types/date_";
import type { destinationresourcecreateMutationType } from "./psqlCreateMutation/types/destinationresource";
import type { eventresourcecreateMutationType } from "./psqlCreateMutation/types/eventresource";
import type { geocodingcreateMutationType } from "./psqlCreateMutation/types/geocoding";
import type { guidecreateMutationType } from "./psqlCreateMutation/types/guide";
import type { guidebidcreateMutationType } from "./psqlCreateMutation/types/guidebid";
import type { guidedealcreateMutationType } from "./psqlCreateMutation/types/guidedeal";
import type { guidefavoritecreateMutationType } from "./psqlCreateMutation/types/guidefavorite";
import type { guideoffercreateMutationType } from "./psqlCreateMutation/types/guideoffer";
import type { guideresourcecreateMutationType } from "./psqlCreateMutation/types/guideresource";
import type { guidereviewcreateMutationType } from "./psqlCreateMutation/types/guidereview";
import type { hostresourcecreateMutationType } from "./psqlCreateMutation/types/hostresource";
import type { languagelevelcreateMutationType } from "./psqlCreateMutation/types/languagelevel";
import type { mediadestinationresourcecreateMutationType } from "./psqlCreateMutation/types/mediadestinationresource";
import type { medialocationcreateMutationType } from "./psqlCreateMutation/types/medialocation";
import type { presentationcreateMutationType } from "./psqlCreateMutation/types/presentation";
import type { priceinfocreateMutationType } from "./psqlCreateMutation/types/priceinfo";
import type { publishercreateMutationType } from "./psqlCreateMutation/types/publisher";
import type { reviewcreateMutationType } from "./psqlCreateMutation/types/review";
import type { roomcalendarcreateMutationType } from "./psqlCreateMutation/types/roomcalendar";
import type { roomcalendarentrycreateMutationType } from "./psqlCreateMutation/types/roomcalendarentry";
import type { roomlistcreateMutationType } from "./psqlCreateMutation/types/roomlist";
import type { similarbytriptypeaccomodationcreateMutationType } from "./psqlCreateMutation/types/similarbytriptypeaccomodation";
import type { similarbytriptypedestinationcreateMutationType } from "./psqlCreateMutation/types/similarbytriptypedestination";
import type { similarbytriptypeeventcreateMutationType } from "./psqlCreateMutation/types/similarbytriptypeevent";
import type { similarbytriptypeguidecreateMutationType } from "./psqlCreateMutation/types/similarbytriptypeguide";
import type { similarbytriptypehostcreateMutationType } from "./psqlCreateMutation/types/similarbytriptypehost";
import type { similarbytriptypetransportcreateMutationType } from "./psqlCreateMutation/types/similarbytriptypetransport";
import type { similarbytriptypetravelgroupcreateMutationType } from "./psqlCreateMutation/types/similarbytriptypetravelgroup";
import type { timerangecreateMutationType } from "./psqlCreateMutation/types/timerange";
import type { touristcreateMutationType } from "./psqlCreateMutation/types/tourist";
import type { touristbidcreateMutationType } from "./psqlCreateMutation/types/touristbid";
import type { touristdealcreateMutationType } from "./psqlCreateMutation/types/touristdeal";
import type { touristfavoritecreateMutationType } from "./psqlCreateMutation/types/touristfavorite";
import type { touristoffercreateMutationType } from "./psqlCreateMutation/types/touristoffer";
import type { touristresourcecreateMutationType } from "./psqlCreateMutation/types/touristresource";
import type { touristreviewcreateMutationType } from "./psqlCreateMutation/types/touristreview";
import type { transportresourcecreateMutationType } from "./psqlCreateMutation/types/transportresource";
import type { travelgroupresourcecreateMutationType } from "./psqlCreateMutation/types/travelgroupresource";
import type { tripofferresourcecreateMutationType } from "./psqlCreateMutation/types/tripofferresource";
import type { triptypecreateMutationType } from "./psqlCreateMutation/types/triptype";
import type { usertablecreateMutationType } from "./psqlCreateMutation/types/usertable";
import usertable from "./psqlCreateMutation/usertable";

export const Lookup = {
  triptype: triptype,
  usertable: usertable,
  account: account,
  contact: contact,
  commandlogentry: commandlogentry,
  publisher: publisher,
  geocoding: geocoding,
  accounting: accounting,
  presentation: presentation,
  bid: bid,
  auctioninfo: auctioninfo,
  priceinfo: priceinfo,
  calendarentry: calendarentry,
  timerange: timerange,
  bookingcalendar: bookingcalendar,
  accomodationresource: accomodationresource,
  destinationresource: destinationresource,
  eventresource: eventresource,
  tripofferresource: tripofferresource,
  roomcalendarentry: roomcalendarentry,
  roomcalendar: roomcalendar,
  roomlist: roomlist,
  transportresource: transportresource,
  review: review,
  hostresource: hostresource,
  tourist: tourist,
  languagelevel: languagelevel,
  guideresource: guideresource,
  guide: guide,
  agency: agency,
  medialocation: medialocation,
  touristresource: touristresource,
  travelgroupresource: travelgroupresource,
  agencyaccomodation: agencyaccomodation,
  agencyevent: agencyevent,
  agencyguide: agencyguide,
  agencyhost: agencyhost,
  agencytourist: agencytourist,
  agencytransport: agencytransport,
  agencytravelgroup: agencytravelgroup,
  agencytripoffer: agencytripoffer,
  agencyuser: agencyuser,
  mediadestinationresource: mediadestinationresource,
  agencyreview: agencyreview,
  guidereview: guidereview,
  agencybid: agencybid,
  agencymedialibrary: agencymedialibrary,
  agencydeal: agencydeal,
  agencyfavorite: agencyfavorite,
  agencyoffer: agencyoffer,
  date_: date_,
  guidebid: guidebid,
  guidedeal: guidedeal,
  guidefavorite: guidefavorite,
  guideoffer: guideoffer,
  touristbid: touristbid,
  touristdeal: touristdeal,
  touristfavorite: touristfavorite,
  touristoffer: touristoffer,
  touristreview: touristreview,
  similarbytriptypeaccomodation: similarbytriptypeaccomodation,
  similarbytriptypedestination: similarbytriptypedestination,
  similarbytriptypeevent: similarbytriptypeevent,
  similarbytriptypeguide: similarbytriptypeguide,
  similarbytriptypehost: similarbytriptypehost,
  similarbytriptypetransport: similarbytriptypetransport,
  similarbytriptypetravelgroup: similarbytriptypetravelgroup,
  assocaccomodation: assocaccomodation,
  assochost: assochost,
  assocguide: assocguide,
  assoctransport: assoctransport,
  assocevent: assocevent,
  assocdestination: assocdestination,
  assoctravelgroup: assoctravelgroup,
};

export type createMutationType = {
  triptype: triptypecreateMutationType;
  usertable: usertablecreateMutationType;
  account: accountcreateMutationType;
  contact: contactcreateMutationType;
  commandlogentry: commandlogentrycreateMutationType;
  publisher: publishercreateMutationType;
  geocoding: geocodingcreateMutationType;
  accounting: accountingcreateMutationType;
  presentation: presentationcreateMutationType;
  bid: bidcreateMutationType;
  auctioninfo: auctioninfocreateMutationType;
  priceinfo: priceinfocreateMutationType;
  calendarentry: calendarentrycreateMutationType;
  timerange: timerangecreateMutationType;
  bookingcalendar: bookingcalendarcreateMutationType;
  accomodationresource: accomodationresourcecreateMutationType;
  destinationresource: destinationresourcecreateMutationType;
  eventresource: eventresourcecreateMutationType;
  tripofferresource: tripofferresourcecreateMutationType;
  roomcalendarentry: roomcalendarentrycreateMutationType;
  roomcalendar: roomcalendarcreateMutationType;
  roomlist: roomlistcreateMutationType;
  transportresource: transportresourcecreateMutationType;
  review: reviewcreateMutationType;
  hostresource: hostresourcecreateMutationType;
  tourist: touristcreateMutationType;
  languagelevel: languagelevelcreateMutationType;
  guideresource: guideresourcecreateMutationType;
  guide: guidecreateMutationType;
  agency: agencycreateMutationType;
  medialocation: medialocationcreateMutationType;
  touristresource: touristresourcecreateMutationType;
  travelgroupresource: travelgroupresourcecreateMutationType;
  agencyaccomodation: agencyaccomodationcreateMutationType;
  agencyevent: agencyeventcreateMutationType;
  agencyguide: agencyguidecreateMutationType;
  agencyhost: agencyhostcreateMutationType;
  agencytourist: agencytouristcreateMutationType;
  agencytransport: agencytransportcreateMutationType;
  agencytravelgroup: agencytravelgroupcreateMutationType;
  agencytripoffer: agencytripoffercreateMutationType;
  agencyuser: agencyusercreateMutationType;
  mediadestinationresource: mediadestinationresourcecreateMutationType;
  agencyreview: agencyreviewcreateMutationType;
  guidereview: guidereviewcreateMutationType;
  agencybid: agencybidcreateMutationType;
  agencymedialibrary: agencymedialibrarycreateMutationType;
  agencydeal: agencydealcreateMutationType;
  agencyfavorite: agencyfavoritecreateMutationType;
  agencyoffer: agencyoffercreateMutationType;
  date_: date_createMutationType;
  guidebid: guidebidcreateMutationType;
  guidedeal: guidedealcreateMutationType;
  guidefavorite: guidefavoritecreateMutationType;
  guideoffer: guideoffercreateMutationType;
  touristbid: touristbidcreateMutationType;
  touristdeal: touristdealcreateMutationType;
  touristfavorite: touristfavoritecreateMutationType;
  touristoffer: touristoffercreateMutationType;
  touristreview: touristreviewcreateMutationType;
  similarbytriptypeaccomodation: similarbytriptypeaccomodationcreateMutationType;
  similarbytriptypedestination: similarbytriptypedestinationcreateMutationType;
  similarbytriptypeevent: similarbytriptypeeventcreateMutationType;
  similarbytriptypeguide: similarbytriptypeguidecreateMutationType;
  similarbytriptypehost: similarbytriptypehostcreateMutationType;
  similarbytriptypetransport: similarbytriptypetransportcreateMutationType;
  similarbytriptypetravelgroup: similarbytriptypetravelgroupcreateMutationType;
  assocaccomodation: assocaccomodationcreateMutationType;
  assochost: assochostcreateMutationType;
  assocguide: assocguidecreateMutationType;
  assoctransport: assoctransportcreateMutationType;
  assocevent: assoceventcreateMutationType;
  assocdestination: assocdestinationcreateMutationType;
  assoctravelgroup: assoctravelgroupcreateMutationType;
};

export function getCreateMutation(DbTablesSelection: keyof typeof DbTables) {
  // console.log('queryName:', DbTablesSelection)

  let queryNameAsString = DbTables[DbTablesSelection];
  //  console.log('queryNameAsString:', queryNameAsString)
  // const key = 'destinationresource'
  type getCreateMutationTypes = createMutationType[typeof queryNameAsString];
  //  type Picked = Exclude<getCreateMutationTypes, "object" >;
  const getTypesFromEmpty: getCreateMutationTypes = {};

  const query = Lookup[DbTablesSelection];
  console.log("query:", query);

  return { query, getTypesFromEmpty };
}
