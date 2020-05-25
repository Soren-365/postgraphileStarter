export const query = `query getAgencyguideresources($atAgency: Int!, $id: Int) {
        __typename
        guideresources(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id guideResourceName publisherId createdById atGuide timeRangeId priceInfoId atAgency multipleTimeRange bookingCalendarId isRomanian isActive isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
     