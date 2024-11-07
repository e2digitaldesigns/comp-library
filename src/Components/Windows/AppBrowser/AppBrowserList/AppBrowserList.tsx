import React, { FC } from "react";
import * as Styled from "../AppBrowser.styles";
import { AppData } from "../../types";

interface AppBrowserListProps {
	filteredResults: AppData[];
}

export const AppBrowserList: FC<AppBrowserListProps> = ({ filteredResults }) => {
	return (
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
	);
};
