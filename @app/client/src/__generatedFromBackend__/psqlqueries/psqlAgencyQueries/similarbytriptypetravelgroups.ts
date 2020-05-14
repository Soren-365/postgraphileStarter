export const query = `query getAgencysimilarbytriptypetravelgroups($atAgency: Int!) {
        __typename
        similarbytriptypetravelgroups(condition: {atAgency: $atAgency }) {
          nodes {
            travelGroupIds,tripTypeName,atAgency,timeCreated

          }
        }
      }`
      export default `${query}`
     