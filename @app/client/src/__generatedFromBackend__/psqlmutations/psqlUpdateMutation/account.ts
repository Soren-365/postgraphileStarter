export const mutation = `mutation updateAccount($id: Int ,$emailHash: String ,$passwordHash: String ,$sessionId: String , $clientMutationId: String!) {
        __typename
        updateAccount(input: {clientMutationId: $clientMutationId, patch: {,emailHash: $emailHash ,passwordHash: $passwordHash ,sessionId: $sessionId }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     