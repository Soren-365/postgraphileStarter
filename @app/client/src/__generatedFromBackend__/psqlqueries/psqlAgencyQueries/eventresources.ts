export const query = `query getAgencyeventresources($atAgency: Int!) {
        __typename
        eventresources(condition: {atAgency: $atAgency }) {
          nodes {
            id,eventName,agencyName,contactId,publisherId,createdById,locatedIn,locationAddressId,tripTypeName,activeAtPeriodsId,ownedByAt,atAgency,atGuide,presentationId,isActive,isPublic,lastModified

          }
        }
      }`
      export default `${query}`
     