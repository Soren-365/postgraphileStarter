
import { AtAgencyTables } from '../__generatedFromBackend__/AtAgencyTables';
import { getAgencyQuery } from '../../__generatedFromBackend__/psqlqueries/getAgencyQuery'
// import { DbTableType_ } from 'src/__generatedFromBackend__/psqlqueries/getIdQuery';

export interface QueryByAtAgency { agencyTableKey: AtAgencyTables;  atAgency: number }


export function atAgencyFetch({ agencyTableKey, atAgency }: QueryByAtAgency) {
  // console.log("destinationquery")
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
// console.log("Input to idFetch, query, atAgency:", agencyTableKey, atAgency)


 const query = getAgencyQuery(agencyTableKey);

    const url = 'http://localhost:5002/graphql'

    const opts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, 
        variables: { atAgency: atAgency } }),
    }

    return fetch(url, opts)

}
