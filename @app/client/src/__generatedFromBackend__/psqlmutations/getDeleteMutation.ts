import { DbTables } from "../../functions/__generatedFromBackend__/tableEnums";
import accomodationresource from "./psqlDeleteMutation/accomodationresource";
import account from "./psqlDeleteMutation/account";
import accounting from "./psqlDeleteMutation/accounting";
import agency from "./psqlDeleteMutation/agency";
import agencyaccomodation from "./psqlDeleteMutation/agencyaccomodation";
import agencybid from "./psqlDeleteMutation/agencybid";
import agencydeal from "./psqlDeleteMutation/agencydeal";
import agencyevent from "./psqlDeleteMutation/agencyevent";
import agencyfavorite from "./psqlDeleteMutation/agencyfavorite";
import agencyguide from "./psqlDeleteMutation/agencyguide";
import agencyhost from "./psqlDeleteMutation/agencyhost";
import agencymedialibrary from "./psqlDeleteMutation/agencymedialibrary";
import agencyoffer from "./psqlDeleteMutation/agencyoffer";
import agencyreview from "./psqlDeleteMutation/agencyreview";
import agencytourist from "./psqlDeleteMutation/agencytourist";
import agencytransport from "./psqlDeleteMutation/agencytransport";
import agencytravelgroup from "./psqlDeleteMutation/agencytravelgroup";
import agencytripoffer from "./psqlDeleteMutation/agencytripoffer";
import agencyuser from "./psqlDeleteMutation/agencyuser";
import assocaccomodation from "./psqlDeleteMutation/assocaccomodation";
import assocdestination from "./psqlDeleteMutation/assocdestination";
import assocevent from "./psqlDeleteMutation/assocevent";
import assocguide from "./psqlDeleteMutation/assocguide";
import assochost from "./psqlDeleteMutation/assochost";
import assoctransport from "./psqlDeleteMutation/assoctransport";
import assoctravelgroup from "./psqlDeleteMutation/assoctravelgroup";
import auctioninfo from "./psqlDeleteMutation/auctioninfo";
import bid from "./psqlDeleteMutation/bid";
import bookingcalendar from "./psqlDeleteMutation/bookingcalendar";
import calendarentry from "./psqlDeleteMutation/calendarentry";
import commandlogentry from "./psqlDeleteMutation/commandlogentry";
import contact from "./psqlDeleteMutation/contact";
import date_ from "./psqlDeleteMutation/date_";
import destinationresource from "./psqlDeleteMutation/destinationresource";
import eventresource from "./psqlDeleteMutation/eventresource";
import geocoding from "./psqlDeleteMutation/geocoding";
import guide from "./psqlDeleteMutation/guide";
import guidebid from "./psqlDeleteMutation/guidebid";
import guidedeal from "./psqlDeleteMutation/guidedeal";
import guidefavorite from "./psqlDeleteMutation/guidefavorite";
import guideoffer from "./psqlDeleteMutation/guideoffer";
import guideresource from "./psqlDeleteMutation/guideresource";
import guidereview from "./psqlDeleteMutation/guidereview";
import hostresource from "./psqlDeleteMutation/hostresource";
import languagelevel from "./psqlDeleteMutation/languagelevel";
import mediadestinationresource from "./psqlDeleteMutation/mediadestinationresource";
import medialocation from "./psqlDeleteMutation/medialocation";
import presentation from "./psqlDeleteMutation/presentation";
import priceinfo from "./psqlDeleteMutation/priceinfo";
import publisher from "./psqlDeleteMutation/publisher";
import review from "./psqlDeleteMutation/review";
import roomcalendar from "./psqlDeleteMutation/roomcalendar";
import roomcalendarentry from "./psqlDeleteMutation/roomcalendarentry";
import roomlist from "./psqlDeleteMutation/roomlist";
import similarbytriptypeaccomodation from "./psqlDeleteMutation/similarbytriptypeaccomodation";
import similarbytriptypedestination from "./psqlDeleteMutation/similarbytriptypedestination";
import similarbytriptypeevent from "./psqlDeleteMutation/similarbytriptypeevent";
import similarbytriptypeguide from "./psqlDeleteMutation/similarbytriptypeguide";
import similarbytriptypehost from "./psqlDeleteMutation/similarbytriptypehost";
import similarbytriptypetransport from "./psqlDeleteMutation/similarbytriptypetransport";
import similarbytriptypetravelgroup from "./psqlDeleteMutation/similarbytriptypetravelgroup";
import timerange from "./psqlDeleteMutation/timerange";
import tourist from "./psqlDeleteMutation/tourist";
import touristbid from "./psqlDeleteMutation/touristbid";
import touristdeal from "./psqlDeleteMutation/touristdeal";
import touristfavorite from "./psqlDeleteMutation/touristfavorite";
import touristoffer from "./psqlDeleteMutation/touristoffer";
import touristresource from "./psqlDeleteMutation/touristresource";
import touristreview from "./psqlDeleteMutation/touristreview";
import transportresource from "./psqlDeleteMutation/transportresource";
import travelgroupresource from "./psqlDeleteMutation/travelgroupresource";
import tripofferresource from "./psqlDeleteMutation/tripofferresource";
import triptype from "./psqlDeleteMutation/triptype";
import type { accomodationresourcedeleteMutationType } from "./psqlDeleteMutation/types/accomodationresource";
import type { accountdeleteMutationType } from "./psqlDeleteMutation/types/account";
import type { accountingdeleteMutationType } from "./psqlDeleteMutation/types/accounting";
import type { agencydeleteMutationType } from "./psqlDeleteMutation/types/agency";
import type { agencyaccomodationdeleteMutationType } from "./psqlDeleteMutation/types/agencyaccomodation";
import type { agencybiddeleteMutationType } from "./psqlDeleteMutation/types/agencybid";
import type { agencydealdeleteMutationType } from "./psqlDeleteMutation/types/agencydeal";
import type { agencyeventdeleteMutationType } from "./psqlDeleteMutation/types/agencyevent";
import type { agencyfavoritedeleteMutationType } from "./psqlDeleteMutation/types/agencyfavorite";
import type { agencyguidedeleteMutationType } from "./psqlDeleteMutation/types/agencyguide";
import type { agencyhostdeleteMutationType } from "./psqlDeleteMutation/types/agencyhost";
import type { agencymedialibrarydeleteMutationType } from "./psqlDeleteMutation/types/agencymedialibrary";
import type { agencyofferdeleteMutationType } from "./psqlDeleteMutation/types/agencyoffer";
import type { agencyreviewdeleteMutationType } from "./psqlDeleteMutation/types/agencyreview";
import type { agencytouristdeleteMutationType } from "./psqlDeleteMutation/types/agencytourist";
import type { agencytransportdeleteMutationType } from "./psqlDeleteMutation/types/agencytransport";
import type { agencytravelgroupdeleteMutationType } from "./psqlDeleteMutation/types/agencytravelgroup";
import type { agencytripofferdeleteMutationType } from "./psqlDeleteMutation/types/agencytripoffer";
import type { agencyuserdeleteMutationType } from "./psqlDeleteMutation/types/agencyuser";
import type { assocaccomodationdeleteMutationType } from "./psqlDeleteMutation/types/assocaccomodation";
import type { assocdestinationdeleteMutationType } from "./psqlDeleteMutation/types/assocdestination";
import type { assoceventdeleteMutationType } from "./psqlDeleteMutation/types/assocevent";
import type { assocguidedeleteMutationType } from "./psqlDeleteMutation/types/assocguide";
import type { assochostdeleteMutationType } from "./psqlDeleteMutation/types/assochost";
import type { assoctransportdeleteMutationType } from "./psqlDeleteMutation/types/assoctransport";
import type { assoctravelgroupdeleteMutationType } from "./psqlDeleteMutation/types/assoctravelgroup";
import type { auctioninfodeleteMutationType } from "./psqlDeleteMutation/types/auctioninfo";
import type { biddeleteMutationType } from "./psqlDeleteMutation/types/bid";
import type { bookingcalendardeleteMutationType } from "./psqlDeleteMutation/types/bookingcalendar";
import type { calendarentrydeleteMutationType } from "./psqlDeleteMutation/types/calendarentry";
import type { commandlogentrydeleteMutationType } from "./psqlDeleteMutation/types/commandlogentry";
import type { contactdeleteMutationType } from "./psqlDeleteMutation/types/contact";
import type { date_deleteMutationType } from "./psqlDeleteMutation/types/date_";
import type { destinationresourcedeleteMutationType } from "./psqlDeleteMutation/types/destinationresource";
import type { eventresourcedeleteMutationType } from "./psqlDeleteMutation/types/eventresource";
import type { geocodingdeleteMutationType } from "./psqlDeleteMutation/types/geocoding";
import type { guidedeleteMutationType } from "./psqlDeleteMutation/types/guide";
import type { guidebiddeleteMutationType } from "./psqlDeleteMutation/types/guidebid";
import type { guidedealdeleteMutationType } from "./psqlDeleteMutation/types/guidedeal";
import type { guidefavoritedeleteMutationType } from "./psqlDeleteMutation/types/guidefavorite";
import type { guideofferdeleteMutationType } from "./psqlDeleteMutation/types/guideoffer";
import type { guideresourcedeleteMutationType } from "./psqlDeleteMutation/types/guideresource";
import type { guidereviewdeleteMutationType } from "./psqlDeleteMutation/types/guidereview";
import type { hostresourcedeleteMutationType } from "./psqlDeleteMutation/types/hostresource";
import type { languageleveldeleteMutationType } from "./psqlDeleteMutation/types/languagelevel";
import type { mediadestinationresourcedeleteMutationType } from "./psqlDeleteMutation/types/mediadestinationresource";
import type { medialocationdeleteMutationType } from "./psqlDeleteMutation/types/medialocation";
import type { presentationdeleteMutationType } from "./psqlDeleteMutation/types/presentation";
import type { priceinfodeleteMutationType } from "./psqlDeleteMutation/types/priceinfo";
import type { publisherdeleteMutationType } from "./psqlDeleteMutation/types/publisher";
import type { reviewdeleteMutationType } from "./psqlDeleteMutation/types/review";
import type { roomcalendardeleteMutationType } from "./psqlDeleteMutation/types/roomcalendar";
import type { roomcalendarentrydeleteMutationType } from "./psqlDeleteMutation/types/roomcalendarentry";
import type { roomlistdeleteMutationType } from "./psqlDeleteMutation/types/roomlist";
import type { similarbytriptypeaccomodationdeleteMutationType } from "./psqlDeleteMutation/types/similarbytriptypeaccomodation";
import type { similarbytriptypedestinationdeleteMutationType } from "./psqlDeleteMutation/types/similarbytriptypedestination";
import type { similarbytriptypeeventdeleteMutationType } from "./psqlDeleteMutation/types/similarbytriptypeevent";
import type { similarbytriptypeguidedeleteMutationType } from "./psqlDeleteMutation/types/similarbytriptypeguide";
import type { similarbytriptypehostdeleteMutationType } from "./psqlDeleteMutation/types/similarbytriptypehost";
import type { similarbytriptypetransportdeleteMutationType } from "./psqlDeleteMutation/types/similarbytriptypetransport";
import type { similarbytriptypetravelgroupdeleteMutationType } from "./psqlDeleteMutation/types/similarbytriptypetravelgroup";
import type { timerangedeleteMutationType } from "./psqlDeleteMutation/types/timerange";
import type { touristdeleteMutationType } from "./psqlDeleteMutation/types/tourist";
import type { touristbiddeleteMutationType } from "./psqlDeleteMutation/types/touristbid";
import type { touristdealdeleteMutationType } from "./psqlDeleteMutation/types/touristdeal";
import type { touristfavoritedeleteMutationType } from "./psqlDeleteMutation/types/touristfavorite";
import type { touristofferdeleteMutationType } from "./psqlDeleteMutation/types/touristoffer";
import type { touristresourcedeleteMutationType } from "./psqlDeleteMutation/types/touristresource";
import type { touristreviewdeleteMutationType } from "./psqlDeleteMutation/types/touristreview";
import type { transportresourcedeleteMutationType } from "./psqlDeleteMutation/types/transportresource";
import type { travelgroupresourcedeleteMutationType } from "./psqlDeleteMutation/types/travelgroupresource";
import type { tripofferresourcedeleteMutationType } from "./psqlDeleteMutation/types/tripofferresource";
import type { triptypedeleteMutationType } from "./psqlDeleteMutation/types/triptype";
import type { usertabledeleteMutationType } from "./psqlDeleteMutation/types/usertable";
import usertable from "./psqlDeleteMutation/usertable";

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

