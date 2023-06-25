import { defineConfig } from 'cypress'
import 'dotenv/config'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      config.env = process.env
      return config
    }
  },
  video: false
})
