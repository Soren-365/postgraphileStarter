export const mutation = `mutation deleteRoomcalendar($id: Int , $id: String!) {
        __typename
        deleteRoomcalendar(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     