import '../styles/globals.scss'
import Layout from '../components/Layout'
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={Component}/>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp