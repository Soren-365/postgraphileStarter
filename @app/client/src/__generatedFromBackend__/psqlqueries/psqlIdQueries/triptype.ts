export const query = `query Triptype($id: Int!) {
        __typename
        triptype(id: $id) {
            id tripTypeName atAgency lastModified timeCreated

        }
      }`
      export default `${query}`
