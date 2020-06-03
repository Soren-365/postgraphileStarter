export const mutation = `mutation createSimilarbytriptypehost($hostIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        createSimilarbytriptypehost(input: {id: $id,similarbytriptypehost: {hostIds: $hostIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     