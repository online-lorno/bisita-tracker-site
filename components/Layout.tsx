import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import Header from 'components/Header'
import Footer from 'components/Footer'

type Props = {
  children?: ReactNode
}

const Content = styled.div`
  min-height: 100vh;
`

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
)

export default Layout
