export const mutation = `mutation updateAssocdestination($assocDestinationId: [Int] ,$destinationId: Int ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAssocdestination(input: {id: $id, patch: {assocDestinationId: $assocDestinationId ,destinationId: $destinationId ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     