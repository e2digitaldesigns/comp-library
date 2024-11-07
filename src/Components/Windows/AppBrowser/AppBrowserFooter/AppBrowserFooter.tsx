import { FC } from "react";
import { Power, User } from "react-feather";

import * as Styled from "./AppBrowserFooter.styles";

export const AppBrowserFooter: FC = () => {
	return (
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
	);
};
