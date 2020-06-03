export const mutation = `mutation deleteMedialocation($id: Int , $id: String!) {
        __typename
        deleteMedialocation(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     