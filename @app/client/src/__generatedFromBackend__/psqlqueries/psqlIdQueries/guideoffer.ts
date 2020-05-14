export const query = `query Guideoffer($id: Int!) {
        __typename
        guideoffer(id: $id) {
            id guideResourceIdPool transportResourceIdPool hostResourceIdPool
 
        }
      }`
      export default `${query}`
