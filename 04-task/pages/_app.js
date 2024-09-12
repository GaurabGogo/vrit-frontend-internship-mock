import { SessionProvider } from "next-auth/react";
import "../styles/globals.css"; // Ensure you import your global styles if any
import Header from "@/components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
