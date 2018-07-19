# This project was bootstrapped with Create Next app

## It is a Server Side Rendered Ecommerce demo app build using Next Js, and PWA

Next js provides SSR, code splitting and prefetching by default. It is SSR framework for React.

Data is pulled from a Firebase db which acts as a CMS.

It uses some Material UI components and icons.

[`Styled Components`](https://www.styled-components.com/) is used for ease of development and to serve each pages CSS in the html head for a faster load time.

Redux creates and handles state throughout the app.

It is a PWA, in that it has a Service worker that caches files and assets and data. The offline strategy is basic in that it caches all files, data and assets using sw-precache-webpack-plugin. It also has a Manfiest.json file and therefore surfaces an option to the user to 'Add to home screen' when on Android.

It has the ability to query the Firebase DB by voice search using [`React speech recognition`](https://www.npmjs.com/package/react-speech-recognition) which uses the [`Web Speech Api`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition). This only works in Chrome.
