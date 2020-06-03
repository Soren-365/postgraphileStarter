export const mutation = `mutation updateTriptype($id: Int! ,$tripTypeName: String! ,$atAgency: Int ,$lastModified: Datetime ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateTriptype(input: {id: $id, patch: {,tripTypeName: $tripTypeName ,atAgency: $atAgency ,lastModified: $lastModified ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     