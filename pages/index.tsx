import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import Container from 'components/Container'
import Button from 'components/Button'
import { breakpoints as bp } from 'lib/constants/layout'

const SectionContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-bottom: 100px;

  & > .text-content {
    width: 100%;
  }

  & > .image-content {
    display: none;
    padding: 0;
  }

  @media screen and (min-width: ${bp.md}) {
    & > .text-content {
      width: 50%;
    }

    & > .image-content {
      display: block;
      width: 50%;
      padding: 0 1rem;
    }
  }

  @media screen and (min-width: ${bp.lg}) {
    & > .text-content {
      width: 60%;
    }

    & > .image-content {
      display: block;
      width: 40%;
      padding: 0 2rem;
    }
  }
`

const IndexPage: React.FC = () => (
  <>
    <Head>
      <title>Bisita - Foot traffic tracker</title>
    </Head>
    <Container>
      <SectionContainer>
        <div className="text-content">
          <h2>Bisita - Foot traffic tracker app</h2>
          <p>
            Sunt voluptate ullamco ullamco minim laborum excepteur laborum laborum esse. Minim dolor
            ad et eu excepteur occaecat nostrud non consequat incididunt aliqua. Quis ex duis nulla
            ex aute. Excepteur cupidatat adipisicing velit esse nostrud occaecat reprehenderit non
            in tempor consequat. Commodo magna cillum magna cillum culpa id laboris anim dolore
            aliqua. Esse non adipisicing incididunt exercitation sint dolor deserunt cupidatat in.
          </p>
          <p>
            Eiusmod dolore id proident veniam eiusmod. Sit dolor irure sit eiusmod do veniam fugiat.
            Aliquip eu tempor duis dolor anim.
          </p>
          <Button primary>Lorem</Button>
          <Button secondary>Ipsum</Button>
        </div>
        <div className="image-content">
          <Image
            src="/images/onboarding-1.svg"
            alt="onboarding-1"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </SectionContainer>
      <SectionContainer>
        <div className="image-content">
          <Image
            src="/images/onboarding-2.svg"
            alt="onboarding-2"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className="text-content">
          <h2>Fugiat labore exercitation sunt pariatur fugiat id occaecat sint culpa.</h2>
          <p>
            Laboris excepteur tempor nulla ad ut adipisicing eu culpa sint tempor laborum culpa.
            Aliqua enim aliqua tempor elit ullamco cillum velit in voluptate esse nostrud ullamco
            eiusmod commodo. Laboris aliquip commodo qui qui duis nisi reprehenderit qui occaecat
            occaecat sunt. Lorem labore consequat adipisicing eiusmod amet amet sit eiusmod
            excepteur. Aute magna et est irure voluptate deserunt. In ad pariatur labore ad. Enim
            enim labore laborum esse esse excepteur do ea.
          </p>
          <p>
            Aliqua officia cillum sit occaecat enim minim. Exercitation fugiat sint pariatur
            proident voluptate ut dolor. Proident veniam ipsum excepteur veniam anim aliqua
            pariatur. Quis exercitation eu amet nulla deserunt duis sit nostrud. Eu officia officia
            eu occaecat nulla aliqua duis excepteur ullamco commodo ea dolore. Esse ex magna nisi do
            magna duis magna aliqua. Amet enim ea irure non.
          </p>
          <Button primary>Lorem</Button>
          <Button secondary>Ipsum</Button>
        </div>
      </SectionContainer>
      <SectionContainer>
        <div className="text-content">
          <h2>Bisita - Foot traffic tracker app</h2>
          <p>
            Sunt voluptate ullamco ullamco minim laborum excepteur laborum laborum esse. Minim dolor
            ad et eu excepteur occaecat nostrud non consequat incididunt aliqua. Quis ex duis nulla
            ex aute. Excepteur cupidatat adipisicing velit esse nostrud occaecat reprehenderit non
            in tempor consequat. Commodo magna cillum magna cillum culpa id laboris anim dolore
            aliqua. Esse non adipisicing incididunt exercitation sint dolor deserunt cupidatat in.
          </p>
          <p>
            Eiusmod dolore id proident veniam eiusmod. Sit dolor irure sit eiusmod do veniam fugiat.
            Aliquip eu tempor duis dolor anim.
          </p>
          <Button primary>Lorem</Button>
          <Button secondary>Ipsum</Button>
        </div>
        <div className="image-content">
          <Image
            src="/images/onboarding-3.svg"
            alt="onboarding-3"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </SectionContainer>
    </Container>
  </>
)

export default IndexPage
