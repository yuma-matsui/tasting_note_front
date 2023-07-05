import { useContext } from 'react'

import { AuthLoadingDispatchContext } from '../../contexts'

const useAuthLoadingDispatchContext = () => useContext(AuthLoadingDispatchContext)

export default useAuthLoadingDispatchContext
