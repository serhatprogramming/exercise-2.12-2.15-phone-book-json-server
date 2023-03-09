import React from "react";

const Filter = ({ keyword, setKeyword }) => {
  return (
    <div>
      filter shown with{" "}
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default Filter;
