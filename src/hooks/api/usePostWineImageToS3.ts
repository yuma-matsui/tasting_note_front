import axios from 'axios'
import { useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

import useAuthContext from '../context/useAuthContext'
import useAxios from '../useAxios'

const usePostWineImageToS3 = () => {
  const [posting, setPosting] = useState(false)
  const { showBoundary } = useErrorBoundary()

  const { currentUser } = useAuthContext()
  const { client, getHeaders } = useAxios()

  const postWineImageToS3 = async (file: File, filename: string) => {
    if (!currentUser) return
    setPosting(true)

    try {
      const { data: signedUrl } = await client.post<string>('/images', { filename }, await getHeaders(currentUser))
      await axios.put(signedUrl, file)
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    } finally {
      setPosting(false)
    }
  }

  return {
    posting,
    postWineImageToS3
  }
}

export default usePostWineImageToS3
