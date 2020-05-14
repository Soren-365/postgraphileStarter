export const mutation = `mutation createAssocaccomodation($assocAccomodationId: [Int] ,$accomodationId: Int ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAssocaccomodation(input: {clientMutationId: $clientMutationId,assocaccomodation: {assocAccomodationId: $assocAccomodationId ,accomodationId: $accomodationId ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     