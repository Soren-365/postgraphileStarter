export const mutation = `mutation createTourist(,$touristFirstName: String ,$touristLastName: String ,$contactId: Int! ,$publisherId: Int! ,$createdById: Int! ,$nativeLanguage: Languages ,$alternativeLanguage: Languages ,$touristOfferId: Int! ,$touristFavoriteId: Int! ,$touristBidId: Int! ,$touristDealId: Int! ,$guideReviewInIdPool: [Int] ,$agencyReviewInIdPool: [Int] ,$guideReviewOutIdPool: [Int] ,$agencyReviewOutIdPool: [Int] ,$timeCreated: Datetime ,$atTravelGroup: Int ,$isActive: Boolean ,$isRomanian: Boolean! , $clientMutationId: String!) {
        __typename
        createTourist(input: {clientMutationId: $clientMutationId,tourist: {,touristFirstName: $touristFirstName ,touristLastName: $touristLastName ,contactId: $contactId ,publisherId: $publisherId ,createdById: $createdById ,nativeLanguage: $nativeLanguage ,alternativeLanguage: $alternativeLanguage ,touristOfferId: $touristOfferId ,touristFavoriteId: $touristFavoriteId ,touristBidId: $touristBidId ,touristDealId: $touristDealId ,guideReviewInIdPool: $guideReviewInIdPool ,agencyReviewInIdPool: $agencyReviewInIdPool ,guideReviewOutIdPool: $guideReviewOutIdPool ,agencyReviewOutIdPool: $agencyReviewOutIdPool ,timeCreated: $timeCreated ,atTravelGroup: $atTravelGroup ,isActive: $isActive ,isRomanian: $isRomanian }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     