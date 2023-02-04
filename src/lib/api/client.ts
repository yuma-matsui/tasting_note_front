import axios from 'axios'
import applyCaseMiddleware from 'axios-case-converter'

const options = {
  ignoreHeaders: true
}

const client = applyCaseMiddleware(
  axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api/v1`
  }),
  options
)

export default client
