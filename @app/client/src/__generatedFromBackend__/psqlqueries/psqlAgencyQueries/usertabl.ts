export const query = `query getAgencyusertabls($atAgency: Int!, $id: Int) {
        __typename
        usertabls(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
     