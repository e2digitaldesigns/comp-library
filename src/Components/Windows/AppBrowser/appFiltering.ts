import { useMemo } from "react";
import { AppData, Filter } from "../types";

type FilteredResults = {
	filteredResults: AppData[];
	totalPages: number;
	typeAheadData: AppData[];
};

const MAX_RESULTS = 10;
const MAX_TYPE_AHEAD_RESULTS = 5;

export const useAppFiltering = (
	appData: AppData[],
	filter: Filter,
	searchTerm: string,
	currentPage: number,
	typeAheadMaxResults: number
): FilteredResults => {
	return useMemo(() => {
		const normalizedSearchTerm = searchTerm.toLowerCase();

		// Sort the data alphabetically
		const sortedData = [...appData].sort((a, b) => a.name.localeCompare(b.name));

		// Apply the filter to get the initial filtered data
		const filteredData =
			filter === Filter.Pinned
				? sortedData.filter(app => app.pinned)
				: filter === Filter.All
				? sortedData
				: sortedData.filter(app => app.internal === (filter === Filter.Internal));

		// Filter based on search term
		const searchFilteredData = filteredData.filter(app =>
			app.name.toLowerCase().includes(normalizedSearchTerm)
		);

		// Calculate pagination details
		const totalPages = Math.ceil(searchFilteredData.length / MAX_RESULTS);
		const paginatedData = searchFilteredData.slice(
			(currentPage - 1) * MAX_RESULTS,
			currentPage * MAX_RESULTS
		);

		// Parse the type-ahead data
		const resultCount =
			typeAheadMaxResults > MAX_TYPE_AHEAD_RESULTS ? MAX_TYPE_AHEAD_RESULTS : typeAheadMaxResults;
		const typeAheadData = searchTerm ? searchFilteredData.slice(0, resultCount) : [];

		return {
			filteredResults: paginatedData,
			totalPages,
			typeAheadData
		};
	}, [appData, filter, searchTerm, currentPage, typeAheadMaxResults]);
};
