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
    background-color: ${props => props.theme.colors.dailogBoxBgColor};
    box-shadow: ${props => props.theme.boxShadows.large};
    overflow: hidden;
    box-sizing: border-box;

    * {
        box-sizing: border-box;
        color: ${props => props.theme.colors.text};
    }
`;

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
        padding: .125rem 0 0 3rem;
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
        background-color: #f3f3f3;
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
    grid-template-columns: repeat(6, 1fr);
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
    padding: .5rem; 

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

    >div:last-of-type {
        height: 100%;
        font-size: .675rem;
        text-align: center;
        line-height: .875rem;
    }
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
    background-color: ${props =>
			props.$isActive ? "#bbb" : props.theme.colors.transparentBackground};


`;

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
