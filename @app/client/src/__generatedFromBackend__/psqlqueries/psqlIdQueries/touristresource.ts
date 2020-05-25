export const query = `query Touristresource($id: Int!) {
        __typename
        touristresource(id: $id) {
            id name contactId publisherId createdById atTravelGroup atAgency atGuide isSigned priceInfoId travellingCalendarId isRomanian isActive isPublic lastModified timeCreated

        }
      }`
      export default `${query}`
