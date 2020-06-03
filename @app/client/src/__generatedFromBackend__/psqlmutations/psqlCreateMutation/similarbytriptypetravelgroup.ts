export const mutation = `mutation createSimilarbytriptypetravelgroup($travelGroupIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        createSimilarbytriptypetravelgroup(input: {id: $id,similarbytriptypetravelgroup: {travelGroupIds: $travelGroupIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     