export const mutation = `mutation createGuideoffer(,$guideResourceIdPool: [Int] ,$transportResourceIdPool: [Int] ,$hostResourceIdPool: [Int] ,$accomodationResourceIdPool: Int , $id: String!) {
        __typename
        createGuideoffer(input: {id: $id,guideoffer: {,guideResourceIdPool: $guideResourceIdPool ,transportResourceIdPool: $transportResourceIdPool ,hostResourceIdPool: $hostResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     