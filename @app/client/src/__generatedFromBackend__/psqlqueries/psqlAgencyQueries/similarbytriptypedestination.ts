export const query = `query getAgencysimilarbytriptypedestinations($atAgency: Int!, $id: Int) {
        __typename
        similarbytriptypedestinations(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            destinationIds tripTypeName atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     