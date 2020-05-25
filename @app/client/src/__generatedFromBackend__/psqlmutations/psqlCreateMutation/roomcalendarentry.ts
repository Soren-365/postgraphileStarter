export const mutation = `mutation createRoomcalendarentry(, $clientMutationId: String!) {
        __typename
        createRoomcalendarentry(input: {clientMutationId: $clientMutationId,roomcalendarentry: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     