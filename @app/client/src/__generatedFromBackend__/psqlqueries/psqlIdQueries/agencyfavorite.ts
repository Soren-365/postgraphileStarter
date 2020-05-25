export const query = `query Agencyfavorite($resourceId: Int!) {
        __typename
        agencyfavorite(id: $resourceId) {
            resourceId

        }
      }`
      export default `${query}`
