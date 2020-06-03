export const mutation = `mutation deleteAgencyevent($agencyId: Int! , $id: String!) {
        __typename
        deleteAgencyevent(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     