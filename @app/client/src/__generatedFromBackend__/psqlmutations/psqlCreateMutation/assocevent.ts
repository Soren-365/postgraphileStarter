export const mutation = `mutation createAssocevent($assocEventId: [Int] ,$eventId: Int ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAssocevent(input: {id: $id,assocevent: {assocEventId: $assocEventId ,eventId: $eventId ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     