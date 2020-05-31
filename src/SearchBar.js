import React from "react";

class SearchBar extends React.Component {
  render(props) {
    return (
      <div class="ui icon input margin search-bar">
        <input type="text" placeholder="Search..." />
        <i aria-hidden="true" class="search icon"></i>
      </div>
    );
  }
}

export default SearchBar;
