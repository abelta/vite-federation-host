import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import abilities from 'host/abilities'
import AbilityContext from 'host/contexts/AbilityContext'
import useUser from 'host/hooks/useUser'
import useLogIn from './hooks/useLogIn'

const App1 = lazy(() => import('remote1/App'))
const App2 = lazy(() => import('remote2/App'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App1 />
      </Suspense>
    ),
  },
  {
    path: 'app2',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App2 />
      </Suspense>
    ),
  }
])

const App = () => {
  const user = useUser()
  const { logIn, logOut } = useLogIn()

  return (
    <AbilityContext.Provider value={abilities}>
      <div style={{ backgroundColor: 'lightblue', top: 0, position: 'absolute', width: '100%' }}>
        <h1>HOST</h1>
        <span style={{ paddingRight: '10px' }}>
          {user?.name}
        </span>
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
