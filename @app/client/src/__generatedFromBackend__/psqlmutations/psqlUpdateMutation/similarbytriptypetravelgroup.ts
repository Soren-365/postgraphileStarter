export const mutation = `mutation updateSimilarbytriptypetravelgroup($travelGroupIds: [Int] ,$--: ResourceIds ,$resource: Types ,$eventres,: Accomodationres ,$accomodationres,: Hostres ,$hostres,: Transportres ,$transportres,: App_public.guideres ,$app_public.guideres,: App_public.tourist? ,$app_public.tourist?,: Travelgroup?] ,$travelgroup?]
: "tripTypeName" ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateSimilarbytriptypetravelgroup(input: {clientMutationId: $clientMutationId, patch: {travelGroupIds: $travelGroupIds ,--: $-- ,resource: $resource ,eventres,: $eventres, ,accomodationres,: $accomodationres, ,hostres,: $hostres, ,transportres,: $transportres, ,app_public.guideres,: $app_public.guideres, ,app_public.tourist?,: $app_public.tourist?, ,travelgroup?]
: $travelgroup?]
 ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     