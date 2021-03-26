import { AppProps } from "next/app";
import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
