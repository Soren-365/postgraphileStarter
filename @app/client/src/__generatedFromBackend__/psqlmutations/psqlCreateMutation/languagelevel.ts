export const mutation = `mutation createLanguagelevel(,$langauges: Languages! ,$langaugesSkill: Languageskill! ,$isActive: Boolean ,$createdById: Int! ,$publisherId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createLanguagelevel(input: {clientMutationId: $clientMutationId,languagelevel: {,langauges: $langauges ,langaugesSkill: $langaugesSkill ,isActive: $isActive ,createdById: $createdById ,publisherId: $publisherId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     