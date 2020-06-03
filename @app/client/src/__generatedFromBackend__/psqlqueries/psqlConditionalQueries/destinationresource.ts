export const query = `query getConditionalDestinationresource(, $undefined:  undefined ) {
        __typename
        destinationresources(condition: {undefined: $undefined ,,,,,,,,,,,,,,,, })  {
          nodes {
            id destinationName publishedById createdById area judet tripTypeName isActive priceInfoId activeAtPeriodsId presentationId atAgency geoCodingId isPublic lastModified lastModifiedBy timeCreated

          }
        }
      }`
      export default `${query}`
        