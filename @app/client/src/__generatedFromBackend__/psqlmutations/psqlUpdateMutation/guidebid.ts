export const mutation = `mutation updateGuidebid($id: Int ,$tripOfferIdPool: Int , $id: String!) {
        __typename
        updateGuidebid(input: {id: $id, patch: {,tripOfferIdPool: $tripOfferIdPool }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     