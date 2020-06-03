export const mutation = `mutation deleteSimilarbytriptypehost($hostIds: [Int] , $id: String!) {
        __typename
        deleteSimilarbytriptypehost(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     