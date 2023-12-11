import { useNavigate } from 'react-router-dom';
import { ButtonWrapper, StyledButton, StyledImage } from './goBack.styles';
import Chevron from '../../assets/chevron-left.svg';
import PurpleChevron from '../../assets/chevron-left-purple.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';

const GoBackButton = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ButtonWrapper>
      <StyledImage
        src={theme === 'dark' ? Chevron : PurpleChevron}
        alt='SVG icon'
      />
      <StyledButton onClick={goBack}>Go Back</StyledButton>
    </ButtonWrapper>
  );
};

export default GoBackButton;
