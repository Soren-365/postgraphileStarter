export const mutation = `mutation createUsertabl(,$firstName: String ,$lastName: String ,$userEmail: String ,$atAgency: Int ,$isAdmin: Boolean ,$atGuide: Int ,$atTourist: Int ,$timeCreated: Datetime ,$isActive: Boolean ,$isRomanian: Boolean , $clientMutationId: String!) {
        __typename
        createUsertabl(input: {clientMutationId: $clientMutationId,usertabl: {,firstName: $firstName ,lastName: $lastName ,userEmail: $userEmail ,atAgency: $atAgency ,isAdmin: $isAdmin ,atGuide: $atGuide ,atTourist: $atTourist ,timeCreated: $timeCreated ,isActive: $isActive ,isRomanian: $isRomanian }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     