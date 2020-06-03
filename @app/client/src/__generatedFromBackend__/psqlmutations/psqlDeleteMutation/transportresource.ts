export const mutation = `mutation deleteTransportresource($id: Int , $id: String!) {
        __typename
        deleteTransportresource(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     