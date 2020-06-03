export const mutation = `mutation deleteAuctioninfo($id: Int , $id: String!) {
        __typename
        deleteAuctioninfo(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     