export type deleteMutationType = {
  triptype: triptypedeleteMutationType;
  usertable: usertabledeleteMutationType;
  account: accountdeleteMutationType;
  contact: contactdeleteMutationType;
  commandlogentry: commandlogentrydeleteMutationType;
  publisher: publisherdeleteMutationType;
  geocoding: geocodingdeleteMutationType;
  accounting: accountingdeleteMutationType;
  presentation: presentationdeleteMutationType;
  bid: biddeleteMutationType;
  auctioninfo: auctioninfodeleteMutationType;
  priceinfo: priceinfodeleteMutationType;
  calendarentry: calendarentrydeleteMutationType;
  timerange: timerangedeleteMutationType;
  bookingcalendar: bookingcalendardeleteMutationType;
  accomodationresource: accomodationresourcedeleteMutationType;
  destinationresource: destinationresourcedeleteMutationType;
  eventresource: eventresourcedeleteMutationType;
  tripofferresource: tripofferresourcedeleteMutationType;
  roomcalendarentry: roomcalendarentrydeleteMutationType;
  roomcalendar: roomcalendardeleteMutationType;
  roomlist: roomlistdeleteMutationType;
  transportresource: transportresourcedeleteMutationType;
  review: reviewdeleteMutationType;
  hostresource: hostresourcedeleteMutationType;
  tourist: touristdeleteMutationType;
  languagelevel: languageleveldeleteMutationType;
  guideresource: guideresourcedeleteMutationType;
  guide: guidedeleteMutationType;
  agency: agencydeleteMutationType;
  medialocation: medialocationdeleteMutationType;
  touristresource: touristresourcedeleteMutationType;
  travelgroupresource: travelgroupresourcedeleteMutationType;
  agencyaccomodation: agencyaccomodationdeleteMutationType;
  agencyevent: agencyeventdeleteMutationType;
  agencyguide: agencyguidedeleteMutationType;
  agencyhost: agencyhostdeleteMutationType;
  agencytourist: agencytouristdeleteMutationType;
  agencytransport: agencytransportdeleteMutationType;
  agencytravelgroup: agencytravelgroupdeleteMutationType;
  agencytripoffer: agencytripofferdeleteMutationType;
  agencyuser: agencyuserdeleteMutationType;
  mediadestinationresource: mediadestinationresourcedeleteMutationType;
  agencyreview: agencyreviewdeleteMutationType;
  guidereview: guidereviewdeleteMutationType;
  agencybid: agencybiddeleteMutationType;
  agencymedialibrary: agencymedialibrarydeleteMutationType;
  agencydeal: agencydealdeleteMutationType;
  agencyfavorite: agencyfavoritedeleteMutationType;
  agencyoffer: agencyofferdeleteMutationType;
  date_: date_deleteMutationType;
  guidebid: guidebiddeleteMutationType;
  guidedeal: guidedealdeleteMutationType;
  guidefavorite: guidefavoritedeleteMutationType;
  guideoffer: guideofferdeleteMutationType;
  touristbid: touristbiddeleteMutationType;
  touristdeal: touristdealdeleteMutationType;
  touristfavorite: touristfavoritedeleteMutationType;
  touristoffer: touristofferdeleteMutationType;
  touristreview: touristreviewdeleteMutationType;
  similarbytriptypeaccomodation: similarbytriptypeaccomodationdeleteMutationType;
  similarbytriptypedestination: similarbytriptypedestinationdeleteMutationType;
  similarbytriptypeevent: similarbytriptypeeventdeleteMutationType;
  similarbytriptypeguide: similarbytriptypeguidedeleteMutationType;
  similarbytriptypehost: similarbytriptypehostdeleteMutationType;
  similarbytriptypetransport: similarbytriptypetransportdeleteMutationType;
  similarbytriptypetravelgroup: similarbytriptypetravelgroupdeleteMutationType;
  assocaccomodation: assocaccomodationdeleteMutationType;
  assochost: assochostdeleteMutationType;
  assocguide: assocguidedeleteMutationType;
  assoctransport: assoctransportdeleteMutationType;
  assocevent: assoceventdeleteMutationType;
  assocdestination: assocdestinationdeleteMutationType;
  assoctravelgroup: assoctravelgroupdeleteMutationType;
};

export function getDeleteMutation(DbTablesSelection: keyof typeof DbTables) {
  // console.log('queryName:', DbTablesSelection)

  let queryNameAsString = DbTables[DbTablesSelection];
  //  console.log('queryNameAsString:', queryNameAsString)
  // const key = 'destinationresource'
  type getDeleteMutationTypes = deleteMutationType[typeof queryNameAsString];
  //  type Picked = Exclude<getDeleteMutationTypes, "object" >;
  const getTypesFromEmpty: getDeleteMutationTypes = {};

  const query = Lookup[DbTablesSelection];
  console.log("query:", query);

  return { query, getTypesFromEmpty };
}
