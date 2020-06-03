export const mutation = `mutation deleteRoomcalendarentry($id: Int , $id: String!) {
        __typename
        deleteRoomcalendarentry(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     