export const mutation = `mutation createAgencyoffer(,$tripsOfferesourceIdPool: [Int] ,$guideResourceIdPool: Int , $id: String!) {
        __typename
        createAgencyoffer(input: {id: $id,agencyoffer: {,tripsOfferesourceIdPool: $tripsOfferesourceIdPool ,guideResourceIdPool: $guideResourceIdPool }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     