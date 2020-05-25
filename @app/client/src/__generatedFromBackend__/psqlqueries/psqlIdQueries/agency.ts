export const query = `query Agency($id: Int!) {
        __typename
        agency(id: $id) {
            id name contactId activeInsurance insuranceUrl insuranceExpery publisherId createdById isActive isPublic agencyBidId agencyFavoriteId agencyOfferId agencyDealId trustedPartnerIdPool extendedNetworkIdPool guideReviewInIdPool agencyReviewInIdPool touristReviewInIdPool guideReviewOutIdPool agencyReviewOutIdPool touristReviewOutIdPool agencyMediaLibraryId isRomanian bookingCalendarId specializedAgency lastModified timeCreated

        }
      }`
      export default `${query}`
