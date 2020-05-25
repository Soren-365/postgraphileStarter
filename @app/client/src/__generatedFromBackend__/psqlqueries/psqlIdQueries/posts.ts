export const query = `query Posts($id: Int!) {
        __typename
        posts(id: $id) {
            id author_id headline body topic created_at

        }
      }`
      export default `${query}`
