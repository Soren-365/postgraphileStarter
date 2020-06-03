export const mutation = `mutation updateGuideoffer($id: Int ,$guideResourceIdPool: [Int] ,$transportResourceIdPool: [Int] ,$hostResourceIdPool: [Int] ,$accomodationResourceIdPool: Int , $id: String!) {
        __typename
        updateGuideoffer(input: {id: $id, patch: {,guideResourceIdPool: $guideResourceIdPool ,transportResourceIdPool: $transportResourceIdPool ,hostResourceIdPool: $hostResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     