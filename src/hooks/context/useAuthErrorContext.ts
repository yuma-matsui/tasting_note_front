import { useContext } from 'react'

import { AuthErrorContext } from '../../contexts'

const useAuthErrorContext = () => useContext(AuthErrorContext)

export default useAuthErrorContext
