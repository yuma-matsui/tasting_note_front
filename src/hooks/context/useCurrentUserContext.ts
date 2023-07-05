import { useContext } from 'react'

import { AuthCurrentUserContext } from '../../contexts'

const useCurrentUserContext = () => useContext(AuthCurrentUserContext)

export default useCurrentUserContext
