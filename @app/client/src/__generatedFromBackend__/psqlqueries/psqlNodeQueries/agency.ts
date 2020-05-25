export const query = `query getNodeagency($nodeId: String!) {
        __typename
        agencyByNodeId(nodeId: $nodeId }) {
            id name contactId activeInsurance insuranceUrl insuranceExpery publisherId createdById isActive isPublic agencyBidId agencyFavoriteId agencyOfferId agencyDealId trustedPartnerIdPool extendedNetworkIdPool guideReviewInIdPool agencyReviewInIdPool touristReviewInIdPool guideReviewOutIdPool agencyReviewOutIdPool touristReviewOutIdPool agencyMediaLibraryId isRomanian bookingCalendarId specializedAgency lastModified timeCreated

        }
      }`
      export default `${query}`
     