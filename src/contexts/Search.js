import React, { createContext, useState } from "react";

export const SearchContext = createContext({});

export const SearchContextProvider = function (props) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {props.children}
    </SearchContext.Provider>
  );
};
