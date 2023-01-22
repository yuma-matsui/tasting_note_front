import { useCallback, useEffect } from 'react'

const useBlockBrowserBack = () => {
  const blockBrowserBack = useCallback(() => {
    window.history.go(1)
  }, [])

  useEffect(() => {
    window.history.pushState(null, '', window.location.href)
    window.addEventListener('popstate', blockBrowserBack)

    return () => window.removeEventListener('popstate', blockBrowserBack)
  }, [blockBrowserBack])
}

export default useBlockBrowserBack
