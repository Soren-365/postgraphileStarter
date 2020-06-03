export const mutation = `mutation updateUsertable($id: Int! ,$firstName: String ,$lastName: String ,$userEmail: String ,$atAgency: Int ,$isAdmin: Boolean ,$atGuide: Int ,$atTourist: Int ,$timeCreated: Datetime ,$isActive: Boolean ,$isRomanian: Boolean , $id: String!) {
        __typename
        updateUsertable(input: {id: $id, patch: {,firstName: $firstName ,lastName: $lastName ,userEmail: $userEmail ,atAgency: $atAgency ,isAdmin: $isAdmin ,atGuide: $atGuide ,atTourist: $atTourist ,timeCreated: $timeCreated ,isActive: $isActive ,isRomanian: $isRomanian }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     