export const mutation = `mutation createCalendarentry(, $clientMutationId: String!) {
        __typename
        createCalendarentry(input: {clientMutationId: $clientMutationId,calendarentry: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     