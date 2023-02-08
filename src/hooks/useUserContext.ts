import { useContext } from 'react'

import { UserContext } from '../contexts'

const useUserContext = () => useContext(UserContext)

export default useUserContext
