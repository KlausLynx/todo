// src/days/DayComponent.jsx
import React from 'react';

const dayComponents = {
  day1: React.lazy(() => import('./day1/ProfileCard')),
  day2: React.lazy(() => import('./day2/YourDay2Component')), // update name
  day3: React.lazy(() => import('./day3/YourDay3Component')),
  day4: React.lazy(() => import('./day4/YourDay4Component')),
  day5: React.lazy(() => import('./day5/YourDay5Component')),
  // Add more as you go!
};

const DayComponent = ({ day }) => {
  const Component = dayComponents[day];

  if (!Component) {
    return <div style={{color: 'red', fontSize: '1.5rem'}}>
      Oops! "{day}" not built yet. Pick another day!
    </div>;
  }

  return (
    <React.Suspense fallback={<div>Loading {day.toUpperCase()}...</div>}>
      <Component />
    </React.Suspense>
  );
};

export default DayComponent;



// // DayComponent.jsx – this file NEVER changes again!
// import React from 'react';

// const DayComponent = ({ day }) => {
//   return (
//     <React.Suspense fallback={<div>Loading {day}...</div>}>
//       {React.createElement(
//         React.lazy(() => 
//           import(`./${day}/index.jsx`).catch(() => 
//             import('./ComingSoon.jsx') // nice fallback if day not built yet
//           )
//         )
//       )}
//     </React.Suspense>
//   );
// };

// export default DayComponent;