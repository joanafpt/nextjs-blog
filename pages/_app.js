/*To load global CSS files, create a file called _app.js under pages and add the following content: */

import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}

/*This App component is the top-level component which will be common across all the different pages. You can use this App component to keep state when navigating between pages, for example. */