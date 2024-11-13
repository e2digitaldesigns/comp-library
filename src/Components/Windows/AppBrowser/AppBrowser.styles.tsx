import Styled from "styled-components";

export const AppBrowserWrapper = Styled.div`
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 640px;
    border: .0625rem solid ${props => props.theme.colors.borderColor};
    border-radius: .5rem;
    backdrop-filter: blur(14px);
    background-color: ${props => props.theme.colors.primaryBgColor};
    box-shadow: ${props => props.theme.boxShadows.large};
    overflow: hidden;
    box-sizing: border-box;

    * {
        box-sizing: border-box;
        color: ${props => props.theme.colors.text};
    }
`;

export const AppListWrapper = Styled.div`
    display: grid;
    flex-direction: column;
    height: 290px;
    margin: 0 2rem;
    padding: .5rem;
    width: calc(100% - 4rem);
    grid-template-rows: 2rem 1fr 1.75rem;
    `;
