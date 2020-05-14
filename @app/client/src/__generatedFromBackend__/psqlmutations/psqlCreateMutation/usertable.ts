export const mutation = `mutation createUsertable(,$firstName: String ,$lastName: String ,$userEmail: String ,$atAgency: Int ,$isAdmin: Boolean ,$atGuide: Int ,$atTourist: Int ,$timeCreated: Datetime ,$isActive: Boolean , $clientMutationId: String!) {
        __typename
        createUsertable(input: {clientMutationId: $clientMutationId,usertable: {,firstName: $firstName ,lastName: $lastName ,userEmail: $userEmail ,atAgency: $atAgency ,isAdmin: $isAdmin ,atGuide: $atGuide ,atTourist: $atTourist ,timeCreated: $timeCreated ,isActive: $isActive }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     