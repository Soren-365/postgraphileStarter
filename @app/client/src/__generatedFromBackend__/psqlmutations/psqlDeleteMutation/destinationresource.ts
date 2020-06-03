export const mutation = `mutation deleteDestinationresource($id: Int , $id: String!) {
        __typename
        deleteDestinationresource(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     