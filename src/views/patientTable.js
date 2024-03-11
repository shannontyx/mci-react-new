import React from 'react';
import './patientTable.css'; // Import CSS for styling
import { useHistory } from "react-router-dom";
import metricsData from '../data/mci006.json'
import metricsDataUnhealthy from '../data/mci001.json'

const PatientTable = ( {patients} ) => {
  const history = useHistory();

  const handleViewDashboard = (patient, index) => {
    if (index === 0) {
      history.push({ pathname: '/dashboard', state: { metricsData: 'metricsData' } });
    } else if (index === 1) {
      history.push({ pathname: '/dashboard', state: { metricsData: 'metricsDataUnhealthy' } });
    }
  }

  return (
    <div className="patient-table-container">
      <table className="patient-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Patient ID</th>
            <th>Gender</th>
            <th>Risk Level</th>
            <th>Last Visit Date</th>
            <th>Next Visit Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.id}</td>
              <td>{patient.gender}</td>
              <td data-risklevel={patient.riskLevel}>{patient.riskLevel}</td>
              <td>{patient.lastVisit}</td>
              <td>{patient.nextVisit}</td>
              <td><button className="view-dashboard-btn" onClick={() => handleViewDashboard(patient, index)}>View Dashboard</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
