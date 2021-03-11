import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Provider } from 'react-redux'

import { Auth } from './scenes'
import { AppRouter } from './components'
import Store from './store'
import { authService } from './services'
import { userChanged } from './store/actions'

function App() {

  const user = useSelector(state => state.appState.user)
  const dispatcher = useDispatch()

  useEffect(() => {
    authService.getAccount()
      .then(data => dispatcher(userChanged(data)))
      .catch(err => console.log(err))
  }, [])

  return (
    <Provider store={Store}>
      {user ? <AppRouter /> : <Auth />}
    </Provider>
  )
}

export default App