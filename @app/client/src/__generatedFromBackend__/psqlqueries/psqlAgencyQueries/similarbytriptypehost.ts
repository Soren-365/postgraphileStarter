export const query = `query getAgencysimilarbytriptypehosts($atAgency: Int!, $id: Int) {
        __typename
        similarbytriptypehosts(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            hostIds -- resource eventres  accomodationres  hostres  transportres  app_public.guideres  app_public.tourist?  travelgroup?]
 atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     