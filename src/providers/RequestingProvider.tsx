import { FC, useMemo, useState } from 'react'

import { ReactNodeChildren } from '../types'
import { RequestingContext } from '../contexts'

const RequestingProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [requesting, setRequesting] = useState(false)

  const requestingState = useMemo(() => ({ requesting, setRequesting }), [requesting])

  return <RequestingContext.Provider value={requestingState}>{children}</RequestingContext.Provider>
}

export default RequestingProvider
