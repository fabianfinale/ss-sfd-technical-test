import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useRequest from '../../hooks/useRequest';
import { BASE_URL, USERS_PATH } from '../../constants/api';
import { User } from '../../types/user';
import { StyledH2, StyledP } from '../../styles/common.styles';
import GoBackButton from '../GoBack/GoBack';
import Spinner from '../Spinner/Spinner';
import { UserDetailsWrapper, UserLink } from './userDetails.styles';

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const path = useMemo(() => `${BASE_URL}/${USERS_PATH}/${id}`, [id]);

  const { data, loading, error } = useRequest<User>(path);

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  const user = data as User;

  return (
    <UserDetailsWrapper>
      <GoBackButton />
      <StyledH2>{user.name}</StyledH2>
      <StyledP>
        Email: <UserLink href={`mailto:{user.email}`}>{user.email}</UserLink>
      </StyledP>
      <StyledP>
        Phone: <UserLink href={`tel:{user.phone}`}>{user.phone}</UserLink>
      </StyledP>
      <StyledP>
        Address: {user.address.city}, {user.address.street},{' '}
        {user.address.zipcode}
      </StyledP>
    </UserDetailsWrapper>
  );
};

export default UserDetails;
