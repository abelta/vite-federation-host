import abilities from 'host/abilities'
import AbilityContext from 'host/contexts/AbilityContext'
import useUser from 'host/hooks/useUser'
import App1 from 'remote1/App'
import useLogIn from './hooks/useLogIn'

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
