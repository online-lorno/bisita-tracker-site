import styled from 'styled-components'

import { breakpoints as bp } from 'lib/constants/layout'

const Container = styled.div`
  position: relative;
  min-width: ${bp.sm};
  margin: 0 auto;
  padding: 0 0.5rem;

  @media screen and (min-width: ${bp.md}) {
    max-width: ${bp.lg};
  }

  @media screen and (min-width: ${bp.lg}) {
    padding: 0;
  }
`

export default Container
