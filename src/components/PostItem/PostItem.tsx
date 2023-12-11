import { Link, useParams } from 'react-router-dom';
import useRequest from '../../hooks/useRequest';
import { useMemo } from 'react';
import {
  BASE_URL,
  COMMENTS_PATH,
  POSTS_PATH,
  USERS_PATH,
} from '../../constants/api';
import Spinner from '../Spinner/Spinner';
import { Comment } from '../../types/comment';
import { Post } from '../../types/posts';
import { User } from '../../types/user';
import {
  ListEntry,
  ListWrapper,
  StyledH2,
  StyledH3,
  StyledList,
  StyledP,
} from '../../styles/common.styles';
import {
  CommentBody,
  CommentEmail,
  CommentTitle,
  PostsItemWrapper,
} from './postItem.styles';
import GoBackButton from '../GoBack/GoBack';

const PostItem = () => {
  const { id } = useParams<{ id: string }>();

  const paths = useMemo(
    () => [
      `${BASE_URL}/${POSTS_PATH}/${id}`,
      `${BASE_URL}/${USERS_PATH}`,
      `${BASE_URL}/${POSTS_PATH}/${id}/${COMMENTS_PATH}`,
    ],
    [id]
  );

  const { data, loading, error } = useRequest<[]>(paths);

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  const post: Post =
    !Array.isArray(data?.[0]) && data?.[0]
      ? data?.[0]
      : {
          id: 0,
          title: '',
          body: '',
          userId: 0,
        };
  const users: User[] = data?.[1] ?? [];
  const comments: Comment[] = data?.[2] ?? [];
  const author = users?.find((user: User) => user.id === post.userId);

  return (
    <PostsItemWrapper>
      <GoBackButton />
      <StyledH2>{post.title}</StyledH2>
      <StyledH3>
        By:{' '}
        <Link to={`${USERS_PATH}/${post.userId}`}>
          {author?.name || 'Unknown Author'}
        </Link>
      </StyledH3>
      <StyledP>{post.body}</StyledP>
      <ListWrapper>
        <StyledList>
          {comments.concat(comments)?.map((comment: Comment) => (
            <ListEntry key={comment.id}>
              <CommentTitle>
                {comment.name} by{' '}
                <CommentEmail href={`mailto:${comment.email}`}>
                  {comment.email}
                </CommentEmail>
                <br />
                <CommentBody>{comment.body}</CommentBody>
              </CommentTitle>
            </ListEntry>
          ))}
        </StyledList>
      </ListWrapper>
    </PostsItemWrapper>
  );
};

export default PostItem;
