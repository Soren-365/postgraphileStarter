export const query = `query getConditionalCommandlogentry(, $id:  number ) {
        __typename
        commandlogentries(condition: {id: $id ,,,, })  {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
        