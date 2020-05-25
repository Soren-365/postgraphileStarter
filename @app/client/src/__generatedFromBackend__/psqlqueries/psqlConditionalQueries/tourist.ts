export const query = `query getConditionalTourist(, $id:  number , $contactId:  number , $publisherId:  number , $createdById:  number , $touristOfferId:  number , $touristFavoriteId:  number , $touristBidId:  number , $touristDealId:  number ) {
        __typename
        tourists(condition: {id: $id ,,,contactId: $contactId ,publisherId: $publisherId ,createdById: $createdById ,,,touristOfferId: $touristOfferId ,touristFavoriteId: $touristFavoriteId ,touristBidId: $touristBidId ,touristDealId: $touristDealId ,,,,,,,, })  {
          nodes {
            id touristFirstName touristLastName contactId publisherId createdById nativeLanguage alternativeLanguage touristOfferId touristFavoriteId touristBidId touristDealId guideReviewInIdPool agencyReviewInIdPool guideReviewOutIdPool agencyReviewOutIdPool timeCreated atTravelGroup isActive isRomanian

          }
        }
      }`
      export default `${query}`
        