export const mutation = `mutation deleteAgencyaccomodation($agencyId: Int! , $id: String!) {
        __typename
        deleteAgencyaccomodation(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     