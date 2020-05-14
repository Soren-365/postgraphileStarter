export const query = `query getConditionalHostresource(, $id:  number , $contactId:  number , $publisherId:  number , $createdById:  number , $atAccomodation:  number , $atAgency:  number , $atGuide:  number , $tripTypeName:  string , $addressInfoId:  number , $presentationId:  number , $bookingCalendarId:  number ) {
        __typename
        hostresources(condition: {id: $id ,,contactId: $contactId ,publisherId: $publisherId ,createdById: $createdById ,,atAccomodation: $atAccomodation ,atAgency: $atAgency ,atGuide: $atGuide ,tripTypeName: $tripTypeName ,,addressInfoId: $addressInfoId ,,presentationId: $presentationId ,bookingCalendarId: $bookingCalendarId ,,,,, })  {
          nodes {
            id hostResourceName contactId publisherId createdById withAccomodation atAccomodation atAgency atGuide tripTypeName locatedIn addressInfoId ownedByAt presentationId bookingCalendarId isRomanian isActive isPublic lastModified
 
          }
        }
      }`
      export default `${query}`
        