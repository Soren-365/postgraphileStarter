export const mutation = `mutation deleteTravelgroupresource($id: Int , $id: String!) {
        __typename
        deleteTravelgroupresource(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     