export const query = `query getAgencysimilarbytriptypeaccomodations($atAgency: Int!, $id: Int) {
        __typename
        similarbytriptypeaccomodations(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            accomodationIds tripTypeName atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     