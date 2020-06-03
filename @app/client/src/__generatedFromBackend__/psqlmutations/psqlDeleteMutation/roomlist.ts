export const mutation = `mutation deleteRoomlist($id: Int , $id: String!) {
        __typename
        deleteRoomlist(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     