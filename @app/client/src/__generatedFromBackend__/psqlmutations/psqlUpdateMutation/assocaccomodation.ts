export const mutation = `mutation updateAssocaccomodation($assocAccomodationId: [Int] ,$accomodationId: Int ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAssocaccomodation(input: {clientMutationId: $clientMutationId, patch: {assocAccomodationId: $assocAccomodationId ,accomodationId: $accomodationId ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     