import axios from 'axios'
import { useErrorBoundary } from 'react-error-boundary'

import useAuthContext from '../context/useAuthContext'
import useAxios from '../useAxios'
import useRequestingContext from '../context/useRequestingContext'

const usePostWineImageToS3 = () => {
  const { showBoundary } = useErrorBoundary()

  const { currentUser } = useAuthContext()
  const { client, getHeaders } = useAxios()
  const { setRequesting } = useRequestingContext()

  const postWineImageToS3 = async (file: File, filename: string) => {
    if (!currentUser) return
    setRequesting(true)

    try {
      const { data: signedUrl } = await client.post<string>('/images', { filename }, await getHeaders(currentUser))
      await axios.put(signedUrl, file)
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    } finally {
      setRequesting(false)
    }
  }

  return {
    postWineImageToS3
  }
}

export default usePostWineImageToS3
