export const mutation = `mutation deleteGuidefavorite($id: Int , $id: String!) {
        __typename
        deleteGuidefavorite(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     