// import { Link } from 'react-router-dom';
import useRequest from '../../hooks/useRequest';
import { User } from '../../types/user';
import Spinner from '../Spinner/Spinner';
import { BASE_URL, POSTS_PATH, USERS_PATH } from '../../constants/api';
import { Post } from '../../types/posts';
import { useMemo } from 'react';
import {
  ListWrapper,
  PostEntry,
  PostsListWrapper,
  StyledH1,
  StyledList,
} from './postsList.styles';
import { Link } from 'react-router-dom';

const PostsList = () => {
  const paths = useMemo(
    () => [`${BASE_URL}/${POSTS_PATH}`, `${BASE_URL}/${USERS_PATH}`],
    []
  );

  const { data, loading, error } = useRequest<[]>(paths);
  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  const posts: Post[] = data?.[0] ?? [];
  const users: User[] = data?.[1] ?? [];

  return (
    <PostsListWrapper>
      <StyledH1>Post List</StyledH1>
      <ListWrapper>
        <StyledList>
          {posts?.map((post: Post) => {
            const author = users?.find((user: User) => user.id === post.userId);
            return (
              <PostEntry key={post.id}>
                <p>
                  <Link to={`${POSTS_PATH}/${post.id}`}>{post.title}</Link> by{' '}
                  <Link to={`${USERS_PATH}/${post.userId}`}>
                    {author?.name || 'Unknown Author'}
                  </Link>
                </p>
              </PostEntry>
            );
          })}
        </StyledList>
      </ListWrapper>
    </PostsListWrapper>
  );
};

export default PostsList;
