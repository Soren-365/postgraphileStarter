export const mutation = `mutation deleteSimilarbytriptypeguide($guideIds: [Int] , $id: String!) {
        __typename
        deleteSimilarbytriptypeguide(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     