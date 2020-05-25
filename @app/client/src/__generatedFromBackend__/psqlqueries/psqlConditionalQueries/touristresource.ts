export const query = `query getConditionalTouristresource(, $id:  number , $contactId:  number , $publisherId:  number , $createdById:  number , $atTravelGroup:  number , $atAgency:  number , $atGuide:  number , $priceInfoId:  number , $travellingCalendarId:  number ) {
        __typename
        touristresources(condition: {id: $id ,,contactId: $contactId ,publisherId: $publisherId ,createdById: $createdById ,atTravelGroup: $atTravelGroup ,atAgency: $atAgency ,atGuide: $atGuide ,,priceInfoId: $priceInfoId ,travellingCalendarId: $travellingCalendarId ,,,,, })  {
          nodes {
            id name contactId publisherId createdById atTravelGroup atAgency atGuide isSigned priceInfoId travellingCalendarId isRomanian isActive isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        