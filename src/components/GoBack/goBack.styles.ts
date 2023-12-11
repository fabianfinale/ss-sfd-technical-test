import styled from 'styled-components';
import { Palette } from '../../styles/palette.styles';
import { Wrapper } from '../../styles/common.styles';

const ButtonWrapper = styled(Wrapper)`
  flex-direction: row;
  justify-content: flex-start;

  position: relative;
  transition: color filter 0.3s ease;

  &:hover {
    color: ${Palette.WHITE};
    filter: drop-shadow(0 0 1rem ${Palette.HOVER_WHITE});
  }
`;
const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;

  font-size: 1.333rem;
  color: ${Palette.OFF_WHITE};
  text-decoration: none;
`;

const StyledImage = styled.img``;

export { ButtonWrapper, StyledButton, StyledImage };
