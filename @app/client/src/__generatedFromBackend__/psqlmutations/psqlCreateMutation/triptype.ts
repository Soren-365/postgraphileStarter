export const mutation = `mutation createTriptype(,$tripTypeName: String! ,$atAgency: Int ,$lastModified: Datetime ,$timeCreated: Datetime , $id: String!) {
        __typename
        createTriptype(input: {id: $id,triptype: {,tripTypeName: $tripTypeName ,atAgency: $atAgency ,lastModified: $lastModified ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     