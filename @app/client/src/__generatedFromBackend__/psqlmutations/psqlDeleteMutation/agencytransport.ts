export const mutation = `mutation deleteAgencytransport($agencyId: Int! , $id: String!) {
        __typename
        deleteAgencytransport(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     