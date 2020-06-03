export const mutation = `mutation createTouristoffer(,$touristResourceIdPool: Int , $id: String!) {
        __typename
        createTouristoffer(input: {id: $id,touristoffer: {,touristResourceIdPool: $touristResourceIdPool }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     