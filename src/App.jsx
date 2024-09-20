import { AbilityContext } from './components/Can'
import useLogIn from './hooks/useLogIn'
import store from './store/store'
import abilities from './abilities'

const App = () => {
  const user = store((state) => state.user)
  const { logIn, logOut } = useLogIn()
  console.log('ABILITIES', abilities)
  return (
    <AbilityContext.Provider value={abilities}>
      <div>
        <span>{user?.name}</span>
        <button onClick={() => user ? logOut() : logIn()}>
          {user ? 'Log out' : 'Log in'}
        </button>
      </div>
    </AbilityContext.Provider>
  )
}

export default App
