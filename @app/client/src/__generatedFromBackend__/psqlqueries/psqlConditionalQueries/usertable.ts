export const query = `query getConditionalUsertable(, $undefined:  undefined ) {
        __typename
        usertables(condition: {,,,undefined: $undefined ,,,,,,, })  {
          nodes {
            id firstName lastName userEmail atAgency isAdmin atGuide atTourist timeCreated isActive isRomanian

          }
        }
      }`
      export default `${query}`
        