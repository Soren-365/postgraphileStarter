export const query = `query Eventresource($id: Int!) {
        __typename
        eventresource(id: $id) {
            id eventName agencyName contactId publisherId createdById locatedIn locationAddressId tripTypeName activeAtPeriodsId ownedByAt atAgency atGuide presentationId isActive isPublic lastModified timeCreated

        }
      }`
      export default `${query}`
