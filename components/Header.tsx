import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

import Container from 'components/Container'

const Navigation = styled(Container)`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 80px;
`

const Header: React.FC = () => {
  return (
    <Navigation>
      <div>
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="Bisita logo" width={36} height={36} />
          </a>
        </Link>
      </div>
    </Navigation>
  )
}

export default Header
