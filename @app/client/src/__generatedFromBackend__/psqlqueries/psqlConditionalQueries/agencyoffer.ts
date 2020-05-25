export const query = `query getConditionalAgencyoffer(, $id:  number ) {
        __typename
        agencyoffers(condition: {id: $id , })  {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
        