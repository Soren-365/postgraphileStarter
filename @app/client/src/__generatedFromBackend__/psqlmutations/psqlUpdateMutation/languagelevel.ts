export const mutation = `mutation updateLanguagelevel($id: Int ,$langauges: Languages! ,$langaugesSkill: Languageskill! ,$isActive: Boolean ,$createdById: Int! ,$publisherId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateLanguagelevel(input: {clientMutationId: $clientMutationId, patch: {,langauges: $langauges ,langaugesSkill: $langaugesSkill ,isActive: $isActive ,createdById: $createdById ,publisherId: $publisherId ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     