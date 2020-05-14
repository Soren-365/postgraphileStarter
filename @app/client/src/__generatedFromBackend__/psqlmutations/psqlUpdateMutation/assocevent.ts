export const mutation = `mutation updateAssocevent($assocEventId: [Int] ,$eventId: Int ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAssocevent(input: {clientMutationId: $clientMutationId, patch: {assocEventId: $assocEventId ,eventId: $eventId ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     