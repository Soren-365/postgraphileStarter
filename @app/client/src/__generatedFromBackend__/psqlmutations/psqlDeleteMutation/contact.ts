export const mutation = `mutation deleteContact($id: Int , $id: String!) {
        __typename
        deleteContact(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     