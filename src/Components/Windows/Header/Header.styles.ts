import Styled from "styled-components";

export const HeaderWrapper = Styled.header`
    width: 100vw;
    height: 3.125rem;
    top: 0;
    left: 0;
    position: fixed;
    box-shadow: ${({ theme }) => theme.boxShadows.small};
    background-color: ${props => props.theme.colors.primaryBgColor};

    display: grid;
    grid-template-columns: 220px 1fr 220px;
    padding: 0 1rem;
    border-bottom: .0625rem solid ${({ theme }) => theme.colors.borderColor};
`;

export const LogoWrapper = Styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    border-right: .0625rem solid ${({ theme }) => theme.colors.borderColor};
`;

export const ButtonWrapper = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > button:first-child {
        border-left: .0625rem solid ${({ theme }) => theme.colors.borderColor};
    }
`;

export const HeaderButton = Styled.button`
    background-color: transparent;
    border: none;
    border-right: .0625rem solid ${({ theme }) => theme.colors.borderColor};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    padding: .5rem;
    transition: color .2s;
    outline: none;
    width: 3.125rem;
    height: 3.125rem;
    display: flex;
    justify-content: center;
    align-items: center;

    >svg{
        padding:0;
        margin:0;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.textHover};
    }

    &:active {
        color: ${({ theme }) => theme.colors.textActive};
    }

    &:focus {
        color: green
    }
`;

export const UserWrapper = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
`;

export const UserAvatar = Styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray6};
    font-size: 1rem;
    font-weight: 700;
`;

export const UserInfo = Styled.div`
    display: flex;
    flex-direction: column;
    gap: .25rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: .75rem;
    line-height: 1rem;
`;

// 50 / 16 = 3.125rem
