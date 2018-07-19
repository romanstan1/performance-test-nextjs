# This project was bootstrapped with Create Next app

## It is a Server Side Rendered Ecommerce demo app build using Next Js, and PWA

Next js provides SSR, code splitting and prefetching by default. It is SSR framework for React.

Data is pulled from a Firebase db which acts as a CMS.

It uses some Material UI components and icons.

[`Styled Components`](https://www.styled-components.com/) is used for ease of development and to serve each pages CSS in the html head for a faster load time.

Redux creates and handles state throughout the app.

It is a PWA, in that it has a Service worker that caches files and assets and data. The offline strategy is basic in that it caches all files, data and assets using sw-precache-webpack-plugin. It also has a Manfiest.json file and therefore surfaces an option to the user to 'Add to home screen' when on Android.

It has the ability to query the Firebase DB by voice search using [`React speech recognition`](https://www.npmjs.com/package/react-speech-recognition) which uses the [`Web Speech Api`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition). This only works in Chrome.



[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/with-styled-components)

# Example app with styled-components

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/segmentio/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
# or
yarn create next-app --example with-styled-components with-styled-components-app
```

### Download manually

Download the example [or clone the repo](https://github.com/zeit/next.js):

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-styled-components
cd with-styled-components
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

This example features how you use a different styling solution than [styled-jsx](https://github.com/zeit/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`.
