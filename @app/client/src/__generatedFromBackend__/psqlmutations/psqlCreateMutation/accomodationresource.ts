export const mutation = `mutation createAccomodationresource(,$accomodationName: String ,$contactId: Int! ,$addressId: Int! ,$locatedIn: Area ,$locationCalendarId: Int! ,$tripTypeName: String ,$publisherId: Int! ,$createdById: Int! ,$isActive: Boolean ,$ownedByAt: Boolean ,$presentationId: Int! ,$atAgency: Int ,$atGuide: Int ,$isPublic: Boolean ,$lastModified: Datetime ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAccomodationresource(input: {clientMutationId: $clientMutationId,accomodationresource: {,accomodationName: $accomodationName ,contactId: $contactId ,addressId: $addressId ,locatedIn: $locatedIn ,locationCalendarId: $locationCalendarId ,tripTypeName: $tripTypeName ,publisherId: $publisherId ,createdById: $createdById ,isActive: $isActive ,ownedByAt: $ownedByAt ,presentationId: $presentationId ,atAgency: $atAgency ,atGuide: $atGuide ,isPublic: $isPublic ,lastModified: $lastModified ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     