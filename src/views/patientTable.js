import React from 'react';
import './patientTable.css'; // Import CSS for styling
import { useHistory } from "react-router-dom";
import metricsData from '../data/mci006.json'
import metricsDataUnhealthy from '../data/mci001.json'

const PatientTable = ( {patients} ) => {
  const history = useHistory();

  const handleViewDashboard = (patient, index) => {
    const selectedMetricsData = index === 0 ? metricsData : metricsDataUnhealthy;
    history.push({ pathname: '/dashboard', state: { metricsData: selectedMetricsData } });
  }
  

  return (
    <div className="patient-table-container">
      <table className="patient-table">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Gender</th>
            <th>Profile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.id}</td>
              <td>{patient.gender}</td>
              <td data-risklevel={patient.riskLevel}>{patient.riskLevel}</td>
              
              <td><button className="view-dashboard-btn" onClick={() => handleViewDashboard(patient, index)}>View Dashboard</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
