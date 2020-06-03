export const mutation = `mutation deleteAssocguide($assocGuideId: [Int] , $id: String!) {
        __typename
        deleteAssocguide(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     