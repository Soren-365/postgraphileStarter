export const mutation = `mutation updateSimilarbytriptypetransport($transportIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateSimilarbytriptypetransport(input: {id: $id, patch: {transportIds: $transportIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     