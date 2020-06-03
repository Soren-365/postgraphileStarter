export const mutation = `mutation createSimilarbytriptypeaccomodation($accomodationIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        createSimilarbytriptypeaccomodation(input: {id: $id,similarbytriptypeaccomodation: {accomodationIds: $accomodationIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     