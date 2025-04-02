import "../styles/globals.css";
import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
      <Analytics />
    </AnimatePresence>
  );
}

export default MyApp;
