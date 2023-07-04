import { useContext } from 'react'

import { RequestingDispatchContext } from '../../contexts'

const useRequestingDispatchContext = () => useContext(RequestingDispatchContext)

export default useRequestingDispatchContext
