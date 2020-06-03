export const mutation = `mutation deleteAgencyoffer($id: Int , $id: String!) {
        __typename
        deleteAgencyoffer(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     