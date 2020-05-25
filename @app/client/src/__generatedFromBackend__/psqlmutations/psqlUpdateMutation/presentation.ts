export const mutation = `mutation updatePresentation($id: Int ,$headline: String ,$publisherId: Int! ,$createdById: Int! ,$resourceType: Resourcetype! ,$resourceTypeId: Int! ,$isActive: Boolean ,$lastModified: Datetime ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updatePresentation(input: {clientMutationId: $clientMutationId, patch: {,headline: $headline ,publisherId: $publisherId ,createdById: $createdById ,resourceType: $resourceType ,resourceTypeId: $resourceTypeId ,isActive: $isActive ,lastModified: $lastModified ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     