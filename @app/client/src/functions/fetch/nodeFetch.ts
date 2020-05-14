import { DbTables } from '../__generatedFromBackend__/tableEnums';
import { getNodeQuery } from '../../__generatedFromBackend__/psqlqueries/getNodeQuery'

export interface QueryNode { tableKey: DbTables;  nodeId: number }


export function idFetch({ tableKey, nodeId }: QueryNode) {
  console.log("destinationquery")
//     const query = `
// query Agencies {
//     agencies {
//       totalCount
//       nodes {
//         agencyId
        
//       }
//     }
//   }
// `
console.log("Input to nodeFetch, tableKey, nodeId:", tableKey, nodeId)

const querystring = getNodeQuery(tableKey);


    const url = 'http://localhost:5002/graphql'

    const opts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ querystring, 
        variables: { nodeId: nodeId } }),
    }

    return fetch(url, opts)

}
