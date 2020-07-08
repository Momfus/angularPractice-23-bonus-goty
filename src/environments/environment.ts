// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://localhost:5000/firestore-grafica-angularudemy/us-central1',

  firebase: {
    apiKey: 'AIzaSyBYZZtpyRZbfkgYeLGNlzwkwsNqdi4RwNo',
    authDomain: 'firestore-grafica-angularudemy.firebaseapp.com',
    databaseURL: 'https://firestore-grafica-angularudemy.firebaseio.com',
    projectId: 'firestore-grafica-angularudemy',
    storageBucket: 'firestore-grafica-angularudemy.appspot.com',
    messagingSenderId: '864277193873',
    appId: '1:864277193873:web:e5f069640a25560b198b30'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
