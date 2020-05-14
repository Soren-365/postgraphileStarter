export const mutation = `mutation deleteAuctioninfo($id: Int , $clientMutationId: String!) {
        __typename
        deleteAuctioninfo(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     