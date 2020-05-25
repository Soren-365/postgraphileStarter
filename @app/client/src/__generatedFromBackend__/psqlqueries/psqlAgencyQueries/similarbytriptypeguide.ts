export const query = `query getAgencysimilarbytriptypeguides($atAgency: Int!, $id: Int) {
        __typename
        similarbytriptypeguides(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            guideIds -- resource eventres  accomodationres  hostres  transportres  app_public.guideres  app_public.tourist?  travelgroup?]
 atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     