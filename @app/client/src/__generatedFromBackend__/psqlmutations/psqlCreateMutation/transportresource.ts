export const mutation = `mutation createTransportresource(,$transportName: String ,$contactId: Int! ,$publisherId: Int! ,$createdById: Int! ,$locatedIn: Area! ,$addressInfoId: Int! ,$atAgency: Int ,$atGuide: Int ,$ownedByAt: Boolean! ,$presentationId: Int ,$isBus: Boolean! ,$numberOfPlaces: Int! ,$bookingCalendarId: Int! ,$isActive: Boolean ,$isPublic: Boolean! ,$lastModified: Datetime ,$timeCreated: Datetime , $id: String!) {
        __typename
        createTransportresource(input: {id: $id,transportresource: {,transportName: $transportName ,contactId: $contactId ,publisherId: $publisherId ,createdById: $createdById ,locatedIn: $locatedIn ,addressInfoId: $addressInfoId ,atAgency: $atAgency ,atGuide: $atGuide ,ownedByAt: $ownedByAt ,presentationId: $presentationId ,isBus: $isBus ,numberOfPlaces: $numberOfPlaces ,bookingCalendarId: $bookingCalendarId ,isActive: $isActive ,isPublic: $isPublic ,lastModified: $lastModified ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     