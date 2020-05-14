export const mutation = `mutation createLanguagelevel(,$langauges: Languages! ,$langaugesSkill: Languageskill! ,$isActive: Boolean ,$createdById: Int! ,$publisherId: Int! , $clientMutationId: String!) {
        __typename
        createLanguagelevel(input: {clientMutationId: $clientMutationId,languagelevel: {,langauges: $langauges ,langaugesSkill: $langaugesSkill ,isActive: $isActive ,createdById: $createdById ,publisherId: $publisherId }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     