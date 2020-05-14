export const mutation = `mutation updateSimilarbytriptypeevent($eventIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateSimilarbytriptypeevent(input: {clientMutationId: $clientMutationId, patch: {eventIds: $eventIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     