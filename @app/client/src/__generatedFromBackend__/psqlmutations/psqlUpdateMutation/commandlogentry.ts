export const mutation = `mutation updateCommandlogentry($id: Int ,$atPublisher: Int! ,$belongsToType: Resourcetype ,$resourceId: Int ,$logcommand: Logcommand! ,$timeCommand: Datetime , $id: String!) {
        __typename
        updateCommandlogentry(input: {id: $id, patch: {,atPublisher: $atPublisher ,belongsToType: $belongsToType ,resourceId: $resourceId ,logcommand: $logcommand ,timeCommand: $timeCommand }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     