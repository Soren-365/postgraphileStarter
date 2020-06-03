export const query = `query getConditionalLanguagelevel(, $undefined:  undefined ) {
        __typename
        languagelevels(condition: {undefined: $undefined ,,,,,, })  {
          nodes {
            id langauges langaugesSkill isActive createdById publisherId timeCreated

          }
        }
      }`
      export default `${query}`
        