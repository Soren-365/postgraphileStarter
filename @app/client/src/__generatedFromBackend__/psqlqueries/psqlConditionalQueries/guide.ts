export const query = `query getConditionalGuide(, $undefined:  undefined ) {
        __typename
        guides(condition: {undefined: $undefined ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, })  {
          nodes {
            id name contactId hasGuideLicence guideLicenceUrl publisherId createdById guideFirstName guideLastName hasOwnCompany atAgency languageLevelId areas tripTypeName guideOfferId guideBidId guideFavoriteId guideDealId agencyReviewInIdPool touristReviewInIdPool agencyReviewOutIdPool touristReviewOutIdPool bookingCalendarId hostIdPool eventIdPool accomodationIdPool transportIdPool lastModified timeCreated isActive isPublic

          }
        }
      }`
      export default `${query}`
        