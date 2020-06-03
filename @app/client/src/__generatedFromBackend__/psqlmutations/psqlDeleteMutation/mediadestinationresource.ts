export const mutation = `mutation deleteMediadestinationresource($id: Int , $id: String!) {
        __typename
        deleteMediadestinationresource(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     