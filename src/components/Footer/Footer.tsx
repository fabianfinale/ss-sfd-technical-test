import { Author, Email, FooterWrapper, StyledFooter } from './footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <Author>Fabian Finalé Franqui</Author>
        <Email href='mailto:fabianfinale@gmail.com'>
          fabianfinale@gmail.com
        </Email>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;
