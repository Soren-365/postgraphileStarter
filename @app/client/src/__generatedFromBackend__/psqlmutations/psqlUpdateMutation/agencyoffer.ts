export const mutation = `mutation updateAgencyoffer($id: Int ,$tripsOfferesourceIdPool: [Int] ,$guideResourceIdPool: Int , $id: String!) {
        __typename
        updateAgencyoffer(input: {id: $id, patch: {,tripsOfferesourceIdPool: $tripsOfferesourceIdPool ,guideResourceIdPool: $guideResourceIdPool }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     