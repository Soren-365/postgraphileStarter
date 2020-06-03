export const mutation = `mutation deleteAssoctransport($assocTransportId: [Int] , $id: String!) {
        __typename
        deleteAssoctransport(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     