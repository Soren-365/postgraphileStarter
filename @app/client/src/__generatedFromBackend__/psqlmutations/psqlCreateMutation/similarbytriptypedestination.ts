export const mutation = `mutation createSimilarbytriptypedestination($destinationIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        createSimilarbytriptypedestination(input: {id: $id,similarbytriptypedestination: {destinationIds: $destinationIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     