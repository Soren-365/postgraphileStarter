export const mutation = `mutation deleteGeocoding($id: Int , $id: String!) {
        __typename
        deleteGeocoding(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     