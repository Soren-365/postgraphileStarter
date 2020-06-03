export const mutation = `mutation deleteAgencymedialibrary($id: Int , $id: String!) {
        __typename
        deleteAgencymedialibrary(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     