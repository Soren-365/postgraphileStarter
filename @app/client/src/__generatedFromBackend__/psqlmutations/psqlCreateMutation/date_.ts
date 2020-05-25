export const mutation = `mutation createDate_($useTimeStamp: Boolean! , $clientMutationId: String!) {
        __typename
        createDate_(input: {clientMutationId: $clientMutationId,date_: {useTimeStamp: $useTimeStamp }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     