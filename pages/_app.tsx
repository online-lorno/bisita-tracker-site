import type { AppProps } from 'next/app'

import Layout from 'components/Layout'
import 'styles/app.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
