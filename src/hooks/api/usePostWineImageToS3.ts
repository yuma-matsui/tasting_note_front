import axios from 'axios'

import useCurrentUserContext from '../context/useCurrentUserContext'
import useRequestingDispatchContext from '../context/useRequestingDispatchContext'
import useAxios from '../useAxios'

const usePostWineImageToS3 = () => {
  const currentUser = useCurrentUserContext()
  const { client, getHeaders } = useAxios()
  const fetchAndChangeRequesting = useRequestingDispatchContext()

  const postWineImageToS3 = async (file: File, filename: string) => {
    if (!currentUser) return

    const fetchFunction = async () => {
      const { data: signedUrl } = await client.post<string>('/images', { filename }, await getHeaders(currentUser))
      await axios.put(signedUrl, file)
    }

    await fetchAndChangeRequesting(fetchFunction)
  }

  return {
    postWineImageToS3
  }
}

export default usePostWineImageToS3
