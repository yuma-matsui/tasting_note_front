import { useContext } from 'react'

import { AuthErrorDispatchContext } from '../../contexts'

const useAuthErrorDispatchContext = () => useContext(AuthErrorDispatchContext)

export default useAuthErrorDispatchContext
