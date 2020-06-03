export const mutation = `mutation createGuideresource(,$guideResourceName: String ,$publisherId: Int! ,$createdById: Int! ,$atGuide: Int ,$timeRangeId: Int ,$priceInfoId: Int! ,$atAgency: Int ,$multipleTimeRange: Boolean! ,$bookingCalendarId: Int ,$isRomanian: Boolean ,$isActive: Boolean ,$isPublic: Boolean! ,$lastModified: Datetime ,$timeCreated: Datetime , $id: String!) {
        __typename
        createGuideresource(input: {id: $id,guideresource: {,guideResourceName: $guideResourceName ,publisherId: $publisherId ,createdById: $createdById ,atGuide: $atGuide ,timeRangeId: $timeRangeId ,priceInfoId: $priceInfoId ,atAgency: $atAgency ,multipleTimeRange: $multipleTimeRange ,bookingCalendarId: $bookingCalendarId ,isRomanian: $isRomanian ,isActive: $isActive ,isPublic: $isPublic ,lastModified: $lastModified ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     