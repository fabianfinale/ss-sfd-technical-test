import useRequest from '../../hooks/useRequest';
import { User } from '../../types/user';
import Spinner from '../Spinner/Spinner';
import { BASE_URL, POSTS_PATH, USERS_PATH } from '../../constants/api';
import { Post } from '../../types/posts';
import { useMemo } from 'react';
import { PostsListWrapper } from './postsList.styles';
import { ListWrapper, StyledH1, StyledList } from '../../styles/common.styles';
import PostEntry from '../PostEntry/PostEntry';

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
            return <PostEntry key={post.id} post={post} author={author} />;
          })}
        </StyledList>
      </ListWrapper>
    </PostsListWrapper>
  );
};

export default PostsList;
