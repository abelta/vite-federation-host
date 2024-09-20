import { useContext } from 'react'
import store from '../store/store'
import getUser from '../api/getUser'
import getPermissions from '../api/getPermissions'
import { AbilityContext } from '../components/Can'

export default () => {
    const setUser = store((state) => state.setUser)
    const abilities = useContext(AbilityContext)

    const logIn = async () => {
        const user = await getUser()
        console.log('USER', user)
        setUser(user)
        const permissions = await getPermissions()
        console.log('PERMISSIONS', permissions)
        console.log('ABILITIES', abilities)
        abilities.update(permissions)
    }

    const logOut = () => {
        setUser(undefined)
        abilities.update([])
    }

    return { logIn, logOut }
}
