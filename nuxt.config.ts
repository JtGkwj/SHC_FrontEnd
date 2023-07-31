// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],
    build: {
      transpile: ['vuetify'],
    },
    modules: ["nuxt-security","@pinia/nuxt"],
    security: {
      headers: {
        crossOriginResourcePolicy: 'same-origin',
        crossOriginOpenerPolicy: 'same-origin',
        crossOriginEmbedderPolicy: 'require-corp',
        contentSecurityPolicy: {
          'base-uri': ["'self'"],
          'font-src': ["'self'", 'https:', 'data:'],
          'form-action': ["'self'"],
          'frame-ancestors': ["'self'"],
          'img-src': ["'self'", 'data:'],
          'object-src': ["'none'"],
          'script-src-attr': ["'none'"],
          'style-src': ["'self'", 'https:', "'unsafe-inline'"],
          // 'script-src': ['self', 'unsafe-inline', 'unsafe-eval'],
          'upgrade-insecure-requests': true
        },
        originAgentCluster: '?1',
        referrerPolicy: 'no-referrer',
        strictTransportSecurity: {
          maxAge: 15552000,
          includeSubdomains: true
        },
        xContentTypeOptions: 'nosniff',
        xDNSPrefetchControl: 'off',
        xDownloadOptions: 'noopen',
        xFrameOptions: 'SAMEORIGIN',
        xPermittedCrossDomainPolicies: 'none',
        xXSSProtection:  '0',
        permissionsPolicy: {
          'camera': ['()'],
          'display-capture': ['()'],
          'fullscreen': ['()'],
          'geolocation': ['()'],
          'microphone': ['()'],
        }
      },
      requestSizeLimiter: {
          maxRequestSizeInBytes: 2000000,
          maxUploadFileRequestInBytes: 8000000,
      },
      rateLimiter: {
        // Twitter search rate limiting
          tokensPerInterval: 150,
          interval: "hour",
          fireImmediately: true,
      },
      xssValidator: {},
      corsHandler: {
        origin: '*',
        methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
        preflight: {
          statusCode: 204
        }
      },
      allowedMethodsRestricter: '*',
      hidePoweredBy: true,
      basicAuth: false,
      enabled: true,
      csrf: false,
    }
})
