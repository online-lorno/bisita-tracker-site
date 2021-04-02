import styled from 'styled-components'

import Container from 'components/Container'
import color from 'lib/constants/color'

const FooterContainer = styled.footer`
  background: ${color.base.dark};
  padding: 2rem 0;
`

const FooterContent = styled(Container)`
  p {
    color: ${color.text.secondary};

    &.center {
      text-align: center;
    }
  }
`

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestiae vitae dolor
          molestias perferendis magni, dolorem facilis. Dolorum nemo nisi fuga ratione iste error
          qui quidem, alias fugiat distinctio libero.
        </p>
        <hr />
        <p className="center">© 2021 Bisita</p>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
