import React, { ReactNode } from 'react'
import Head from 'next/head'

import Header from 'components/Header'
import Footer from 'components/Footer'

type Props = {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
