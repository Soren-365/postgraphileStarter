export const mutation = `mutation deleteAgencytravelgroup($agencyId: Int , $id: String!) {
        __typename
        deleteAgencytravelgroup(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     