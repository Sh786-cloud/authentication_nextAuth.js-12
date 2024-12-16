import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ 
  Component, pageProps: {session, ...pageProps} }: {
    Component : React.ComponentType
    pageProps : any}) {
  return (
    <SessionProvider
    session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
