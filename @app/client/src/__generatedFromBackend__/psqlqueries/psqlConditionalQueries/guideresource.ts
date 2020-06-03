export const query = `query getConditionalGuideresource(, $undefined:  undefined ) {
        __typename
        guideresources(condition: {undefined: $undefined ,,,,,,,,,,,,,, })  {
          nodes {
            id guideResourceName publisherId createdById atGuide timeRangeId priceInfoId atAgency multipleTimeRange bookingCalendarId isRomanian isActive isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        