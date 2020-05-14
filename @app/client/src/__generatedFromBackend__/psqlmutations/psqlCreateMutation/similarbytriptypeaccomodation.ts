export const mutation = `mutation createSimilarbytriptypeaccomodation($accomodationIds: [Int] ,$tripTypeName: String ,$atAgency: String ,$timeCreated: Int , $clientMutationId: String!) {
        __typename
        createSimilarbytriptypeaccomodation(input: {clientMutationId: $clientMutationId,similarbytriptypeaccomodation: {accomodationIds: $accomodationIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     