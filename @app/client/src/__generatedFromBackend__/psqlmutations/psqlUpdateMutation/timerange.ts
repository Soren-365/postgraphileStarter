export const mutation = `mutation updateTimerange($id: Int ,$fromTimestamp: Datetime ,$toTimestamp: Datetime ,$timeCreated: TIMESTAMP DEFAULT NOW( , $clientMutationId: String!) {
        __typename
        updateTimerange(input: {clientMutationId: $clientMutationId, patch: {,fromTimestamp: $fromTimestamp ,toTimestamp: $toTimestamp ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     