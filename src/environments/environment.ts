// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  maxUploadSize: '250',
  logo: '/assets/logo.png',
  baseUrl: 'http://localhost:3000/api',
  //baseUrl: 'https://app.wafrn.net/api',
  //baseMediaUrl: 'https://media.wafrn.net',
  externalCacheurl: 'https://cache.wafrn.net/?media=',
  //baseMediaUrl: 'wafrnmedia.b-cdn.net',
  baseMediaUrl: 'http://localhost:3000/api/uploads',
  frontUrl: 'http://localhost:4200',
  shortenPosts: 5,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
