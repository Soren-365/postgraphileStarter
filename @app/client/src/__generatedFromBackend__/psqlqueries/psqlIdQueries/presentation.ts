export const query = `query Presentation($id: Int!) {
        __typename
        presentation(id: $id) {
            id headline publisherId createdById resourceType resourceTypeId isActive lastModified timeCreated

        }
      }`
      export default `${query}`
