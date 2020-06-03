export const mutation = `mutation createCommandlogentry(,$atPublisher: Int! ,$belongsToType: Resourcetype ,$resourceId: Int ,$logcommand: Logcommand! ,$timeCommand: Datetime , $id: String!) {
        __typename
        createCommandlogentry(input: {id: $id,commandlogentry: {,atPublisher: $atPublisher ,belongsToType: $belongsToType ,resourceId: $resourceId ,logcommand: $logcommand ,timeCommand: $timeCommand }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     