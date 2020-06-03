export const query = `query getNodetouristbid($nodeId: String!) {
        __typename
        touristbidByNodeId(nodeId: $nodeId }) {
            id tripOfferResourceIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool hostResourceIdPool

        }
      }`
      export default `${query}`
     