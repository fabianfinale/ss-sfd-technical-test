import { createGlobalStyle } from 'styled-components';
import normalize from './normalize.module.css';

const StylesReset = createGlobalStyle`
    ${normalize}
`;

export default StylesReset;
