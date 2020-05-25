export const query = `query getConditionalTransportresource(, $id:  number , $contactId:  number , $publisherId:  number , $createdById:  number , $addressInfoId:  number , $atAgency:  number , $atGuide:  number , $presentationId:  number , $bookingCalendarId:  number ) {
        __typename
        transportresources(condition: {id: $id ,,contactId: $contactId ,publisherId: $publisherId ,createdById: $createdById ,,addressInfoId: $addressInfoId ,atAgency: $atAgency ,atGuide: $atGuide ,,presentationId: $presentationId ,,,bookingCalendarId: $bookingCalendarId ,,,, })  {
          nodes {
            id transportName contactId publisherId createdById locatedIn addressInfoId atAgency atGuide ownedByAt presentationId isBus numberOfPlaces bookingCalendarId isActive isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        