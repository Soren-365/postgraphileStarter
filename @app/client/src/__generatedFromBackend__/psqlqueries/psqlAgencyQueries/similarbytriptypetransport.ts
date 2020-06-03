export const query = `query getAgencysimilarbytriptypetransports($atAgency: Int!, $id: Int) {
        __typename
        similarbytriptypetransports(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            transportIds tripTypeName atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     