import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exaxt path="/login" component={LoginForm} />
    <Route exaxt path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)
export default App
