import { FC } from "react";
import { Filter } from "../../types";

import * as Styled from "../AppBrowser.styles";

interface AppBrowserFiltersProps {
	filter: Filter;
	handleFilter: (filter: Filter) => void;
}

export const AppBrowserFilters: FC<AppBrowserFiltersProps> = ({ filter, handleFilter }) => {
	return (
		<Styled.AppListFilters>
			{Object.values(Filter).map(filterName => (
				<Styled.AppListFilterItem
					aria-label={`Filter apps by ${filterName}`}
					key={filterName}
					$isActive={filter === filterName}
					onClick={() => handleFilter(filterName)}
				>
					{filterName}
				</Styled.AppListFilterItem>
			))}
		</Styled.AppListFilters>
	);
};
