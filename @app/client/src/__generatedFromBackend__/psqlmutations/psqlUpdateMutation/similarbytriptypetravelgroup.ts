export const mutation = `mutation updateSimilarbytriptypetravelgroup($travelGroupIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateSimilarbytriptypetravelgroup(input: {id: $id, patch: {travelGroupIds: $travelGroupIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     