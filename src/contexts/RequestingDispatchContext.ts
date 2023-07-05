import { createContext } from 'react'

const RequestingDispatchContext = createContext<(fetch: () => Promise<void>) => Promise<void>>(() => {
  throw Error('No default value!')
})

export default RequestingDispatchContext
