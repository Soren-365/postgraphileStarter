export const mutation = `mutation updateUsertable($id: Int! ,$firstName: String ,$lastName: String ,$userEmail: String ,$atAgency: Int ,$isAdmin: Boolean ,$atGuide: Int ,$atTourist: Int ,$timeCreated: Datetime ,$isActive: Boolean , $clientMutationId: String!) {
        __typename
        updateUsertable(input: {clientMutationId: $clientMutationId, patch: {,firstName: $firstName ,lastName: $lastName ,userEmail: $userEmail ,atAgency: $atAgency ,isAdmin: $isAdmin ,atGuide: $atGuide ,atTourist: $atTourist ,timeCreated: $timeCreated ,isActive: $isActive }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     