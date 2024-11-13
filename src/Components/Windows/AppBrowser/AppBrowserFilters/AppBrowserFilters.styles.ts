import Styled from "styled-components";

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
    border: .0625rem dashed transparent;
    outline: none;
    padding:  .25rem;

    font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};

    color: ${({ $isActive }) =>
			$isActive ? props => props.theme.colors.textActive : props => props.theme.colors.text};

    &:hover {
        color: ${props => props.theme.colors.textHover};
    }

    &:focus {
        border: .0625rem dashed ${props => props.theme.colors.gray6};
    }
`;
