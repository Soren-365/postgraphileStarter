export const mutation = `mutation deleteCalendarentry($id: Int , $id: String!) {
        __typename
        deleteCalendarentry(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     