export const query = `query getConditionalEventresource(, $id:  number , $contactId:  number , $publisherId:  number , $createdById:  number , $locationAddressId:  number , $tripTypeName:  string , $activeAtPeriodsId:  number , $atAgency:  number , $atGuide:  number , $presentationId:  number ) {
        __typename
        eventresources(condition: {id: $id ,,,contactId: $contactId ,publisherId: $publisherId ,createdById: $createdById ,,locationAddressId: $locationAddressId ,tripTypeName: $tripTypeName ,activeAtPeriodsId: $activeAtPeriodsId ,,atAgency: $atAgency ,atGuide: $atGuide ,presentationId: $presentationId ,,,, })  {
          nodes {
            id eventName agencyName contactId publisherId createdById locatedIn locationAddressId tripTypeName activeAtPeriodsId ownedByAt atAgency atGuide presentationId isActive isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        