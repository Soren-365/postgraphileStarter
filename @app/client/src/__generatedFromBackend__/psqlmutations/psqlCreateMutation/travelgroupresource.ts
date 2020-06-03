export const mutation = `mutation createTravelgroupresource(,$travelGroupName: String ,$contactId: Int! ,$publisherId: Int! ,$createdById: Int! ,$numberOfAdults: Int ,$numberOfChildren: Int ,$customInfo: [String] ,$bookingCalendarId: Int! ,$atAgency: Int ,$atGuide: Int ,$language: Languages! ,$atTripOfferResource: Int ,$atTouristResource: Int! ,$isRomanian: Boolean! ,$isActive: Boolean ,$lastModified: Datetime ,$timeCreated: Datetime , $id: String!) {
        __typename
        createTravelgroupresource(input: {id: $id,travelgroupresource: {,travelGroupName: $travelGroupName ,contactId: $contactId ,publisherId: $publisherId ,createdById: $createdById ,numberOfAdults: $numberOfAdults ,numberOfChildren: $numberOfChildren ,customInfo: $customInfo ,bookingCalendarId: $bookingCalendarId ,atAgency: $atAgency ,atGuide: $atGuide ,language: $language ,atTripOfferResource: $atTripOfferResource ,atTouristResource: $atTouristResource ,isRomanian: $isRomanian ,isActive: $isActive ,lastModified: $lastModified ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     