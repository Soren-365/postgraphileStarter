export const query = `query getNodelanguagelevel($nodeId: String!) {
        __typename
        languagelevelByNodeId(nodeId: $nodeId }) {
            id langauges langaugesSkill isActive createdById publisherId timeCreated

        }
      }`
      export default `${query}`
     