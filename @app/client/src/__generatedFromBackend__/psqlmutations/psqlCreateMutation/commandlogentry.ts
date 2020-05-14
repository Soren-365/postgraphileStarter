export const mutation = `mutation createCommandlogentry(,$atPublisher: Int! ,$belongsToType: Resourcetype ,$resourceId: Int ,$logcommand: Logcommand! ,$timeCommand: TIMESTAMP	default now( , $clientMutationId: String!) {
        __typename
        createCommandlogentry(input: {clientMutationId: $clientMutationId,commandlogentry: {,atPublisher: $atPublisher ,belongsToType: $belongsToType ,resourceId: $resourceId ,logcommand: $logcommand ,timeCommand: $timeCommand }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     