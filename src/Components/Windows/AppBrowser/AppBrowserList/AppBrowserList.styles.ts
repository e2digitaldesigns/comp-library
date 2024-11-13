import Styled from "styled-components";

export const AppList = Styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 100px;
    grid-gap: .5rem;
    height: 100%;
    overflow: hidden;
    padding: 1rem;
`;

export const AppListItem = Styled.button`
    background-color: ${props => props.theme.colors.transparentBackground};
    border: .0625rem dashed transparent;
    outline: none;
    border-radius: 0.25rem;
    display: grid;
    gap: .25rem;
    grid-template-rows: 2.5rem 1fr;
    justify-content: center;
    align-items: center;
    height: 85px;
    width: 100%;
    cursor: pointer;    
    padding: .375rem; 
    position: relative;

    &:hover {
        background-color: ${props => props.theme.colors.inputBackgroundColor};
        >div:last-of-type {
        color: ${props => props.theme.colors.textHover};
    }
    },

    &:focus {
        border: .0625rem dashed ${props => props.theme.colors.gray6};
    }

    >div:first-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;

        img {
            height: 2.5rem;
            width: 2.5rem;
        }
    }

    >div:nth-of-type(2) {
        height: 100%;
        font-size: .675rem;
        text-align: center;
        line-height: .875rem;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const Bubble = Styled.div<{ $isPinned: boolean }>`
    height: .625rem;
    width: .625rem;
    border-radius: 50%;
    background-color: ${props =>
			props.$isPinned ? props.theme.colors.primary : props.theme.colors.gray4};
    position:absolute;
    top: -.3125rem;
    right: -.3125rem;
`;
