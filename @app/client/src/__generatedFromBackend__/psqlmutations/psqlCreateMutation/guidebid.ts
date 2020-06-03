export const mutation = `mutation createGuidebid(,$tripOfferIdPool: Int , $id: String!) {
        __typename
        createGuidebid(input: {id: $id,guidebid: {,tripOfferIdPool: $tripOfferIdPool }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     