export const query = `query getAgencyroomcalendarentries($atAgency: Int!, $id: Int) {
        __typename
        roomcalendarentries(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
     