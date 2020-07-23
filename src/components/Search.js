import React, { useContext } from "react";
import { Input } from "antd";
import { SearchContext } from "../contexts/Search";

export default function Search() {
  const { setSearchInput } = useContext(SearchContext);

  return (
    <>
      <Input
        className="search"
        // Input originally would search on every keypress, but due to the api's 20 calls per minute limit this lead to many 403s
        // value={searchInput}
        // onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) setSearchInput(e.target.value);
        }}
        placeholder="Enter your favorite artist and press Enter"
      />
    </>
  );
}
