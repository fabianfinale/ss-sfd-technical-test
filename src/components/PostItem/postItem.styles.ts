import styled from 'styled-components';
import { Wrapper } from '../../styles/common.styles';

const PostsItemWrapper = styled(Wrapper)`
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
`;

const CommentTitle = styled.p``;

const CommentBody = styled.small`
  margin-top: 0;
  font-style: italic;
`;

const CommentEmail = styled.a``;

export { PostsItemWrapper, CommentTitle, CommentBody, CommentEmail };
