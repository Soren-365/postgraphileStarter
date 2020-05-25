export const query = `query getConditionalContact(, $id:  number , $createdById:  number , $belongsToType:  string ) {
        __typename
        contacts(condition: {id: $id ,,,,,,,,,,,createdById: $createdById ,belongsToType: $belongsToType ,, })  {
          nodes {
            id firstName lastName associatedCompany street city postCode country telephone email isCompany createdById belongsToType belongsToId timeCreated

          }
        }
      }`
      export default `${query}`
        