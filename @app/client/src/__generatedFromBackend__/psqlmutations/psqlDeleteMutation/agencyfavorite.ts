export const mutation = `mutation deleteAgencyfavorite($resourceId: Int , $id: String!) {
        __typename
        deleteAgencyfavorite(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     