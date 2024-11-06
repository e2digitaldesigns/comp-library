import { FC, useEffect, useRef, useState } from "react";
import * as Styled from "./AppBrowser.styles";
import { appData } from "./app";
import { Power, Search, User } from "react-feather";
import { useAppFiltering } from "./appFiltering";

enum Filter {
  Pinned = "Pinned",
  Internal = "Internal",
  External = "External",
  All = "All"
}

interface AppBrowserProps {
  allowSearch: boolean;
  typeAheadResults: number;
}

export const AppBrowser: FC<AppBrowserProps> = ({
  allowSearch = true,
  typeAheadResults = 3
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<Filter>(Filter.All);
  const [page, setPage] = useState<number>(1);
  const [searchFocused, setSearchFocused] = useState<boolean>(false);

  const searchFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const isFocused = (e: Event) => {
      e.preventDefault();
      setSearchFocused(true);
    };

    const isBlurred = (e: Event) => {
      e.preventDefault();
      setSearchFocused(false);
    };

    const array: (HTMLInputElement | ChildNode)[] = Array.from(
      searchFieldRef.current?.childNodes || []
    );
    array.push(searchFieldRef.current as HTMLInputElement);

    searchFieldRef.current?.addEventListener("focus", isFocused);
    searchFieldRef.current?.addEventListener("blur", isBlurred);
  }, []);

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
      {allowSearch && (
        <Styled.SearchWrapper>
          <div>
            <Search />
          </div>
          <input
            aria-label="Search for apps"
            type="text"
            placeholder="Search for apps"
            onChange={e => handleSearchTermChange(e.target.value)}
            ref={searchFieldRef}
          />

          <Styled.TypeAheadWrapper>
            {searchFocused &&
              typeAheadData.map(app => (
                <Styled.TypeAheadItem
                  key={app.name}
                  aria-label={`Choose app: ${app.name}`}
                >
                  <div>
                    <img src={app.image} alt={`Choose app: ${app.name}`} />
                  </div>

                  <div>{app.name}</div>
                </Styled.TypeAheadItem>
              ))}
          </Styled.TypeAheadWrapper>
        </Styled.SearchWrapper>
      )}

      <Styled.AppListWrapper>
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

        <Styled.AppList>
          {filteredResults.map((app, i) => (
            <Styled.AppListItem key={i} aria-label={`Choose app: ${app.image}`}>
              <div>
                <img src={app.image} alt={`Choose app: ${app.name}`} />
              </div>

              <div>{app.name}</div>

              <Styled.Bubble $isPinned={app.pinned} />
            </Styled.AppListItem>
          ))}
        </Styled.AppList>

        <Styled.AppListPaginationWrapper>
          {Array.from({ length: totalPages }).map((_, i) => (
            <Styled.AppListPaginationButton
              aria-label={`Go to page ${i + 1}`}
              key={i}
              $isActive={i === page - 1}
              onClick={() => setPage(i + 1)}
              disabled={i === page - 1}
            ></Styled.AppListPaginationButton>
          ))}
        </Styled.AppListPaginationWrapper>
      </Styled.AppListWrapper>

      <Styled.FooterWrapper>
        <Styled.Footer>
          <Styled.FooterButtonWrapper aria-label="Open user profile">
            <div>
              <User />
            </div>
            <div>Casana Bey</div>
          </Styled.FooterButtonWrapper>

          <Styled.FooterLogoutButton aria-label="Logout">
            <Power />
          </Styled.FooterLogoutButton>
        </Styled.Footer>
      </Styled.FooterWrapper>
    </Styled.AppBrowserWrapper>
  );
};
