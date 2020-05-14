export const mutation = `mutation updateCommandlogentry($id: Int ,$atPublisher: Int! ,$belongsToType: Resourcetype ,$resourceId: Int ,$logcommand: Logcommand! ,$timeCommand: TIMESTAMP	default now( , $clientMutationId: String!) {
        __typename
        updateCommandlogentry(input: {clientMutationId: $clientMutationId, patch: {,atPublisher: $atPublisher ,belongsToType: $belongsToType ,resourceId: $resourceId ,logcommand: $logcommand ,timeCommand: $timeCommand }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     