// import { DbTables } from '../__generatedFromBackend__/tableEnums';

// import { destinationresourceDbType } from '../../dexie/dbTypes/__generatedFromBackend__/types/destinationresourceDbType'
// import { getUpdateMutation } from 'src/__generatedFromBackend__/psqlmutations/getUpdateMutation';
// import { DestinationresourceClassType } from 'src/dexie/transformations/__generatedFromBackend__/types/DestinationresourceDbTransformation';
// import { MutationType } from '../controllers/comControl';


// export function updateFetchVarTypes(tableKey: string) {

//     const variablesTypes = DbTables[tableKey]
//     const  getTypesFromEmpty  = getUpdateMutation(variablesTypes);
//     return getTypesFromEmpty
//     }

// export function updateFetch({ tableKey, variables }: MutationType) {
//   console.log("destinationquery")
// //     const query = `
// // query Agencies {
// //     agencies {
// //       totalCount
// //       nodes {
// //         agencyId
        
// //       }
// //     }
// //   }
// // `
// console.log("Input to nodeFetch, tableKey, variables:", tableKey, variables)

// const variablesTypes = DbTables[tableKey]
// const { query} = getUpdateMutation(variablesTypes);

//    const opts = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ query, 
//         variables: variables }),
//     }
//     const url = 'http://localhost:5002/graphql'

//     return fetch(url, opts).catch((err) => console.log("error:",err))

// }

export {}
