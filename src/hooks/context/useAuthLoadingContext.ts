import { useContext } from 'react'

import { AuthLoadingContext } from '../../contexts'

const useAuthLoadingContext = () => useContext(AuthLoadingContext)

export default useAuthLoadingContext
