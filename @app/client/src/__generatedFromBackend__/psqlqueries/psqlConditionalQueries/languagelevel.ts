export const query = `query getConditionalLanguagelevel(, $id:  number , $createdById:  number , $publisherId:  number ) {
        __typename
        languagelevels(condition: {id: $id ,,,,createdById: $createdById ,publisherId: $publisherId , })  {
          nodes {
            id langauges langaugesSkill isActive createdById publisherId
 
          }
        }
      }`
      export default `${query}`
        