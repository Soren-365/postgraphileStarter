export const query = `query getConditionalTripofferresource(, $id:  number , $publisherId:  number , $createdById:  number , $availableAtCalendarId:  number , $guideResponsibleId:  number , $guideSecondaryId:  number , $atAgency:  number , $priceInfoId:  number ) {
        __typename
        tripofferresources(condition: {id: $id ,,publisherId: $publisherId ,createdById: $createdById ,availableAtCalendarId: $availableAtCalendarId ,guideResponsibleId: $guideResponsibleId ,guideSecondaryId: $guideSecondaryId ,atAgency: $atAgency ,priceInfoId: $priceInfoId ,,,,,,, })  {
          nodes {
            id tripOfferName publisherId createdById availableAtCalendarId guideResponsibleId guideSecondaryId atAgency priceInfoId destinationId isSigned atGuide isActive isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        