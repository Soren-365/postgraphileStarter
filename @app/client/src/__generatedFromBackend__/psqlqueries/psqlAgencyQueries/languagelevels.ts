export const query = `query getAgencylanguagelevels($atAgency: Int!) {
        __typename
        languagelevels(condition: {atAgency: $atAgency }) {
          nodes {
            id,langauges,langaugesSkill,isActive,createdById,publisherId

          }
        }
      }`
      export default `${query}`
     