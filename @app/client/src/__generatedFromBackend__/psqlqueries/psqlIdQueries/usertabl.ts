export const query = `query Usertabl($id: Int!) {
        __typename
        usertabl(id: $id) {
            id firstName lastName userEmail atAgency isAdmin atGuide atTourist timeCreated isActive isRomanian

        }
      }`
      export default `${query}`
