import styled from 'styled-components';
import { Wrapper } from '../../styles/common.styles';

const PostsListWrapper = styled(Wrapper)`
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
`;

const StyledH1 = styled.h1``;

const ListWrapper = styled(Wrapper)`
  overflow-x: hidden;
  overflow-y: auto;
  align-items: flex-start;
`;

const StyledList = styled.ul``;

const PostEntry = styled.li``;

export { PostsListWrapper, StyledH1, ListWrapper, StyledList, PostEntry };
