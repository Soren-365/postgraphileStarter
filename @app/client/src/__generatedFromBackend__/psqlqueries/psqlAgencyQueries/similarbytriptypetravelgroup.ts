export const query = `query getAgencysimilarbytriptypetravelgroups($atAgency: Int!, $id: Int) {
        __typename
        similarbytriptypetravelgroups(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            travelGroupIds tripTypeName atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     