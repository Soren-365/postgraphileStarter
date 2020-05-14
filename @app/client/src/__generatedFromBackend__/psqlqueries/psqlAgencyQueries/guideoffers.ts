export const query = `query getAgencyguideoffers($atAgency: Int!) {
        __typename
        guideoffers(condition: {atAgency: $atAgency }) {
          nodes {
            id,guideResourceIdPool,transportResourceIdPool,hostResourceIdPool

          }
        }
      }`
      export default `${query}`
     