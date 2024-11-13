import Styled from "styled-components";

export const AlertBoxWrapper = Styled.div`
    backdrop-filter: blur(14px);
    background-color: ${props => props.theme.colors.primaryBgColor};
    border-radius: .25rem;
    border: .0625rem solid ${props => props.theme.colors.borderColor};
    box-shadow: ${props => props.theme.boxShadows.medium};
    box-sizing: border-box;
    display: grid;
    gap: .5rem;
    grid-template-rows: auto minMax(4rem, auto) auto;
    overflow: hidden;
    padding-top: 1rem;
    width: 440px;

    * {
        box-sizing: border-box;
        color: ${props => props.theme.colors.text};
    }
`;

export const Header = Styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.25rem;
   font-weight: bold;
   color: ${props => props.theme.colors.textActive};
   text-transform: uppercase;
`;

export const Content = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .875rem;
    color: ${props => props.theme.colors.text};
    padding: 0 2rem;
    `;

export const Footer = Styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   border-top: .0625rem solid ${props => props.theme.colors.borderColor};
   background-color: ${props => props.theme.colors.gray2};
   
`;

export const Button = Styled.button`
    cursor: pointer;
    font-size: 1rem;
    text-align: center;
    border: none;
    outline: none;
    padding: 0 2rem;
    margin: 1rem;
    color: ${props => props.theme.colors.text};
    transition: color .2s;
    width: 100%;
    height: 3rem;
    border-radius: .25rem;
    background-color: ${props => props.theme.colors.primaryBgColor};

    &:hover {
        color: ${props => props.theme.colors.textHover};
    }

    &:focus {
        color: ${props => props.theme.colors.textActive};
    }
`;
