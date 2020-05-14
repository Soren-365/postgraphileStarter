export const query = `query getAgencyguideresources($atAgency: Int!) {
        __typename
        guideresources(condition: {atAgency: $atAgency }) {
          nodes {
            id,guideResourceName,publisherId,createdById,atGuide,timeRangeId,priceInfoId,atAgency,multipleTimeRange,bookingCalendarId,isRomanian,isActive,isPublic,lastModified

          }
        }
      }`
      export default `${query}`
     