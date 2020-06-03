export const query = `query getAgencyusertabls($atAgency: Int!, $id: Int) {
        __typename
        usertabls(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id firstName lastName userEmail atAgency isAdmin atGuide atTourist timeCreated isActive isRomanian

          }
        }
      }`
      export default `${query}`
     