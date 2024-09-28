// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  maxUploadSize: '250',
  logo: '/assets/logo.png',
  baseUrl: 'http://localhost:3001/api',
  //baseUrl: 'https://app.wafrn.net/api',
  baseMediaUrl: 'https://dev6.wafrn.net/api/uploads',
  //baseMediaUrl: 'https://app.wafrn.net/api/uploads',
  //baseMediaUrl: 'http://localhost:3001/api/uploads',
  //baseMediaUrl: 'https://media.wafrn.net',
  //baseMediaUrl: 'wafrnmedia.b-cdn.net',
  //externalCacheurl: 'http://localhost:3000/api/cache?media=',
  externalCacheurl: 'https://app.wafrn.net/api/cache?media=',
  //externalCacheurl: 'https://cdn.wafrn.net/api/cache?media=',
  //externalCacheurl: 'https://cache.wafrn.net/?media=',
  frontUrl: 'http://localhost:4200',
  shortenPosts: 5,
  reviewRegistrations: true,
  disablePWA: false,
  maintenance: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error'; // Included with Angular CLI.
