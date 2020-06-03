export const mutation = `mutation deleteAgencyhost($agencyId: Int! , $id: String!) {
        __typename
        deleteAgencyhost(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     