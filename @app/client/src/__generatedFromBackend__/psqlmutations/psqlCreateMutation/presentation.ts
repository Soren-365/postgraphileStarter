export const mutation = `mutation createPresentation(,$headline: String ,$publisherId: Int! ,$createdById: Int! ,$resourceType: Resourcetype! ,$resourceTypeId: Int! ,$isActive: Boolean ,$lastModified: Datetime ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createPresentation(input: {clientMutationId: $clientMutationId,presentation: {,headline: $headline ,publisherId: $publisherId ,createdById: $createdById ,resourceType: $resourceType ,resourceTypeId: $resourceTypeId ,isActive: $isActive ,lastModified: $lastModified ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     