export const query = `query getNoderoomlist($nodeId: String!) {
        __typename
        roomlistByNodeId(nodeId: $nodeId }) { 
            id atAccomodation roomNames roomNumPeople roomCalendarId roomPrices

        }
      }`
      export default `${query}`
     