// import { useAgencydestinationQuery } from '../../../graphqlQueriesMS/agencydestination.graphql';
// import { H3, H4 } from '@blueprintjs/core';
// import React from 'react';

// const printAgencyDestination = () => {
//   const { loading, data, error } = useAgencydestinationQuery();

//   if (loading) return 'Loading...';
//   if (error) return `Error! ${error.message}`;

//   return data.agencydestinations.nodes.map(node => {
//     <div key={node.nodeId}>
//       <hr></hr>
//       <br></br>
//       <H3>Destination Resource: </H3>
//       <H4>Resource Id: {node.destinationId}</H4>
//       <H4>Time created: {node.timeCreated}</H4>
//       <H4>Last Modified: {node.lastModified}</H4>
//       <H4>Modified By UserId: {node.lastModifiedBy}</H4>
//       <H4>At agencyId: {node.agencyId}</H4>
//       {/* <H4>
//         agancyBucketUrls:
//         {node.agencyBucketUrls.map((arr, index) => (
//           <div key={index}>
//             <H5>{arr[index]}</H5>
//           </div>
//         ))}
//       </H4> */}
//     </div>;
//   });
// };

// export default printAgencyDestination;

export {};
