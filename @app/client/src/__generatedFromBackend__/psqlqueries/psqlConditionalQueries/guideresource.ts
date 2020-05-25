export const query = `query getConditionalGuideresource(, $id:  number , $publisherId:  number , $createdById:  number , $atGuide:  number , $timeRangeId:  number , $priceInfoId:  number , $atAgency:  number , $bookingCalendarId:  number ) {
        __typename
        guideresources(condition: {id: $id ,,publisherId: $publisherId ,createdById: $createdById ,atGuide: $atGuide ,timeRangeId: $timeRangeId ,priceInfoId: $priceInfoId ,atAgency: $atAgency ,,bookingCalendarId: $bookingCalendarId ,,,,, })  {
          nodes {
            id guideResourceName publisherId createdById atGuide timeRangeId priceInfoId atAgency multipleTimeRange bookingCalendarId isRomanian isActive isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        