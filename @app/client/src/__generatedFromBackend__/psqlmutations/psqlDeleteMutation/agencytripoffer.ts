export const mutation = `mutation deleteAgencytripoffer($agencyId: Int! , $id: String!) {
        __typename
        deleteAgencytripoffer(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     