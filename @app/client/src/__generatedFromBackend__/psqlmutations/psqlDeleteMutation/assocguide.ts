export const mutation = `mutation deleteAssocguide($assocGuideId: [Int] , $clientMutationId: String!) {
        __typename
        deleteAssocguide(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     