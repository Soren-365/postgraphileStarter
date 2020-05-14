export const query = `query getAgencysimilarbytriptypeevents($atAgency: Int!, $id: Int) {
        __typename
        similarbytriptypeevents(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            eventIds tripTypeName atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     