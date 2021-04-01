import styled, { css } from 'styled-components'

import color from 'lib/constants/color'
import size from 'lib/constants/size'

type Props = {
  // button type
  primary?: boolean
  secondary?: boolean

  // block button, width 100%
  block?: boolean
}

const Button = styled.button<Props>`
  display: inline-block;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: ${12 / size.font}rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 0;
  padding: ${8 / size.font}rem ${28 / size.font}rem;
  border: none;
  min-width: 150px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:focus {
    outline: none;
  }

  ${(props) =>
    (props.primary || (!props.primary && !props.secondary)) &&
    css`
      background: ${color.yellow};
      color: ${color.white};
      border-radius: 3px;
    `};

  ${(props) =>
    props.secondary &&
    css`
      background: transparent;
      color: ${color.yellow};
      border: 1px solid ${color.yellow};
      border-radius: 4px;
    `};

  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
      margin: 0;
    `};
`

export default Button
