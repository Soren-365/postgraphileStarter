export const query = `query getNodetouristdeal($nodeId: String!) {
        __typename
        touristdealByNodeId(nodeId: $nodeId }) { 
            id tripsOfferResourceIdPool guideOfferResourceIdPool agenciesRomanianIdPool agenciesAbroadIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool

        }
      }`
      export default `${query}`
     