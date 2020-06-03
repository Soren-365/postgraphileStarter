export const mutation = `mutation updateLanguagelevel($id: Int ,$langauges: Languages! ,$langaugesSkill: Languageskill! ,$isActive: Boolean ,$createdById: Int! ,$publisherId: Int! ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateLanguagelevel(input: {id: $id, patch: {,langauges: $langauges ,langaugesSkill: $langaugesSkill ,isActive: $isActive ,createdById: $createdById ,publisherId: $publisherId ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     