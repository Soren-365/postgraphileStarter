export const query = `query getConditionalCommandlogentry(, $id:  number , $atPublisher:  number ) {
        __typename
        commandlogentries(condition: {id: $id ,atPublisher: $atPublisher ,,,, })  {
          nodes {
            id atPublisher belongsToType resourceId logcommand timeCommand
 
          }
        }
      }`
      export default `${query}`
        