export const mutation = `mutation updateSimilarbytriptypeaccomodation($accomodationIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateSimilarbytriptypeaccomodation(input: {id: $id, patch: {accomodationIds: $accomodationIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     