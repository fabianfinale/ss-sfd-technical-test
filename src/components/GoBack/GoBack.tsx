import { useNavigate } from 'react-router-dom';
import { ButtonWrapper, StyledButton, StyledImage } from './goBack.styles';
import Chevron from '../../assets/chevron-left.svg';

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ButtonWrapper>
      <StyledImage src={Chevron} alt='SVG icon' />
      <StyledButton onClick={goBack}>Go Back</StyledButton>
    </ButtonWrapper>
  );
};

export default GoBackButton;
