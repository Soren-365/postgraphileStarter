export const mutation = `mutation updateTransportresource($id: Int ,$transportName: String ,$contactId: Int! ,$publisherId: Int! ,$createdById: Int! ,$locatedIn: Area! ,$addressInfoId: Int! ,$atAgency: Int ,$atGuide: Int ,$ownedByAt: Boolean! ,$presentationId: Int ,$isBus: Boolean! ,$numberOfPlaces: Int! ,$bookingCalendarId: Int! ,$isActive: Boolean ,$isPublic: Boolean! ,$lastModified: Datetime , $clientMutationId: String!) {
        __typename
        updateTransportresource(input: {clientMutationId: $clientMutationId, patch: {,transportName: $transportName ,contactId: $contactId ,publisherId: $publisherId ,createdById: $createdById ,locatedIn: $locatedIn ,addressInfoId: $addressInfoId ,atAgency: $atAgency ,atGuide: $atGuide ,ownedByAt: $ownedByAt ,presentationId: $presentationId ,isBus: $isBus ,numberOfPlaces: $numberOfPlaces ,bookingCalendarId: $bookingCalendarId ,isActive: $isActive ,isPublic: $isPublic ,lastModified: $lastModified }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     