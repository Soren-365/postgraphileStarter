export const mutation = `mutation deleteAgencyguide($agencyId: Int! , $id: String!) {
        __typename
        deleteAgencyguide(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     