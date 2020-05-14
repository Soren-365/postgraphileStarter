export const mutation = `mutation updateGuideoffer($id: Int ,$guideResourceIdPool: [Int] ,$transportResourceIdPool: [Int] ,$hostResourceIdPool: [Int] , $clientMutationId: String!) {
        __typename
        updateGuideoffer(input: {clientMutationId: $clientMutationId, patch: {,guideResourceIdPool: $guideResourceIdPool ,transportResourceIdPool: $transportResourceIdPool ,hostResourceIdPool: $hostResourceIdPool }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     