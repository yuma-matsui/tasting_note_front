import { defineConfig } from 'cypress'
import 'dotenv/config'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      process.env.REACT_APP_FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY
    }
  },
  video: false
})
