export const query = `query getAgencysimilarbytriptypeevents($atAgency: Int!, $id: Int) {
        __typename
        similarbytriptypeevents(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            eventIds -- resource eventres  accomodationres  hostres  transportres  app_public.guideres  app_public.tourist?  travelgroup?]
 atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     