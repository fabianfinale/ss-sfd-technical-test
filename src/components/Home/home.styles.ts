import styled from 'styled-components';
import {
  ALIGN_ITEMS,
  FLEX_DIRECTION,
  JUSTIFY_CONTENT,
  Wrapper,
  flex,
} from '../../styles/common.styles';

const StyledHome = styled.main`
  ${flex(FLEX_DIRECTION.column, JUSTIFY_CONTENT.flexStart, ALIGN_ITEMS.center)}

  height: calc(100% - 8rem);
`;
const HomeWrapper = styled(Wrapper)`
  box-sizing: content-box;
  padding: 2rem;
  margin: 2rem;
  max-width: 100rem;
  max-height: calc(100% - 8rem);

  background-color: ${({ theme }) => theme.wrapper};
  border-radius: 2rem;
`;

export { StyledHome, HomeWrapper };
