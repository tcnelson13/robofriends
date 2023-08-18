import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <>
      <input
        className="pa3 ba b--gren bg-lightest-blue"
        onChange={searchChange}
        placeholder="search robots"
        type="search"
      />
    </>
  );
};

export default SearchBox;
