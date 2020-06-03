export const mutation = `mutation updateTimerange($id: Int ,$fromTimestamp: Datetime ,$toTimestamp: Datetime ,$timeCreated: TIMESTAMP DEFAULT NOW , $id: String!) {
        __typename
        updateTimerange(input: {id: $id, patch: {,fromTimestamp: $fromTimestamp ,toTimestamp: $toTimestamp ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     