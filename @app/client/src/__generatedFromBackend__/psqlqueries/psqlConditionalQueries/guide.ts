export const query = `query getConditionalGuide(, $id:  number , $contactId:  number , $publisherId:  number , $createdById:  number , $atAgency:  number , $languageLevelId:  number , $tripTypeName:  string , $guideOfferId:  number , $guideBidId:  number , $guideFavoriteId:  number , $guideDealId:  number , $bookingCalendarId:  number ) {
        __typename
        guides(condition: {id: $id ,,contactId: $contactId ,,,publisherId: $publisherId ,createdById: $createdById ,,,,atAgency: $atAgency ,languageLevelId: $languageLevelId ,,tripTypeName: $tripTypeName ,guideOfferId: $guideOfferId ,guideBidId: $guideBidId ,guideFavoriteId: $guideFavoriteId ,guideDealId: $guideDealId ,,,,,bookingCalendarId: $bookingCalendarId ,,,,,,,, })  {
          nodes {
            id name contactId hasGuideLicence guideLicenceUrl publisherId createdById guideFirstName guideLastName hasOwnCompany atAgency languageLevelId areas tripTypeName guideOfferId guideBidId guideFavoriteId guideDealId agencyReviewInIdPool touristReviewInIdPool agencyReviewOutIdPool touristReviewOutIdPool bookingCalendarId hostIdPool eventIdPool accomodationIdPool transportIdPool lastModified timeCreated isActive isPublic

          }
        }
      }`
      export default `${query}`
        