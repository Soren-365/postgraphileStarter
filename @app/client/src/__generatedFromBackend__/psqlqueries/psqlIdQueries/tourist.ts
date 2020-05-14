export const query = `query Tourist($id: Int!) {
        __typename
        tourist(id: $id) {
            id touristFirstName touristLastName contactId publisherId createdById nativeLanguage alternativeLanguage touristOfferId touristFavoriteId touristBidId touristDealId guideReviewInIdPool agencyReviewInIdPool guideReviewOutIdPool agencyReviewOutIdPool timeCreated atTravelGroup isActive
 
        }
      }`
      export default `${query}`
