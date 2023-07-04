import { FC, useMemo, useState } from 'react'

import { ReactNodeChildren } from '../types'
import { RequestingContext, RequestingDispatchContext } from '../contexts'

const RequestingProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [requesting, setRequesting] = useState(false)
  const requestingState = useMemo(() => setRequesting, [])

  return (
    <RequestingContext.Provider value={requesting}>
      <RequestingDispatchContext.Provider value={requestingState}>{children}</RequestingDispatchContext.Provider>
    </RequestingContext.Provider>
  )
}

export default RequestingProvider
