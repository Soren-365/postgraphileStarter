

  export const mutation = `mutation updateDestination($destinationName: String!) {
    __typename
    updateDestinationresource(input: {patch: {destinationName: $destinationName}, id: 5}) {
      usertableByLastModifiedBy {
        atAgency
      }
    }
  }`
  export default `${mutation}`
 