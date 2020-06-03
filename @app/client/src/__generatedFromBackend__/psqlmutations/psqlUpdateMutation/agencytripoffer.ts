export const mutation = `mutation updateAgencytripoffer($agencyId: Int! ,$tripOfferId: Int! ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAgencytripoffer(input: {id: $id, patch: {agencyId: $agencyId ,tripOfferId: $tripOfferId ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     