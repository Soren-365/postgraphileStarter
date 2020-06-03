export const mutation = `mutation createAssocaccomodation($assocAccomodationId: [Int] ,$accomodationId: Int ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAssocaccomodation(input: {id: $id,assocaccomodation: {assocAccomodationId: $assocAccomodationId ,accomodationId: $accomodationId ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     