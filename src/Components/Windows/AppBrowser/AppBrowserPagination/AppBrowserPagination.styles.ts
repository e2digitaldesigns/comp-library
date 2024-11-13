import Styled from "styled-components";

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
