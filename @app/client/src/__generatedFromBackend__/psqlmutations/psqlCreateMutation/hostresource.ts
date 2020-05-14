export const mutation = `mutation createHostresource(,$hostResourceName: String ,$contactId: Int! ,$publisherId: Int! ,$createdById: Int! ,$withAccomodation: Boolean! ,$atAccomodation: Int ,$atAgency: Int ,$atGuide: Int ,$tripTypeName: String ,$locatedIn: Area ,$addressInfoId: Int! ,$ownedByAt: Boolean! ,$presentationId: Int! ,$bookingCalendarId: Int! ,$isRomanian: Boolean ,$isActive: Boolean ,$isPublic: Boolean! ,$lastModified: Datetime , $clientMutationId: String!) {
        __typename
        createHostresource(input: {clientMutationId: $clientMutationId,hostresource: {,hostResourceName: $hostResourceName ,contactId: $contactId ,publisherId: $publisherId ,createdById: $createdById ,withAccomodation: $withAccomodation ,atAccomodation: $atAccomodation ,atAgency: $atAgency ,atGuide: $atGuide ,tripTypeName: $tripTypeName ,locatedIn: $locatedIn ,addressInfoId: $addressInfoId ,ownedByAt: $ownedByAt ,presentationId: $presentationId ,bookingCalendarId: $bookingCalendarId ,isRomanian: $isRomanian ,isActive: $isActive ,isPublic: $isPublic ,lastModified: $lastModified }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     