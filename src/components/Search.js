import React, { useContext } from "react";
import { Input } from "antd";
import { SearchContext } from "../contexts/Search";

export default function Search() {
  const { searchInput, setSearchInput } = useContext(SearchContext);

  return (
    <Input
      className="search"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      placeholder="Enter your favorite Rascal Flatts album"
    />
  );
}
