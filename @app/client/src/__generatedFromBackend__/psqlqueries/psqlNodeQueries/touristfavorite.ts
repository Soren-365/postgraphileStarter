export const query = `query getNodetouristfavorite($nodeId: String!) {
        __typename
        touristfavoriteByNodeId(nodeId: $nodeId }) {
            id agenciesRomanianIdPool agenciesAbroadIdPool travelGroupResourceIdPool tripsOfferResourceIdPool guideResourceIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool hostResourceIdPool

        }
      }`
      export default `${query}`
     