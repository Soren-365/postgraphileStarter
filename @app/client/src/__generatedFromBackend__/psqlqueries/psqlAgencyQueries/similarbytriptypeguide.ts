export const query = `query getAgencysimilarbytriptypeguides($atAgency: Int!, $id: Int) {
        __typename
        similarbytriptypeguides(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            guideIds tripTypeName atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     