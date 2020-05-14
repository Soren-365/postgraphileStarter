export const mutation = `mutation createAgency(,$name: String! ,$contactId: Int ,$activeInsurance: Boolean! ,$insuranceUrl: String ,$insuranceExpery: Date ,$publisherId: Int ,$createdById: Int! ,$isActive: Boolean ,$isPublic: Boolean ,$agencyBidId: Int ,$agencyFavoriteId: Int ,$agencyOfferId: Int ,$agencyDealId: Int ,$trustedPartnerIdPool: [Int] ,$extendedNetworkIdPool: [Int] ,$guideReviewInIdPool: [Int] ,$agencyReviewInIdPool: [Int] ,$touristReviewInIdPool: [Int] ,$guideReviewOutIdPool: [Int] ,$agencyReviewOutIdPool: [Int] ,$touristReviewOutIdPool: [Int] ,$agencyMediaLibraryId: Int ,$isRomanian: Boolean! ,$bookingCalendarId: Int ,$specializedAgency: Resourcetype ,$lastModified: Datetime , $clientMutationId: String!) {
        __typename
        createAgency(input: {clientMutationId: $clientMutationId,agency: {,name: $name ,contactId: $contactId ,activeInsurance: $activeInsurance ,insuranceUrl: $insuranceUrl ,insuranceExpery: $insuranceExpery ,publisherId: $publisherId ,createdById: $createdById ,isActive: $isActive ,isPublic: $isPublic ,agencyBidId: $agencyBidId ,agencyFavoriteId: $agencyFavoriteId ,agencyOfferId: $agencyOfferId ,agencyDealId: $agencyDealId ,trustedPartnerIdPool: $trustedPartnerIdPool ,extendedNetworkIdPool: $extendedNetworkIdPool ,guideReviewInIdPool: $guideReviewInIdPool ,agencyReviewInIdPool: $agencyReviewInIdPool ,touristReviewInIdPool: $touristReviewInIdPool ,guideReviewOutIdPool: $guideReviewOutIdPool ,agencyReviewOutIdPool: $agencyReviewOutIdPool ,touristReviewOutIdPool: $touristReviewOutIdPool ,agencyMediaLibraryId: $agencyMediaLibraryId ,isRomanian: $isRomanian ,bookingCalendarId: $bookingCalendarId ,specializedAgency: $specializedAgency ,lastModified: $lastModified }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     