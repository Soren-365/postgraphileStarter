export const mutation = `mutation updateAgencybid($id: Int ,$agencyId: Int ,$touristResourceIdPool: Int , $id: String!) {
        __typename
        updateAgencybid(input: {id: $id, patch: {,agencyId: $agencyId ,touristResourceIdPool: $touristResourceIdPool }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     