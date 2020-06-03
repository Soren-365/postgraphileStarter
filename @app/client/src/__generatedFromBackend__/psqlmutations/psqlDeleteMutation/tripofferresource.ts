export const mutation = `mutation deleteTripofferresource($id: Int , $id: String!) {
        __typename
        deleteTripofferresource(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     