export const query = `query Agencyaccomodation($agencyId: Int!) {
        __typename
        agencyaccomodation(id: $agencyId) {
            agencyId accomodationId lastModified urlExperyAt presentationPlacements agencyBucketUrls timeCreated

        }
      }`
      export default `${query}`
