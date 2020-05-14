export const mutation = `mutation createTimerange(,$fromTimestamp: Datetime ,$toTimestamp: Datetime ,$timeCreated: TIMESTAMP DEFAULT NOW( , $clientMutationId: String!) {
        __typename
        createTimerange(input: {clientMutationId: $clientMutationId,timerange: {,fromTimestamp: $fromTimestamp ,toTimestamp: $toTimestamp ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     