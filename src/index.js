import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './style.css'
import Desktop1 from './views/desktop1'
import NotFound from './views/not-found'
import PatientPage from './views/patients'
import metricsData from './data/mci006.json' // Import metricsData
import metricsDataUnhealthy from './data/mci001.json' // Import metricsDataUnhealthy

const App = () => {

  return (
    <Router>
      <Switch>
        <Route component={PatientPage} exact path='/' />
        <Route path="/dashboard" element={<Desktop1 metricsData={metricsData} />} />       
        <Route component={NotFound} path='**' />
        
        <Redirect to='**' />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
