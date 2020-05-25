export const query = `query getAgencysimilarbytriptypedestinations($atAgency: Int!, $id: Int) {
        __typename
        similarbytriptypedestinations(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            destinationIds -- resource eventres  accomodationres  hostres  transportres  app_public.guideres  app_public.tourist?  travelgroup?]
 atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     