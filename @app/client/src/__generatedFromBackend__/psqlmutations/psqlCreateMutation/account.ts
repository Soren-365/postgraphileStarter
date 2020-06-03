export const mutation = `mutation createAccount(,$emailHash: String ,$passwordHash: String ,$sessionId: String ,$logins: Int , $id: String!) {
        __typename
        createAccount(input: {id: $id,account: {,emailHash: $emailHash ,passwordHash: $passwordHash ,sessionId: $sessionId ,logins: $logins }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     