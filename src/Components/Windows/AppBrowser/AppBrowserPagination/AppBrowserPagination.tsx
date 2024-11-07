import { FC } from "react";
import * as Styled from "../AppBrowser.styles";

interface AppBrowserPaginationProps {
	totalPages: number;
	page: number;
	setPage: (page: number) => void;
}

export const AppBrowserPagination: FC<AppBrowserPaginationProps> = ({
	page,
	setPage,
	totalPages
}) => {
	return (
		<Styled.AppListPaginationWrapper>
			{Array.from({ length: totalPages }).map((_, i) => (
				<Styled.AppListPaginationButton
					aria-label={`Go to page ${i + 1}`}
					key={i}
					$isActive={i === page - 1}
					onClick={() => setPage(i + 1)}
					disabled={i === page - 1}
				/>
			))}
		</Styled.AppListPaginationWrapper>
	);
};
