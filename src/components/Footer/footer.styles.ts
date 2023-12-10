import styled from 'styled-components';
import { Palette } from '../../styles/palette.styles';
import { Wrapper } from '../../styles/common.styles';

const StyledFooter = styled.footer`
  height: 8rem;
`;

const FooterWrapper = styled(Wrapper)`
  justify-content: center;
`;

const Author = styled.small``;

const Email = styled.a`
  font-size: 1.111rem;
  color: ${Palette.OFF_WHITE};
  text-decoration: none;
  position: relative;

  transition: color filter 0.3s ease;

  &:hover {
    color: ${Palette.WHITE};
    filter: drop-shadow(0 0 1rem ${Palette.HOVER_WHITE});
  }
`;

export { StyledFooter, FooterWrapper, Author, Email };
