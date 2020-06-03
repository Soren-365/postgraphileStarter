export const mutation = `mutation deleteSimilarbytriptypeevent($eventIds: [Int] , $id: String!) {
        __typename
        deleteSimilarbytriptypeevent(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     