import styled, { keyframes } from 'styled-components';
import { Palette } from '../../styles/palette.styles';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const StyledSpinner = styled.div`
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  display: inline-block;
  width: 5rem;
  height: 5rem;

  & svg {
    animation: ${rotate} 1.4s linear infinite;
    z-index: 2;
    position: absolute;
    inset: 0;

    & circle {
      stroke: ${Palette.DEEP_PURPLE};
      stroke-linecap: round;
      animation: ${dash} 1.4s ease-in-out infinite;
    }
  }
`;

export { StyledSpinner };
