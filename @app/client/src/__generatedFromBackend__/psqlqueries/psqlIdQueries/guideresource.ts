export const query = `query Guideresource($id: Int!) {
        __typename
        guideresource(id: $id) {
            id guideResourceName publisherId createdById atGuide timeRangeId priceInfoId atAgency multipleTimeRange bookingCalendarId isRomanian isActive isPublic lastModified timeCreated

        }
      }`
      export default `${query}`
