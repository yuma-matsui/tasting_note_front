import axios from 'axios'
import applyCaseMiddleware from 'axios-case-converter'

const origin = process.env.REACT_APP_API_URL ?? 'https://api.tasting-note-staging.com'

const options = {
  ignoreHeaders: true,
}

const client = applyCaseMiddleware(
  axios.create({
    baseURL: `${origin}/api/v1`,
  }),
  options
)

export default client
