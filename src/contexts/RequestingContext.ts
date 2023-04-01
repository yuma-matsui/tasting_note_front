import { Dispatch, SetStateAction, createContext } from 'react'

const RequestingContext = createContext<{
  requesting: boolean
  setRequesting: Dispatch<SetStateAction<boolean>>
}>({
  requesting: false,
  setRequesting: () => {}
})

export default RequestingContext
