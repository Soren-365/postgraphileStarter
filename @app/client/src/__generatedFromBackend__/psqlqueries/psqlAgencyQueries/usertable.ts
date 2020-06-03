export const query = `query getAgencyusertables($atAgency: Int!, $id: Int) {
        __typename
        usertables(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id firstName lastName userEmail atAgency isAdmin atGuide atTourist timeCreated isActive isRomanian

          }
        }
      }`
      export default `${query}`
     