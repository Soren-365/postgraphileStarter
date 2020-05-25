export const query = `query getAgencysimilarbytriptypetravelgroups($atAgency: Int!, $id: Int) {
        __typename
        similarbytriptypetravelgroups(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            travelGroupIds -- resource eventres  accomodationres  hostres  transportres  app_public.guideres  app_public.tourist?  travelgroup?]
 atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     