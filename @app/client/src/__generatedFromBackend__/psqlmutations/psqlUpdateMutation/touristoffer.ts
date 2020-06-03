export const mutation = `mutation updateTouristoffer($id: Int ,$touristResourceIdPool: Int , $id: String!) {
        __typename
        updateTouristoffer(input: {id: $id, patch: {,touristResourceIdPool: $touristResourceIdPool }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     