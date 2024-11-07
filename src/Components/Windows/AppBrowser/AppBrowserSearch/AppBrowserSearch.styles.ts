import Styled from "styled-components";

export const SearchWrapper = Styled.div`
    background-color: ${props => props.theme.colors.inputBackgroundColor};
    border-radius: 1.25rem;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    height: 2.5rem;
    margin: 0 2rem;
    position: relative;
    width: calc(100% - 5rem);
    box-shadow: ${props => props.theme.boxShadows.inset};
    border: .0625rem solid ${props => props.theme.colors.borderColor};

    >div:first-of-type {
        align-items: center;
        display: flex;
        font-size: 1.25rem;
        height: 2.5rem;
        justify-content: center;
        position: absolute;
        width: 2.5rem;
        margin-left: 0.5rem;

        > svg{
        height: 1rem;
        width: 1rem;
       }
    }

    >input{
        border: none;
        outline: none;
        background-color: transparent;
        height: 100%;
        padding: .25rem 0 0 3rem;
        width: calc(100% - 2.5rem);
        color: ${props => props.theme.colors.text};
        
    }
`;

export const TypeAheadWrapper = Styled.div`
    width:calc(100% - 4rem);
    position: absolute;
    top: 2.5rem;
    left: 2rem;
    z-index: 10;
`;

export const TypeAheadItem = Styled.div`
    display: flex;
    gap: .25rem;
    padding: .5rem;
    background-color: ${props => props.theme.colors.inputBackgroundColor};
    border-bottom: .0625rem solid ${props => props.theme.colors.borderColor};
    cursor: pointer;
    gap: 1rem;
    transition: background-color 0.2s;

    &:hover {
        filter: brightness(1.2);
    }

    >div:first-of-type {
        height: 1.25rem;
        width: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 100%;
            width: 100%;
        }
    },

    >div:last-of-type {
        font-size: .75rem;
        display: flex;
        align-items: center;
    }
`;
