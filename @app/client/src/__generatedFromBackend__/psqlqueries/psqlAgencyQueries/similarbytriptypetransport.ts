export const query = `query getAgencysimilarbytriptypetransports($atAgency: Int!, $id: Int) {
        __typename
        similarbytriptypetransports(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            transportIds -- resource eventres  accomodationres  hostres  transportres  app_public.guideres  app_public.tourist?  travelgroup?]
 atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     