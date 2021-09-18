import Layout from 'components/layout'
import Landing from 'components/pages/landing/Landing'
import Profile from 'components/pages/profile/Profile'
import { Route, Switch, Redirect } from 'wouter'

function App () {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/profile/:nikname' component={Profile} />
          <Route path='/' component={Landing} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
