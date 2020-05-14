export const mutation = `mutation updateLanguagelevel($id: Int ,$langauges: Languages! ,$langaugesSkill: Languageskill! ,$isActive: Boolean ,$createdById: Int! ,$publisherId: Int! , $clientMutationId: String!) {
        __typename
        updateLanguagelevel(input: {clientMutationId: $clientMutationId, patch: {,langauges: $langauges ,langaugesSkill: $langaugesSkill ,isActive: $isActive ,createdById: $createdById ,publisherId: $publisherId }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     