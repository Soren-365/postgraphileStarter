export const mutation = `mutation updateAccount($id: Int ,$emailHash: String ,$passwordHash: String ,$sessionId: String ,$logins: Int , $id: String!) {
        __typename
        updateAccount(input: {id: $id, patch: {,emailHash: $emailHash ,passwordHash: $passwordHash ,sessionId: $sessionId ,logins: $logins }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     