export const mutation = `mutation delete ($statements this will not
result in the table being added to the GraphQL API, this is because we are
using `ignoreRBAC: false` so we do not expose tables until you `GRANT` the
relevant operations on them. The tables will appear when you uncomment the
`GRANT` lines.

*/

drop table if exists app_public.user_feed_posts;
drop table if exists app_public.posts;
drop table if exists app_public.topics;

create table app_public.topics (
  title            text not null primary key: Statements , $clientMutationId: String!) {
        __typename
        delete (input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     