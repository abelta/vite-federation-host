import { create } from 'zustand'
import createUserStore from './userStore'

export default create((...a) => ({
    ...createUserStore(...a),
}))
