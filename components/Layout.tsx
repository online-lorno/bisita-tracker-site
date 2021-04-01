import React, { ReactNode } from 'react'
import Head from 'next/head'

import Header from 'components/Header'

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
  </>
)

export default Layout
