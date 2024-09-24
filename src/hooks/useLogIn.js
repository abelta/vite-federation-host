import useAbilities from 'host/hooks/useAbilities'
import store from 'host/store'
import getUser from '../api/getUser'
import getPermissions from '../api/getPermissions'

export default () => {
    const setUser = store((state) => state.setUser)
    const abilities = useAbilities()

    const logIn = async () => {
        const user = await getUser()
        setUser(user)
        const permissions = await getPermissions()
        abilities.update(permissions)
        console.log('HOST', abilities.rules)
    }

    const logOut = () => {
        setUser(undefined)
        abilities.update([])
    }

    return { logIn, logOut }
}
