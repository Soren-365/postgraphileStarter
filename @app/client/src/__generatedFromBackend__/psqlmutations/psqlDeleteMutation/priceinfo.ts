export const mutation = `mutation deletePriceinfo($id: Int , $id: String!) {
        __typename
        deletePriceinfo(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     