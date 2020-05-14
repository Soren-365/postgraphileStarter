export const mutation = `mutation updateGuideresource($id: Int ,$guideResourceName: String ,$publisherId: Int! ,$createdById: Int! ,$atGuide: Int ,$timeRangeId: Int ,$priceInfoId: Int! ,$atAgency: Int ,$multipleTimeRange: Boolean! ,$bookingCalendarId: Int ,$isRomanian: Boolean ,$isActive: Boolean ,$isPublic: Boolean! ,$lastModified: Datetime , $clientMutationId: String!) {
        __typename
        updateGuideresource(input: {clientMutationId: $clientMutationId, patch: {,guideResourceName: $guideResourceName ,publisherId: $publisherId ,createdById: $createdById ,atGuide: $atGuide ,timeRangeId: $timeRangeId ,priceInfoId: $priceInfoId ,atAgency: $atAgency ,multipleTimeRange: $multipleTimeRange ,bookingCalendarId: $bookingCalendarId ,isRomanian: $isRomanian ,isActive: $isActive ,isPublic: $isPublic ,lastModified: $lastModified }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     