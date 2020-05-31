import React from "react";

class SearchBtn extends React.Component {
  render(props) {
    return (
      <div className="margin">
        <button class="ui blue animated button">
          <div class="visible content black">Search</div>
          <div class="hidden content">
            <i aria-hidden="true" class="arrow right icon"></i>
          </div>
        </button>
      </div>
    );
  }
}

export default SearchBtn;
