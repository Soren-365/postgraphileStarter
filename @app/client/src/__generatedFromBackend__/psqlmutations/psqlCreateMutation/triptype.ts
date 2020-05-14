export const mutation = `mutation createTriptype(,$tripTypeName: String! ,$atAgency: Int ,$lastModified: Datetime ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createTriptype(input: {clientMutationId: $clientMutationId,triptype: {,tripTypeName: $tripTypeName ,atAgency: $atAgency ,lastModified: $lastModified ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     