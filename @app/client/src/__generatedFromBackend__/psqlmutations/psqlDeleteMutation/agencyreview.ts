export const mutation = `mutation deleteAgencyreview($id: Int , $id: String!) {
        __typename
        deleteAgencyreview(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     