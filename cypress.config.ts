import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "pfmxch",

  // Disable unnecessary features
  video: false,
  screenshotOnRunFailure: false,

  // Faster execution
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 30000,
  requestTimeout: 10000,

  // Reduce memory usage
  numTestsKeptInMemory: 0,

  // Run browser faster
  chromeWebSecurity: false,

  // Disable file watching
  watchForFileChanges: false,

  e2e: {
    baseUrl: "http://localhost:3000", // your app URL

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // Retry only if needed
    retries: 0,
  },
});