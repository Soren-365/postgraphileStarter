export const query = `query getNodeguide($nodeId: String!) {
        __typename
        guideByNodeId(nodeId: $nodeId }) { 
            id name contactId hasGuideLicence guideLicenceUrl publisherId createdById guideFirstName guideLastName hasOwnCompany atAgency languageLevelId areas tripTypeName guideOfferId guideBidId guideFavoriteId guideDealId agencyReviewInIdPool touristReviewInIdPool agencyReviewOutIdPool touristReviewOutIdPool bookingCalendarId hostIdPool eventIdPool accomodationIdPool transportIdPool lastModified timeCreated isActive

        }
      }`
      export default `${query}`
     