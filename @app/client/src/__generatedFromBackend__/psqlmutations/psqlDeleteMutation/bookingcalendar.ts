export const mutation = `mutation deleteBookingcalendar($id: Int , $id: String!) {
        __typename
        deleteBookingcalendar(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     