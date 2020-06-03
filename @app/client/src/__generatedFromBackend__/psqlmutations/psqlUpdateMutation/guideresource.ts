export const mutation = `mutation updateGuideresource($id: Int ,$guideResourceName: String ,$publisherId: Int! ,$createdById: Int! ,$atGuide: Int ,$timeRangeId: Int ,$priceInfoId: Int! ,$atAgency: Int ,$multipleTimeRange: Boolean! ,$bookingCalendarId: Int ,$isRomanian: Boolean ,$isActive: Boolean ,$isPublic: Boolean! ,$lastModified: Datetime ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateGuideresource(input: {id: $id, patch: {,guideResourceName: $guideResourceName ,publisherId: $publisherId ,createdById: $createdById ,atGuide: $atGuide ,timeRangeId: $timeRangeId ,priceInfoId: $priceInfoId ,atAgency: $atAgency ,multipleTimeRange: $multipleTimeRange ,bookingCalendarId: $bookingCalendarId ,isRomanian: $isRomanian ,isActive: $isActive ,isPublic: $isPublic ,lastModified: $lastModified ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     