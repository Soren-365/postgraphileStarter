// graphql.d.ts file
declare module '*.graphqls' {
  import {DocumentNode} from 'graphqls';

  const value: DocumentNode;
  export default value;
}
