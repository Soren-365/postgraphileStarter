export const mutation = `mutation deleteSimilarbytriptypetransport($transportIds: [Int] , $id: String!) {
        __typename
        deleteSimilarbytriptypetransport(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     