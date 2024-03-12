import React from 'react'
import { SidePanel, TopPanel } from '../components' // Import Components
import { Helmet } from 'react-helmet'
import PatientData from '../data/patientsData'
import PatientTable from './patientTable'
import './patients.css'

const PatientPage = props => {
  return (
    <div className='overall-container'>
      <Helmet>
        <title>exported project</title>
      </Helmet>

      <TopPanel />
      <SidePanel />
      <div className='patienttable-container'>
        <PatientTable patients={PatientData} /> {/* Pass the patient data as props */}
      </div>
    </div>
  )
}

export default PatientPage
