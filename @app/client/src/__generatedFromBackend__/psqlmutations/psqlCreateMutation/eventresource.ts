export const mutation = `mutation createEventresource(,$eventName: String ,$agencyName: String ,$contactId: Int! ,$publisherId: Int! ,$createdById: Int! ,$locatedIn: Area ,$locationAddressId: Int! ,$tripTypeName: String ,$activeAtPeriodsId: Int! ,$ownedByAt: Boolean! ,$atAgency: Int ,$atGuide: Int ,$presentationId: Int! ,$isActive: Boolean ,$isPublic: Boolean! ,$lastModified: Datetime ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createEventresource(input: {clientMutationId: $clientMutationId,eventresource: {,eventName: $eventName ,agencyName: $agencyName ,contactId: $contactId ,publisherId: $publisherId ,createdById: $createdById ,locatedIn: $locatedIn ,locationAddressId: $locationAddressId ,tripTypeName: $tripTypeName ,activeAtPeriodsId: $activeAtPeriodsId ,ownedByAt: $ownedByAt ,atAgency: $atAgency ,atGuide: $atGuide ,presentationId: $presentationId ,isActive: $isActive ,isPublic: $isPublic ,lastModified: $lastModified ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     