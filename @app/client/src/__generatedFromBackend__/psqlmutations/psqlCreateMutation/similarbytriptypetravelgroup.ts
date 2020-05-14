export const mutation = `mutation createSimilarbytriptypetravelgroup($travelGroupIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createSimilarbytriptypetravelgroup(input: {clientMutationId: $clientMutationId,similarbytriptypetravelgroup: {travelGroupIds: $travelGroupIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     