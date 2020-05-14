export const query = `query Usertable($id: Int!) {
        __typename
        usertable(id: $id) {
            id firstName lastName userEmail atAgency isAdmin atGuide atTourist timeCreated isActive
 
        }
      }`
      export default `${query}`
