export const mutation = `mutation createAgencybid(,$agencyId: Int ,$touristResourceIdPool: Int , $id: String!) {
        __typename
        createAgencybid(input: {id: $id,agencybid: {,agencyId: $agencyId ,touristResourceIdPool: $touristResourceIdPool }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     