export const mutation = `mutation updateSimilarbytriptypeevent($eventIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateSimilarbytriptypeevent(input: {id: $id, patch: {eventIds: $eventIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     