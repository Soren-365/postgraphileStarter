export const mutation = `mutation updateSimilarbytriptypeguide($guideIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateSimilarbytriptypeguide(input: {clientMutationId: $clientMutationId, patch: {guideIds: $guideIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     