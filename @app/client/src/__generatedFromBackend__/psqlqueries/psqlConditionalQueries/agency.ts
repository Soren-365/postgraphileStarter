export const query = `query getConditionalAgency(, $id:  number , $contactId:  number , $publisherId:  number , $createdById:  number , $agencyBidId:  number , $agencyFavoriteId:  number , $agencyOfferId:  number , $agencyDealId:  number , $agencyMediaLibraryId:  number , $bookingCalendarId:  number ) {
        __typename
        agencies(condition: {id: $id ,,contactId: $contactId ,,,,publisherId: $publisherId ,createdById: $createdById ,,,agencyBidId: $agencyBidId ,agencyFavoriteId: $agencyFavoriteId ,agencyOfferId: $agencyOfferId ,agencyDealId: $agencyDealId ,,,,,,,,,agencyMediaLibraryId: $agencyMediaLibraryId ,,bookingCalendarId: $bookingCalendarId ,,, })  {
          nodes {
            id name contactId activeInsurance insuranceUrl insuranceExpery publisherId createdById isActive isPublic agencyBidId agencyFavoriteId agencyOfferId agencyDealId trustedPartnerIdPool extendedNetworkIdPool guideReviewInIdPool agencyReviewInIdPool touristReviewInIdPool guideReviewOutIdPool agencyReviewOutIdPool touristReviewOutIdPool agencyMediaLibraryId isRomanian bookingCalendarId specializedAgency lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        