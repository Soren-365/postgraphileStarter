export const query = `query getAgencytourists($atAgency: Int!, $id: Int) {
        __typename
        tourists(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id touristFirstName touristLastName contactId publisherId createdById nativeLanguage alternativeLanguage touristOfferId touristFavoriteId touristBidId touristDealId guideReviewInIdPool agencyReviewInIdPool guideReviewOutIdPool agencyReviewOutIdPool timeCreated atTravelGroup isActive

          }
        }
      }`
      export default `${query}`
     