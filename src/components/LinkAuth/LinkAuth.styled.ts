import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
gap: 3px;
margin-top: 12px;
font-size: var(--text-size-xxs);
line-height: 1.16;

@media screen and (min-width: 768px) {
    font-size: var(--text-size-xs);
    line-height: 1.42;
    margin-top: 16px;
}
`

export const Text = styled.p`
color: var(--secondary-text-color);
`

export const StyledLink = styled(Link)`
color: var(--accent-color);
text-decoration: underline;
font-family: 'Manrope-Bold';
`