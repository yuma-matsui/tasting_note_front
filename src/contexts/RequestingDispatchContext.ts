import { Dispatch, SetStateAction, createContext } from 'react'

const RequestingDispatchContext = createContext<Dispatch<SetStateAction<boolean>>>(() => {
  throw Error('No default value!')
})

export default RequestingDispatchContext
