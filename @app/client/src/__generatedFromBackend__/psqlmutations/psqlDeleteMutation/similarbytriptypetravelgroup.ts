export const mutation = `mutation deleteSimilarbytriptypetravelgroup($travelGroupIds: [Int] , $id: String!) {
        __typename
        deleteSimilarbytriptypetravelgroup(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     