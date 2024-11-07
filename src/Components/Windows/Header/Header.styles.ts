import Styled from "styled-components";

export const HeaderWrapper = Styled.header`
    width: 100vw;
    height: 3.125rem;
    top: 0;
    left: 0;
    position: fixed;
    box-shadow: ${({ theme }) => theme.boxShadows.small};
    background-color: ${props => props.theme.colors.primaryBgColor};
`;
