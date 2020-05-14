export const query = `query getConditionalUsertable(, $id:  number , $lastName:  string , $atAgency:  number , $atGuide:  number , $atTourist:  number ) {
        __typename
        usertables(condition: {id: $id ,,lastName: $lastName ,,atAgency: $atAgency ,,atGuide: $atGuide ,atTourist: $atTourist ,, })  {
          nodes {
            id firstName lastName userEmail atAgency isAdmin atGuide atTourist timeCreated isActive
 
          }
        }
      }`
      export default `${query}`
        