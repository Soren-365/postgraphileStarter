export const mutation = `mutation updateAgencyoffer($id: Int ,$tripsOfferesourceIdPool: [Int] , $clientMutationId: String!) {
        __typename
        updateAgencyoffer(input: {clientMutationId: $clientMutationId, patch: {,tripsOfferesourceIdPool: $tripsOfferesourceIdPool }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     