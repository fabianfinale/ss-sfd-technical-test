import styled from 'styled-components';
import { Wrapper } from '../../styles/common.styles';

const StyledFooter = styled.footer`
  height: 8rem;
  margin-bottom: 0;
`;

const FooterWrapper = styled(Wrapper)`
  justify-content: center;
  height: 100%;
`;

const Author = styled.small``;

const Email = styled.a`
  font-size: 1.111rem;
`;

export { StyledFooter, FooterWrapper, Author, Email };
