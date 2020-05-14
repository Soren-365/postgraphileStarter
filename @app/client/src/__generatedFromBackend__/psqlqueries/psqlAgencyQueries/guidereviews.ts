export const query = `query getAgencyguidereviews($atAgency: Int!) {
        __typename
        guidereviews(condition: {atAgency: $atAgency }) {
          nodes {
            id,publisherId,createdById,isActive,halfStars,reviewText,guideIdTarget,startDateTripEvent,byRomanian

          }
        }
      }`
      export default `${query}`
     