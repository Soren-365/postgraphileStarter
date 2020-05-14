export const mutation = `mutation createGuide(,$name: String ,$contactId: Int! ,$hasGuideLicence: Boolean! ,$guideLicenceUrl: String ,$publisherId: Int! ,$createdById: Int! ,$guideFirstName: String ,$guideLastName: String ,$hasOwnCompany: Boolean! ,$atAgency: Int ,$languageLevelId: Int! ,$areas: [Area]! ,$tripTypeName: String ,$guideOfferId: Int! ,$guideBidId: Int! ,$guideFavoriteId: Int! ,$guideDealId: Int! ,$agencyReviewInIdPool: [Int] ,$touristReviewInIdPool: [Int] ,$agencyReviewOutIdPool: [Int] ,$touristReviewOutIdPool: [Int] ,$bookingCalendarId: Int! ,$hostIdPool: [Int] ,$eventIdPool: [Int] ,$accomodationIdPool: [Int] ,$transportIdPool: [Int] ,$lastModified: Datetime ,$timeCreated: Datetime ,$isActive: Boolean , $clientMutationId: String!) {
        __typename
        createGuide(input: {clientMutationId: $clientMutationId,guide: {,name: $name ,contactId: $contactId ,hasGuideLicence: $hasGuideLicence ,guideLicenceUrl: $guideLicenceUrl ,publisherId: $publisherId ,createdById: $createdById ,guideFirstName: $guideFirstName ,guideLastName: $guideLastName ,hasOwnCompany: $hasOwnCompany ,atAgency: $atAgency ,languageLevelId: $languageLevelId ,areas: $areas ,tripTypeName: $tripTypeName ,guideOfferId: $guideOfferId ,guideBidId: $guideBidId ,guideFavoriteId: $guideFavoriteId ,guideDealId: $guideDealId ,agencyReviewInIdPool: $agencyReviewInIdPool ,touristReviewInIdPool: $touristReviewInIdPool ,agencyReviewOutIdPool: $agencyReviewOutIdPool ,touristReviewOutIdPool: $touristReviewOutIdPool ,bookingCalendarId: $bookingCalendarId ,hostIdPool: $hostIdPool ,eventIdPool: $eventIdPool ,accomodationIdPool: $accomodationIdPool ,transportIdPool: $transportIdPool ,lastModified: $lastModified ,timeCreated: $timeCreated ,isActive: $isActive }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     