import { DbTables } from '../__generatedFromBackend__/tableEnums';
import { getIdQuery } from '../../__generatedFromBackend__/psqlqueries/getIdQuery'


export interface QueryId { tableKey: DbTables;  id: number }

export function idFetch({ tableKey, id }:QueryId ) {
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

console.log("Input to idFetch, tableKey, id:", tableKey, id)

const query = getIdQuery(tableKey);


    const url = 'http://localhost:5002/graphql'

    const opts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, 
        variables: { id: id } }),
    }

    return fetch(url, opts)

}
