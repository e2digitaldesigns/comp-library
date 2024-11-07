import React, { FC } from "react";
import * as Styled from "./Header.styles";

import { ChevronDown } from "react-feather";

export const Header: FC = () => {
  return (
    <Styled.HeaderWrapper>
      <Styled.LogoWrapper>MM</Styled.LogoWrapper>
      <Styled.ButtonWrapper>
        <Styled.HeaderButton aria-label="show app browser">
          <ChevronDown />
        </Styled.HeaderButton>
      </Styled.ButtonWrapper>

      <Styled.UserWrapper>
        <Styled.UserAvatar>CB</Styled.UserAvatar>
        <Styled.UserInfo>
          Casana Bey
          <br />
          Casana.Bey@email.com
        </Styled.UserInfo>
      </Styled.UserWrapper>
    </Styled.HeaderWrapper>
  );
};
