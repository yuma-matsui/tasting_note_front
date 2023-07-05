import { FC, useCallback, useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

import { ReactNodeChildren } from '../types'
import { RequestingContext, RequestingDispatchContext } from '../contexts'

const RequestingProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [requesting, setRequesting] = useState(false)
  const { showBoundary } = useErrorBoundary()

  const fetchAndChangeRequesting = useCallback(
    async (fetch: () => Promise<void>) => {
      setRequesting(true)

      try {
        await fetch()
      } catch (e) {
        if (e instanceof Error) showBoundary(e)
      } finally {
        setRequesting(false)
      }
    },
    [showBoundary]
  )

  return (
    <RequestingContext.Provider value={requesting}>
      <RequestingDispatchContext.Provider value={fetchAndChangeRequesting}>
        {children}
      </RequestingDispatchContext.Provider>
    </RequestingContext.Provider>
  )
}

export default RequestingProvider
