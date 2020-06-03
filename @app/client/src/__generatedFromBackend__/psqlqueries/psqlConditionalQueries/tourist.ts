export const query = `query getConditionalTourist(, $undefined:  undefined ) {
        __typename
        tourists(condition: {undefined: $undefined ,,,,,,,,,,,,,,,,,,, })  {
          nodes {
            id touristFirstName touristLastName contactId publisherId createdById nativeLanguage alternativeLanguage touristOfferId touristFavoriteId touristBidId touristDealId guideReviewInIdPool agencyReviewInIdPool guideReviewOutIdPool agencyReviewOutIdPool timeCreated atTravelGroup isActive isRomanian

          }
        }
      }`
      export default `${query}`
        