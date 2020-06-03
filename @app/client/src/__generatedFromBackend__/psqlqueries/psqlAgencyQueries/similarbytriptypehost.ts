export const query = `query getAgencysimilarbytriptypehosts($atAgency: Int!, $id: Int) {
        __typename
        similarbytriptypehosts(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            hostIds tripTypeName atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     