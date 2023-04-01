import { useContext } from 'react'

import { RequestingContext } from '../../contexts'

const useRequestingContext = () => useContext(RequestingContext)

export default useRequestingContext
