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

export const AppListFilters = Styled.div`
    display: flex;
    align-items: center;
    margin: 0 1rem;
    gap: .75rem;
`;

export const AppListFilterItem = Styled.button<{ $isActive: boolean }>`
    cursor: pointer;
    font-size: .75rem;
    text-align: center;
    background-color: transparent;
    border: none;
    border-bottom: .125rem solid transparent;
    outline: none;
    padding: 0 .25rem;

    font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};

    color: ${({ $isActive }) =>
			$isActive ? props => props.theme.colors.textActive : props => props.theme.colors.text};

    &:hover {
        color: ${props => props.theme.colors.textHover};
    }

    &:focus {
        border-bottom: .125rem solid ${props => props.theme.colors.primary};
    }
`;

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
    height:10px;
    width:10px;
    border-radius:50%;
    background-color: ${props =>
			props.$isPinned ? props.theme.colors.primary : props.theme.colors.gray4};
    position:absolute;
    top:-5px;
    right:-5px;
`;

export const AppListPaginationWrapper = Styled.div`
    margin: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .25rem;
`;

export const AppListPaginationButton = Styled.button<{ $isActive: boolean }>`
    width: .625rem;
    height: .625rem;
    border-radius: .125rem;
    border: none;
    cursor: ${({ $isActive }) => ($isActive ? "default" : "pointer")};
    outline: none;
    background-color: ${({ $isActive }) =>
			$isActive
				? props => props.theme.colors.contentButtonActive
				: props => props.theme.colors.contentButton};
`;
