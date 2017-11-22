// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDavCrkFIco0odRAnFvorFBUWtpI87Hyhg",
    authDomain: "pick-trick.firebaseapp.com",
    databaseURL: "https://pick-trick.firebaseio.com",
    projectId: "pick-trick",
    storageBucket: "pick-trick.appspot.com",
    messagingSenderId: "582480630290"
  }
};
