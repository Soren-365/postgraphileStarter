export const query = `query getAgencylibraries($atAgency: Int!) {
        __typename
        libraries(condition: {atAgency: $atAgency }) {
          nodes {
            id,bookCathegories,numberOfBook,userId

          }
        }
      }`
      export default `${query}`
     