export const mutation = `mutation deleteAgencybid($id: Int , $id: String!) {
        __typename
        deleteAgencybid(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     