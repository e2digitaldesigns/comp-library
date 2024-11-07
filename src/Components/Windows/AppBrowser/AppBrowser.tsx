import { FC, useRef, useState } from "react";
import * as Styled from "./AppBrowser.styles";
import { appData } from "./__mock_data__/app";
import { useAppFiltering } from "./appFiltering";
import { Filter } from "../types";
import * as AppBrowsing from "./";

interface AppBrowserProps {
	showSearch: boolean;
	typeAheadResults: number;
	showFooter: boolean;
}

export const AppBrowser: FC<AppBrowserProps> = ({
	showFooter = true,
	showSearch = true,
	typeAheadResults = 3
}) => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [filter, setFilter] = useState<Filter>(Filter.All);
	const [page, setPage] = useState<number>(1);

	const searchFieldRef = useRef<HTMLInputElement>(null);

	const { filteredResults, typeAheadData, totalPages } = useAppFiltering(
		appData,
		filter,
		searchTerm,
		page,
		typeAheadResults
	);

	const handleSearchTermChange = (searchTerm: string) => {
		setPage(1);
		setSearchTerm(searchTerm);
	};

	const handleFilter = (filter: Filter) => {
		setPage(1);
		setFilter(filter);
	};

	return (
		<Styled.AppBrowserWrapper>
			{showSearch && (
				<AppBrowsing.AppBrowserSearch
					{...{ handleSearchTermChange, searchFieldRef, typeAheadData }}
				/>
			)}

			<Styled.AppListWrapper>
				<AppBrowsing.AppBrowserFilters filter={filter} handleFilter={handleFilter} />

				<AppBrowsing.AppBrowserList filteredResults={filteredResults} />

				<AppBrowsing.AppBrowserPagination {...{ page, setPage, totalPages }} />
			</Styled.AppListWrapper>

			{showFooter && <AppBrowsing.AppBrowserFooter />}
		</Styled.AppBrowserWrapper>
	);
};
