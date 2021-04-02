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
  font-family: 'Axiforma', sans-serif;
  font-size: ${size.font.p}px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 0;
  padding: 0.5rem 2rem 0.4rem;
  border: none;
  border-radius: 10px;
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
      background: ${color.base.purple};
      color: ${color.base.white};

      &:hover {
        background: ${color.linear.primary};
      }
    `};

  ${(props) =>
    props.secondary &&
    css`
      background: ${color.secondary.warning};
      color: ${color.base.white};

      &:hover {
        background: ${color.linear.secondary};
      }
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
