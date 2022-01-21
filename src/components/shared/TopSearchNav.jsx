import React from "react";
import HeaderBox from "./HeaderBox";
import SearchInput from "./SearchInput";

function TopSearchNav({ onSearch, keywords, setKeywords }) {
  const handleSearch = () => {
    onSearch(keywords);
  };

  return (
    <HeaderBox>
      <div>
        <img src="/assets/icon/icon-arrow-left.png" alt="back to home icon" />
      </div>

      <SearchInput placeholder="계정 검색" onKeyUp={handleSearch} onChange={setKeywords} />
    </HeaderBox>
  );
}

export default TopSearchNav;
