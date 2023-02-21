import { useContext } from 'react'

import { AuthContext } from '../contexts'

const useAuthContext = () => useContext(AuthContext)

export default useAuthContext
