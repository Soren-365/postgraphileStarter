export const mutation = `mutation updateSimilarbytriptypeaccomodation($accomodationIds: [Int] ,$--: ResourceIds ,$triptypes: In ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateSimilarbytriptypeaccomodation(input: {clientMutationId: $clientMutationId, patch: {accomodationIds: $accomodationIds ,--: $-- ,triptypes: $triptypes ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     