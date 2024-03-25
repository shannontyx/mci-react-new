import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './style.css'
import Desktop1 from './views/desktop1'
import NotFound from './views/not-found'
import PatientPage from './views/patients'
import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={PatientPage} exact path='/' />
        <Route path='/dashboard' render={props => <Desktop1 {...props} isAuthed={true} />} />
        <Route component={NotFound} path='**' />
        <Redirect to='**' />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
