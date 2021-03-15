import React, { useEffect } from 'react'
import { useSelector, useDispatch, Provider } from 'react-redux'


import { Auth } from './scenes'
import { AppRouter } from './components'
import Store from './store'
import { authService } from './services'
import { userChanged, toolbarTabChanged } from './store/actions'

function App() {

  const user = useSelector(state => state.appState.user)
  const dispatcher = useDispatch()

  useEffect(() => {
    authService.getAccount()
      .then(data => dispatcher(userChanged(data)))
    const urlHash = window.location.hash.replace('#', '')
    switch (urlHash) {
      case '/friends':
        dispatcher(toolbarTabChanged(1))
        break
      default:
        break
    }
  }, [])

  return (
    <Provider store={Store}>
      {user ? <AppRouter /> : <Auth />}
    </Provider>
  )
}

export default App