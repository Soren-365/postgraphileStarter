export const query = `query getConditionalContact(, $undefined:  undefined ) {
        __typename
        contacts(condition: {undefined: $undefined ,,,,,,,,,,,,,, })  {
          nodes {
            id firstName lastName associatedCompany street city postCode country telephone email isCompany createdById belongsToType belongsToId timeCreated

          }
        }
      }`
      export default `${query}`
        