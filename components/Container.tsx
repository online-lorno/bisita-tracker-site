import styled from 'styled-components'

import { breakpoints as bp } from 'lib/constants/layout'

const Container = styled.div`
  position: relative;
  min-width: ${bp.sm};
  margin: 0 auto;

  @media screen and (min-width: ${bp.md}) {
    max-width: ${bp.lg};
  }
`

export default Container
