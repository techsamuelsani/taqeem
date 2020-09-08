export const environment = {
  production: false,
  serverUrl: 'https://admin.taqeem.app/api',
  appUrl: 'https://awesome-pasteur-37789a.netlify.app/',
  appImageUrl: 'https://awesome-pasteur-37789a.netlify.app/assets/img/nearme.png',
  appId: 'YOUR_APP_ID',
  fbId: 'YOUR_FB_ID',
  googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
  androidHeaderColor: '#d82c6b',
  defaultUnit: 'mi',
  defaultLang: 'en',
  googleClientId: 'YOUR_GOOGLE_CLIENT_ID',
  stripePublicKey: 'YOUR_STRIPE_PUBLIC_KEY',
  oneSignal: {
    appId: 'YOUR_ONESIGNAL_APP_ID',
    googleProjectNumber: 'YOUR_GOOGLE_PROJECT_NUMBER'
  },
  currency: {
    code: 'USD',
    display: 'symbol',
    digitsInfo: '1.2-2',
  },
  admob: {
    banner: {
      android: 'ca-app-pub-xxxxxxxxxxxxxxxxxxxx',
      ios: 'ca-app-pub-xxxxxxxxxxxxxxxxxxxx',
    },
  }
};

import 'zone.js/dist/zone-error';  // Included with Angular CLI.
