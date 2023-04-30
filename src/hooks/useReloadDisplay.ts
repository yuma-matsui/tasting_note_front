import { useEffect } from 'react'

const WAITING_RELOAD = 8000

const useReloadDisplay = () => {
  useEffect(() => {
    const reloadDisplay = setTimeout(() => {
      window.location.reload()
    }, WAITING_RELOAD)

    return () => window.clearTimeout(reloadDisplay)
  }, [])
}

export default useReloadDisplay
