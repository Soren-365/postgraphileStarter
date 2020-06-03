export const mutation = `mutation updateAssocevent($assocEventId: [Int] ,$eventId: Int ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAssocevent(input: {id: $id, patch: {assocEventId: $assocEventId ,eventId: $eventId ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     