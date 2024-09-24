import AbilityContext from './contexts/AbilityContext'
import useLogIn from './hooks/useLogIn'
import useUser from 'host/useUser'
import abilities from './abilities'
import App1 from 'remote1/App'

const App = () => {
  const user = useUser()
  const { logIn, logOut } = useLogIn()

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
        <App1 />
      </div>
    </AbilityContext.Provider>
  )
}

export default App
