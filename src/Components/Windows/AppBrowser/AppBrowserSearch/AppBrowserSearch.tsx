import React, { FC, useState, useEffect } from "react";
import { Search } from "react-feather";
import * as Styled from "./AppBrowserSearch.styles";

interface AppBrowserSearchProps {
	handleSearchTermChange: (searchTerm: string) => void;
	searchFieldRef: React.RefObject<HTMLInputElement>;
	typeAheadData: { name: string; image: string }[];
}

export const AppBrowserSearch: FC<AppBrowserSearchProps> = ({
	handleSearchTermChange,
	searchFieldRef,
	typeAheadData
}) => {
	const [searchFocused, setSearchFocused] = useState<boolean>(false);

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

	return (
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
						<Styled.TypeAheadItem key={app.name} aria-label={`Choose app: ${app.name}`}>
							<div>
								<img src={app.image} alt={`Choose app: ${app.name}`} />
							</div>

							<div>{app.name}</div>
						</Styled.TypeAheadItem>
					))}
			</Styled.TypeAheadWrapper>
		</Styled.SearchWrapper>
	);
};
