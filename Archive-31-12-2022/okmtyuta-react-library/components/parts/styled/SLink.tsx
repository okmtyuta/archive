import styled, { css } from 'styled-components';
import { StylingInterface } from './interface';

interface SLinkProps extends StylingInterface {
}

export const SLink = styled.a<SLinkProps>`
  color: ${props => props.color || "inherit"}
`