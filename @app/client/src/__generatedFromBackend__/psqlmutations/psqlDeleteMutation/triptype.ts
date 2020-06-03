export const mutation = `mutation deleteTriptype($id: Int! , $id: String!) {
        __typename
        deleteTriptype(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     