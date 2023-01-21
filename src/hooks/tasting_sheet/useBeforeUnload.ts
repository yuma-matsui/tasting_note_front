import { useEffect } from 'react'

const useBeforeUnload = () => {
  const onUnload = (e: BeforeUnloadEvent) => {
    e.preventDefault()
    e.returnValue = ''
  }

  useEffect(() => {
    window.addEventListener('beforeunload', onUnload)

    return () => window.removeEventListener('beforeunload', onUnload)
  })
}

export default useBeforeUnload
