import Layout from '../components/Layout';
import '../styles/globals.css'; // Import global styles

function MyApp({ Component, pageProps }) {
  // Any custom initialization or context setup can be done here

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
