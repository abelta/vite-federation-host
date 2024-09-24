import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import abilities from 'host/abilities'
import AbilityContext from 'host/contexts/AbilityContext'
import useUser from 'host/hooks/useUser'
import App1 from 'remote1/App'
import App2 from 'remote2/App'
import useLogIn from './hooks/useLogIn'

const App = () => {
  const user = useUser()
  const { logIn, logOut } = useLogIn()

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App1 />,
    },
    {
      path: 'app2',
      element: <App2 />,
    }
  ])

  return (
    <AbilityContext.Provider value={abilities}>
      <div>
        <h1>HOST</h1>
        <span>{user?.name}</span>
        <button onClick={() => user ? logOut() : logIn()}>
          {user ? 'Log out' : 'Log in'}
        </button>
      </div>
      <div>
        <RouterProvider router={router} />
      </div>
    </AbilityContext.Provider>
  )
}

export default App
