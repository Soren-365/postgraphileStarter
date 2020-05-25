export const query = `query getAgencyeventresources($atAgency: Int!, $id: Int) {
        __typename
        eventresources(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id eventName agencyName contactId publisherId createdById locatedIn locationAddressId tripTypeName activeAtPeriodsId ownedByAt atAgency atGuide presentationId isActive isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
     