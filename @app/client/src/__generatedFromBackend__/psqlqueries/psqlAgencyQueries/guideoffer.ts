export const query = `query getAgencyguideoffers($atAgency: Int!, $id: Int) {
        __typename
        guideoffers(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id guideResourceIdPool transportResourceIdPool hostResourceIdPool

          }
        }
      }`
      export default `${query}`
     