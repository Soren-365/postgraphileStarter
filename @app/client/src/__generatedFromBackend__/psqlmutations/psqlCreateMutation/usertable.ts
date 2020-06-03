export const mutation = `mutation createUsertable(,$firstName: String ,$lastName: String ,$userEmail: String ,$atAgency: Int ,$isAdmin: Boolean ,$atGuide: Int ,$atTourist: Int ,$timeCreated: Datetime ,$isActive: Boolean ,$isRomanian: Boolean , $id: String!) {
        __typename
        createUsertable(input: {id: $id,usertable: {,firstName: $firstName ,lastName: $lastName ,userEmail: $userEmail ,atAgency: $atAgency ,isAdmin: $isAdmin ,atGuide: $atGuide ,atTourist: $atTourist ,timeCreated: $timeCreated ,isActive: $isActive ,isRomanian: $isRomanian }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     