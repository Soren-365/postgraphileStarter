export const mutation = `mutation updateAssocaccomodation($assocAccomodationId: [Int] ,$accomodationId: Int ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAssocaccomodation(input: {id: $id, patch: {assocAccomodationId: $assocAccomodationId ,accomodationId: $accomodationId ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     