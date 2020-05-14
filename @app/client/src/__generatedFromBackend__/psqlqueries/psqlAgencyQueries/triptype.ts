export const query = `query getAgencytriptypes($atAgency: Int!, $id: Int) {
        __typename
        triptypes(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id tripTypeName atAgency lastModified timeCreated

          }
        }
      }`
      export default `${query}`
     