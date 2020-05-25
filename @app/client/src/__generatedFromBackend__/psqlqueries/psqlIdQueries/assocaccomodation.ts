export const query = `query Assocaccomodation($assocAccomodationId: Int!) {
        __typename
        assocaccomodation(id: $assocAccomodationId) {
            assocAccomodationId accomodationId atAgency timeCreated

        }
      }`
      export default `${query}`
