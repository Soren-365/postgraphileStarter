export const query = `query getConditionalCommandlogentry(, $undefined:  undefined ) {
        __typename
        commandlogentries(condition: {undefined: $undefined ,,,,, })  {
          nodes {
            id atPublisher belongsToType resourceId logcommand timeCommand

          }
        }
      }`
      export default `${query}`
        