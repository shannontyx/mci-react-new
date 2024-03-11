import React from 'react'
import { SidePanel, MetricsChart, ActivitySummary, TopPanel } from '../components' // Import Components
import { Helmet } from 'react-helmet'
import PatientData from './patientData'
import PatientTable from './patientTable'
import { useHistory } from "react-router-dom";
import './patients.css'

const PatientPage = props => {   
    return (
      <div className='overall-container'>
        <Helmet>
          <title>exported project</title>
        </Helmet>
  
        
          {/* <img
            src="/external/rectangle63210-r9.svg"
            alt="Rectangle63210"
            className="desktop1-rectangle63"
          /> */}
        <TopPanel />
          <SidePanel />
          <div className='patienttable-container'>
            <PatientTable patients={PatientData} /> {/* Pass the patient data as props */}
          </div>
         

          
        </div>
    
    )
}

export default PatientPage