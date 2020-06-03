export const query = `query getConditionalUsertabl(, $undefined:  undefined ) {
        __typename
        usertabls(condition: {,,undefined: $undefined ,,,,,,,, })  {
          nodes {
            id firstName lastName userEmail atAgency isAdmin atGuide atTourist timeCreated isActive isRomanian

          }
        }
      }`
      export default `${query}`
        