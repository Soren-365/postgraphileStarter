export const query = `query Agencymedialibrary($id: Int!) {
        __typename
        agencymedialibrary(id: $id) {
            id atAgency uploadLocations locationSignedUrls signedUrlsUpdate lastModifiedBy timeCreated lastModified

        }
      }`
      export default `${query}`
