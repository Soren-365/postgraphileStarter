export const mutation = `mutation updateUsertabl($id: Int! ,$firstName: String ,$lastName: String ,$userEmail: String ,$atAgency: Int ,$isAdmin: Boolean ,$atGuide: Int ,$atTourist: Int ,$timeCreated: Datetime ,$isActive: Boolean ,$isRomanian: Boolean , $clientMutationId: String!) {
        __typename
        updateUsertabl(input: {clientMutationId: $clientMutationId, patch: {,firstName: $firstName ,lastName: $lastName ,userEmail: $userEmail ,atAgency: $atAgency ,isAdmin: $isAdmin ,atGuide: $atGuide ,atTourist: $atTourist ,timeCreated: $timeCreated ,isActive: $isActive ,isRomanian: $isRomanian }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     