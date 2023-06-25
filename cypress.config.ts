import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      process.env.REACT_APP_FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY
      process.env.REACT_APP_FIREBASE_AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
      process.env.REACT_APP_FIREBASE_PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID
      process.env.REACT_APP_FIREBASE_STORAGE_BUCKET = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
      process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
      process.env.REACT_APP_FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID
      process.env.REACT_APP_FIREBASE_MEASUREMENT_ID = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    }
  },
  video: false
})
