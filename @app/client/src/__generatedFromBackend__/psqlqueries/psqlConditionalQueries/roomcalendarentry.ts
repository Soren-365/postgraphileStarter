export const query = `query getConditionalRoomcalendarentry(, $id:  number ) {
        __typename
        roomcalendarentries(condition: {id: $id ,,,, })  {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
        