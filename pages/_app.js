import "./styles.css";
import Layout from "../components/Layout";
import ContextProvider from "../lib/Context";
export default function App({ Component, pageProps }) {
  return (
    <>
      <h1>Movie Database App</h1>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </>
  );
}
