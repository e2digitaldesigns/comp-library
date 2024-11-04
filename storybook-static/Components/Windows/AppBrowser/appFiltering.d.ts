declare enum Filter {
    Pinned = "Pinned",
    Internal = "Internal",
    External = "External",
    All = "All"
}
type AppData = {
    name: string;
    image: string;
    pinned: boolean;
    internal: boolean;
};
type FilteredResults = {
    filteredResults: AppData[];
    totalPages: number;
    typeAheadData: AppData[];
};
export declare const useAppFiltering: (appData: AppData[], filter: Filter, searchTerm: string, currentPage: number, typeAheadMaxResults: number) => FilteredResults;
export {};
