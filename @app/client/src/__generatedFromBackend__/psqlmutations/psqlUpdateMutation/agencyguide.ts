export const mutation = `mutation updateAgencyguide($agencyId: Int! ,$guideId: Int! ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAgencyguide(input: {id: $id, patch: {agencyId: $agencyId ,guideId: $guideId ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     