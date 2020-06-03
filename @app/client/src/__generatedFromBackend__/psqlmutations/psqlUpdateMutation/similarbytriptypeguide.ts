export const mutation = `mutation updateSimilarbytriptypeguide($guideIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateSimilarbytriptypeguide(input: {id: $id, patch: {guideIds: $guideIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     