export const mutation = `mutation updateSimilarbytriptypetransport($transportIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateSimilarbytriptypetransport(input: {clientMutationId: $clientMutationId, patch: {transportIds: $transportIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     