export const mutation = `mutation deleteAgencyuser($agencyId: Int , $id: String!) {
        __typename
        deleteAgencyuser(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     