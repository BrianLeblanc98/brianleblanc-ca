// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Brian LeBlanc'
    }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  runtimeConfig: {
    public: {
        fireBaseApiKey: process.env.NUXT_FIRE_BASE_API_KEY,
        fireBaseAuthDomain: process.env.NUXT_FIRE_BASE_AUTH_DOMAIN,
        fireBaseProjectId: process.env.NUXT_FIRE_BASE_PROJECT_ID,
        fireBaseStorageBucket: process.env.NUXT_FIRE_BASE_STORAGE_BUCKET,
        fireBaseMessagingSenderId: process.env.NUXT_FIRE_BASE_MESSAGING_SENDER_ID,
        fireBaseappId: process.env.NUXT_FIRE_BASE_APP_ID,
        fireBaseMeasurementId: process.env.NUXT_FIRE_BASE_MEASURMENT_ID
    }
}
});
