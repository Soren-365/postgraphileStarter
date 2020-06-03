export const mutation = `mutation createSimilarbytriptypeguide($guideIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        createSimilarbytriptypeguide(input: {id: $id,similarbytriptypeguide: {guideIds: $guideIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     