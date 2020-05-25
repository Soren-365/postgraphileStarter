export const query = `query getAgencydate_s($atAgency: Int!, $id: Int) {
        __typename
        date_s(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            useTimeStamp

          }
        }
      }`
      export default `${query}`
     