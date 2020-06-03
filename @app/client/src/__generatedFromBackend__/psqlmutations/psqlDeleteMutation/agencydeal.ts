export const mutation = `mutation deleteAgencydeal($id: Int , $id: String!) {
        __typename
        deleteAgencydeal(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     