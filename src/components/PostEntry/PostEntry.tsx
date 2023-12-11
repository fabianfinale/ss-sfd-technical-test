import { ListEntry, StyledP } from '../../styles/common.styles';
import { Link } from 'react-router-dom';
import { POSTS_PATH, USERS_PATH } from '../../constants/api';
import useTruncate from '../../hooks/useTruncate';
import { User } from '../../types/user';
import { Post } from '../../types/posts';

interface PostEntryProps {
  post: Post;
  author: User | undefined; // Adjust the type as needed
}

const PostEntry: React.FC<PostEntryProps> = ({ post, author }) => {
  const truncatedTitle = useTruncate(post.title, 50);

  return (
    <ListEntry key={post.id}>
      <StyledP>
        <Link to={`${POSTS_PATH}/${post.id}`}>{truncatedTitle}</Link> by{' '}
        <Link to={`${USERS_PATH}/${post.userId}`}>
          {author?.name || 'Unknown Author'}
        </Link>
      </StyledP>
    </ListEntry>
  );
};

export default PostEntry;
