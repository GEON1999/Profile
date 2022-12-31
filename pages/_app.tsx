import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useRef } from "react";


function MyApp({ Component, pageProps }: AppProps) {
  const scrollTopRef = useRef(null);
  return (

    <div className="w-full h-full">
      <Component {...pageProps} />
    </div>

  );
}

export default MyApp;
