export const query = `query getNodeagencydeal($nodeId: String!) {
        __typename
        agencydealByNodeId(nodeId: $nodeId }) {
            id tripOfferResourceIdPool guideResourceIdPool touristResouceIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool

        }
      }`
      export default `${query}`
     