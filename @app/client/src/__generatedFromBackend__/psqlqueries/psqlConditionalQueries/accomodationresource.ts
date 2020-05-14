export const query = `query getConditionalAccomodationresource(, $id:  number , $contactId:  number , $addressId:  number , $locationCalendarId:  number , $tripTypeName:  string , $publisherId:  number , $createdById:  number , $presentationId:  number , $atAgency:  number , $atGuide:  number ) {
        __typename
        accomodationresources(condition: {id: $id ,,contactId: $contactId ,addressId: $addressId ,,locationCalendarId: $locationCalendarId ,tripTypeName: $tripTypeName ,publisherId: $publisherId ,createdById: $createdById ,,,presentationId: $presentationId ,atAgency: $atAgency ,atGuide: $atGuide ,,, })  {
          nodes {
            id accomodationName contactId addressId locatedIn locationCalendarId tripTypeName publisherId createdById isActive ownedByAt presentationId atAgency atGuide isPublic lastModified
 
          }
        }
      }`
      export default `${query}`
        