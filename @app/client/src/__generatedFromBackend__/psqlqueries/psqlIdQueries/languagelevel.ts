export const query = `query Languagelevel($id: Int!) {
        __typename
        languagelevel(id: $id) {
            id langauges langaugesSkill isActive createdById publisherId
 
        }
      }`
      export default `${query}`
