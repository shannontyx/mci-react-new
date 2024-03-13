// import React from 'react'

// const TopPanel = () => {
//   return (
//     <div>
//       <div className='desktop1-header'></div>
//       <span className='desktop1-text012'>
//         <span>Patient Name</span>
//       </span>
//       <span className='desktop1-text014'>
//         <span>Patient ID</span>
//       </span>
//       <span className='desktop1-text016'>
//         <span>Subject X</span>
//       </span>
//       <span className='desktop1-text018'>
//         <span>0012345</span>
//       </span>
//       <span className='desktop1-text020'>
//         <span>
//           Select Dates &gt;
//           <span
//             dangerouslySetInnerHTML={{
//               __html: ' ',
//             }}
//           />
//         </span>
//       </span>
//       <span className='desktop1-text022'>
//         <span>01/01/2024 - 30/01/2024</span>
//       </span>
//       <img
//         src='/external/rectangle64218-1k5-200h.png'
//         alt='Rectangle64218'
//         className='desktop1-rectangle64'
//       />
//       <span className='desktop1-text026'>
//         <span>Generate report</span>
//       </span>
//     </div>
//   )
// }

// export default TopPanel

import React from 'react'
import { useLocation } from 'react-router-dom' // Import useLocation hook from React Router

const TopPanel = ({ patientId }) => {
  const location = useLocation() // Get current location

  // Check if the current URL path is '/dashboard'
  if (location.pathname === '/dashboard') {
    return (
      <div>
        <div className='desktop1-header'></div>
        <span className='desktop1-text012'>
          <span>Patient Name</span>
        </span>
        <span className='desktop1-text014'>
          <span>Patient ID</span>
        </span>
        <span className='desktop1-text016'>
          <span>Subject X</span>
        </span>
        <span className='desktop1-text018'>
          <span>{patientId}</span>
        </span>
        <span className='desktop1-text020'>
          <span>
            Select Dates &gt;
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className='desktop1-text022'>
          <span>01/01/2024 - 30/01/2024</span>
        </span>
        <img
          src='/external/rectangle64218-1k5-200h.png'
          alt='Rectangle64218'
          className='desktop1-rectangle64'
        />
        <span className='desktop1-text026'>
          <span>Generate report</span>
        </span>
      </div>
    )
  } else {
    // If URL path is not '/dashboard', render 'My Patients' header only
    return (
      <div className='desktop1-header'>
        <div>
          <p style={{ fontSize: '25px', color: 'white', marginTop: '33px', marginLeft: '120px' }}>
            My Patients
          </p>
        </div>
      </div>
    )
  }
}

export default TopPanel
