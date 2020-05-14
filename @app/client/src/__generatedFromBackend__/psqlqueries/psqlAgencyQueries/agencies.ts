export const query = `query getAgencyagencies($atAgency: Int!) {
        __typename
        agencies(condition: {atAgency: $atAgency }) {
          nodes {
            id,name,contactId,activeInsurance,insuranceUrl,insuranceExpery,publisherId,createdById,isActive,isPublic,agencyBidId,agencyFavoriteId,agencyOfferId,agencyDealId,trustedPartnerIdPool,extendedNetworkIdPool,guideReviewInIdPool,agencyReviewInIdPool,touristReviewInIdPool,guideReviewOutIdPool,agencyReviewOutIdPool,touristReviewOutIdPool,agencyMediaLibraryId,isRomanian,bookingCalendarId,specializedAgency,lastModified

          }
        }
      }`
      export default `${query}`
     