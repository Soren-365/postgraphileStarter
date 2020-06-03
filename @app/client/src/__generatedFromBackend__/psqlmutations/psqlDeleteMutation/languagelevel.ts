export const mutation = `mutation deleteLanguagelevel($id: Int , $id: String!) {
        __typename
        deleteLanguagelevel(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     