import Styled from "styled-components";

const borderColor = "#cfcfcf";

export const AppBrowserWrapper = Styled.div`
     padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 640px;
    border: 1px solid ${borderColor};
    border-radius: .5rem;
    backdrop-filter: blur(14px);
    background-color: rgba(200, 200, 200, 0.2);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    overflow: hidden;
    box-sizing: border-box;


    * {
        box-sizing: border-box;
    }
`;

export const SearchWrapper = Styled.div`
    background-color: #fff;
    border-radius: 1.25rem;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    height: 2.5rem;
    margin: 0 2rem;
    position: relative;
    width: calc(100% - 5rem);
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, 
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    border: 1px solid #ddd;

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
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    gap: 1rem;

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
    height: 280px;
    margin: 0 2rem;
    padding: .5rem;
    width: calc(100% - 4rem);
    grid-template-rows: 2rem 1fr 1.5rem;
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
    border-bottom: 2px solid transparent;
    outline: none;
    padding: 0 .25rem;

    font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};

    &:focus {
        border-bottom: 2px solid rgb(0, 0, 0, 0.15);
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
    background-color: rgb(225,225,225,20%);
    border: 1px dashed transparent;
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
        background-color: #fff; 
    },

    &:focus {
        border: 1px dashed rgb(0, 0, 0, 0.15);
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
    margin: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .25rem;
`;

export const AppListPaginationButton = Styled.button<{ $isActive: boolean }>`
width: .625rem;
height: .625rem;
border-radius: 2px;
background-color: ${({ $isActive }) => ($isActive ? "#bbb" : "#bbb")};
border: none;
cursor: pointer;
outline: none;
`;

export const FooterWrapper = Styled.div`
   border-top: 1px solid ${borderColor};
   height:4rem;
   background-color: #ededed;
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
    border: 1px dashed transparent;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.2s;
    padding: .25rem .5rem;
    gap: .5rem;
    font-size: .75rem;
    &:focus {
        border: 1px dashed rgb(0, 0, 0, 0.15);
    }


    &:hover {
        background-color: #e3e3e3;
    }

    > div:nth-of-type(1) {

    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ddd;

    > svg{
        height: 1rem;
        width: 1rem;
    }

    }
`;

export const FooterLogoutButton = Styled.button`
    border: 1px dashed transparent;
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
        background-color: #e3e3e3;
    }

    &:focus {
        border: 1px dashed rgb(0, 0, 0, 0.15);
    }
   
    > svg{
        height: 1rem;
        width: 1rem;
    }

    `;
