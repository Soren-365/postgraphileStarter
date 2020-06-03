export const mutation = `mutation deleteAgency($id: Int , $id: String!) {
        __typename
        deleteAgency(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     