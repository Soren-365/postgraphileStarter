export const mutation = `mutation deleteSimilarbytriptypedestination($destinationIds: [Int] , $id: String!) {
        __typename
        deleteSimilarbytriptypedestination(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     