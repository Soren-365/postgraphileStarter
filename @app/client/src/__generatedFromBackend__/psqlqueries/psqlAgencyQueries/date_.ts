export const query = `query getAgencydate_s($atAgency: Int!, $id: Int) {
        __typename
        date_s(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            useTimeStamp timeStamp year month day allDayEvent hour minute timeCreated

          }
        }
      }`
      export default `${query}`
     