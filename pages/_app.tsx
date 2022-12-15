import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full h-full">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
