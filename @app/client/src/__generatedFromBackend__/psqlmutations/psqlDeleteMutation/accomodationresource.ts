export const mutation = `mutation deleteAccomodationresource($id: Int , $id: String!) {
        __typename
        deleteAccomodationresource(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     