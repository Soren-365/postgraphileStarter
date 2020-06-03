




export const mutation = `mutation updateAssochost($assocHostId: [Int] ,$hostId: Int ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAssochost(input: {id: $id, patch: {assocHostId: $assocHostId ,hostId: $hostId ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
