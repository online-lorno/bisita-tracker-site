import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

import Container from 'components/Container'
import Button from 'components/Button'
import size from 'lib/constants/size'
import color from 'lib/constants/color'

const Navigation = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
`

const LeftNavigation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const RightNavigation = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const ImageNavLink = styled.div`
  margin-right: 44px;
  cursor: pointer;
`

const NavLink = styled.a`
  font-size: ${12 / size.font}rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${color.lightGray};

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover,
  &:focus {
    color: ${color.white};
  }
`

const Header: React.FC = () => {
  return (
    <Navigation>
      <LeftNavigation>
        <ImageNavLink>
          <Link href="/">
            <Image src="/logo.svg" alt="Bisita logo" width={36} height={36} />
          </Link>
        </ImageNavLink>
        <Link href="/">
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/about">
          <NavLink>About</NavLink>
        </Link>
        <Link href="/faq">
          <NavLink>FAQ</NavLink>
        </Link>
      </LeftNavigation>
      <RightNavigation>
        <Link href="/account/register">
          <Button secondary>Register</Button>
        </Link>
        <Link href="/account/login">
          <Button primary>Login</Button>
        </Link>
      </RightNavigation>
    </Navigation>
  )
}

export default Header
