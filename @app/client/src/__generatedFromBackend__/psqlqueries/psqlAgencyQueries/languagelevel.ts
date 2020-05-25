export const query = `query getAgencylanguagelevels($atAgency: Int!, $id: Int) {
        __typename
        languagelevels(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id langauges langaugesSkill isActive createdById publisherId timeCreated

          }
        }
      }`
      export default `${query}`
     