export const mutation = `mutation updateSimilarbytriptypeaccomodation($accomodationIds: [Int] ,$tripTypeName: String ,$atAgency: String ,$timeCreated: Int , $clientMutationId: String!) {
        __typename
        updateSimilarbytriptypeaccomodation(input: {clientMutationId: $clientMutationId, patch: {accomodationIds: $accomodationIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     