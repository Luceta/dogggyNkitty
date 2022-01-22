import React from "react";
import styled from "styled-components";
import SearchUserEntry from "../SearchUserEntry/SearchUserEntry";

const Wrapper = styled.ul`
  width: 100%;
  max-width: 390px;
`;

export default function SearchList({ users, keywords }) {
  return (
    <Wrapper>
      {users.map((user) => {
        return <SearchUserEntry key={user.accountname} user={user} keywords={keywords} />;
      })}
    </Wrapper>
  );
}
