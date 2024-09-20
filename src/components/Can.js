import { createContext } from 'react'
import { createContextualCan } from '@casl/react'
import abilities from '../abilities'

export const AbilityContext = createContext(abilities)
export default createContextualCan(AbilityContext.Consumer)
