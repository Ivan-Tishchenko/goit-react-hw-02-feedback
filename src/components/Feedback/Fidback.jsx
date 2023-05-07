// import React from 'react';

// export const Statistics = props => {
//   const { state } = props;
//   const keys = [];
//   for (const key in state) {
//     keys.push(key);
//     // console.log(keys);
//   }
//   return (
//     <>
//       <h2>Statistic</h2>
//       <ul>
//         {keys.map(name =>
//           state[name] === 0 ? undefined : (
//             <li key={keys.indexOf(name)}>
//               {name === 'positiveFeedback' ? 'positive fidback' : name}:{' '}
//               {state[name]}
//               {name === 'positiveFeedback' ? '%' : undefined}
//             </li>
//           )
//         )}
//       </ul>
//     </>
//   );
// };
