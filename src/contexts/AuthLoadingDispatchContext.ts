import { Dispatch, SetStateAction, createContext } from 'react'

const AuthLoadingDispatchContext = createContext<Dispatch<SetStateAction<boolean>>>(() => {
  throw Error('No default value!')
})

export default AuthLoadingDispatchContext
