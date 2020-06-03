export const mutation = `mutation deleteAgencytourist($agencyId: Int! , $id: String!) {
        __typename
        deleteAgencytourist(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     