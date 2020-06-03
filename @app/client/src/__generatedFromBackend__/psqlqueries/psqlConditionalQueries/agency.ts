export const query = `query getConditionalAgency(, $undefined:  undefined ) {
        __typename
        agencies(condition: {undefined: $undefined ,,,,,,,,,,,,,,,,,,,,,,,,,,, })  {
          nodes {
            id name contactId activeInsurance insuranceUrl insuranceExpery publisherId createdById isActive isPublic agencyBidId agencyFavoriteId agencyOfferId agencyDealId trustedPartnerIdPool extendedNetworkIdPool guideReviewInIdPool agencyReviewInIdPool touristReviewInIdPool guideReviewOutIdPool agencyReviewOutIdPool touristReviewOutIdPool agencyMediaLibraryId isRomanian bookingCalendarId specializedAgency lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        