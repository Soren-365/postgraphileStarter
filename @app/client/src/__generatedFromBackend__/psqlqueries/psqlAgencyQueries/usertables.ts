export const query = `query getAgencyusertables($atAgency: Int!) {
        __typename
        usertables(condition: {atAgency: $atAgency }) {
          nodes {
            id,firstName,lastName,userEmail,atAgency,isAdmin,atGuide,atTourist,timeCreated,isActive

          }
        }
      }`
      export default `${query}`
     