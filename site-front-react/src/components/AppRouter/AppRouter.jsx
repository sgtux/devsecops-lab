import React, { useEffect } from 'react'
import './AppRouter.jsx'
import { Route, Switch, HashRouter } from 'react-router-dom'
import {
  PostList,
  UserProfilePage,
  People
} from '../../scenes'
import {
  Toolbar,
  Footer
} from '../../components'

export function AppRouter() {

  useEffect(() => window.document.body.style.backgroundColor = '#18191a', [])

  return (
    <HashRouter>
      <Toolbar />
      <Switch>
        <Route path="/" exact={true} component={PostList} />
        <Route path="/profile/:id" component={UserProfilePage} />
        <Route path="/people" component={People} />
      </Switch>
      <Footer />
    </HashRouter>
  )
}