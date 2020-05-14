export const query = `query getAgencytourists($atAgency: Int!) {
        __typename
        tourists(condition: {atAgency: $atAgency }) {
          nodes {
            id,touristFirstName,touristLastName,contactId,publisherId,createdById,nativeLanguage,alternativeLanguage,touristOfferId,touristFavoriteId,touristBidId,touristDealId,guideReviewInIdPool,agencyReviewInIdPool,guideReviewOutIdPool,agencyReviewOutIdPool,timeCreated,atTravelGroup,isActive

          }
        }
      }`
      export default `${query}`
     