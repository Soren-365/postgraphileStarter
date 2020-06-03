export const mutation = `mutation deleteSimilarbytriptypeaccomodation($accomodationIds: [Int] , $id: String!) {
        __typename
        deleteSimilarbytriptypeaccomodation(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     