export const query = `query Guidebid($id: Int!) {
        __typename
        guidebid(id: $id) {
            id tripOfferIdPool

        }
      }`
      export default `${query}`
