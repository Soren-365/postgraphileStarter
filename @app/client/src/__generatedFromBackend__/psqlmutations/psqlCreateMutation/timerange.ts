export const mutation = `mutation createTimerange(,$fromTimestamp: Datetime ,$toTimestamp: Datetime ,$timeCreated: TIMESTAMP DEFAULT NOW , $id: String!) {
        __typename
        createTimerange(input: {id: $id,timerange: {,fromTimestamp: $fromTimestamp ,toTimestamp: $toTimestamp ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     