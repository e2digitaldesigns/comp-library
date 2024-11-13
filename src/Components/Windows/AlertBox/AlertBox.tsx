import React from "react";

import * as Styled from "./AlertBox.styles";

interface AlertBoxProps {
	message: string;
	title: string;
	onClose: () => void;
}

export const AlertBox: React.FC<AlertBoxProps> = ({ message, title, onClose }) => {
	return (
		<Styled.AlertBoxWrapper>
			<Styled.Header>{title}</Styled.Header>
			<Styled.Content>{message}</Styled.Content>
			<Styled.Footer>
				<Styled.Button onClick={onClose}>Close</Styled.Button>
			</Styled.Footer>
		</Styled.AlertBoxWrapper>
	);
};
