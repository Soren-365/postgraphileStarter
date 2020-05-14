export const query = `query getNodetourist($nodeId: String!) {
        __typename
        touristByNodeId(nodeId: $nodeId }) { 
            id touristFirstName touristLastName contactId publisherId createdById nativeLanguage alternativeLanguage touristOfferId touristFavoriteId touristBidId touristDealId guideReviewInIdPool agencyReviewInIdPool guideReviewOutIdPool agencyReviewOutIdPool timeCreated atTravelGroup isActive

        }
      }`
      export default `${query}`
     