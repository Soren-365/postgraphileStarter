export const mutation = `mutation updateAgencyuser($agencyId: Int ,$userId: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAgencyuser(input: {id: $id, patch: {agencyId: $agencyId ,userId: $userId ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     