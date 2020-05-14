export const mutation = `mutation deleteSimilarbytriptypeaccomodation($accomodationIds: [Int] , $clientMutationId: String!) {
        __typename
        deleteSimilarbytriptypeaccomodation(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     