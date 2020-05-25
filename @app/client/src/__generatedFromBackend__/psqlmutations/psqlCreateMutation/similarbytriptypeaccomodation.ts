export const mutation = `mutation createSimilarbytriptypeaccomodation($accomodationIds: [Int] ,$--: ResourceIds ,$triptypes: In ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createSimilarbytriptypeaccomodation(input: {clientMutationId: $clientMutationId,similarbytriptypeaccomodation: {accomodationIds: $accomodationIds ,--: $-- ,triptypes: $triptypes ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     