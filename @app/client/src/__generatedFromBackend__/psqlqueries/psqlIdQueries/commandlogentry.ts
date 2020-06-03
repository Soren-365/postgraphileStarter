export const query = `query Commandlogentry($id: Int!) {
        __typename
        commandlogentry(id: $id) {
            id atPublisher belongsToType resourceId logcommand timeCommand

        }
      }`
      export default `${query}`
