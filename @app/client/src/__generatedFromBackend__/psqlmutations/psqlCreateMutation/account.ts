export const mutation = `mutation createAccount(,$emailHash: String ,$passwordHash: String ,$sessionId: String , $clientMutationId: String!) {
        __typename
        createAccount(input: {clientMutationId: $clientMutationId,account: {,emailHash: $emailHash ,passwordHash: $passwordHash ,sessionId: $sessionId }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     