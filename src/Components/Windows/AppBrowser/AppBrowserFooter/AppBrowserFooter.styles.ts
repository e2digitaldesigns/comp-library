import Styled from "styled-components";

export const FooterWrapper = Styled.div`
   border-top: .0625rem solid ${props => props.theme.colors.borderColor};
   height:4rem;
   background-color: ${props => props.theme.colors.gray2};
`;

export const Footer = Styled.div`
   display:flex;
   margin: .5rem 2rem;
   padding: .5rem;
   justify-content: space-between;
`;

export const FooterButtonWrapper = Styled.button`
   display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    border-radius: .25rem;
    outline: none;
    border: .0625rem dashed transparent;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.2s;
    padding: .25rem .5rem;
    gap: .5rem;
    font-size: .75rem;
    &:focus {
        border: .0625rem dashed ${props => props.theme.colors.gray6};
    }


    &:hover {
        background-color: ${props => props.theme.colors.gray3};
    }

    > div:nth-of-type(1) {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${props => props.theme.colors.gray4};

    > svg{
        height: 1rem;
        width: 1rem;
    }

    }
`;

export const FooterLogoutButton = Styled.button`
    border: .0625rem dashed transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border-radius: .25rem;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${props => props.theme.colors.gray3};
    }

    &:focus {
        border: .0625rem dashed ${props => props.theme.colors.gray6};
    }
   
    > svg{
        height: 1rem;
        width: 1rem;
    }

    `;
