export const mutation = `mutation updateSimilarbytriptypetravelgroup($travelGroupIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateSimilarbytriptypetravelgroup(input: {clientMutationId: $clientMutationId, patch: {travelGroupIds: $travelGroupIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     