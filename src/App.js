import React from "react";
import Dropdown from "./Dropdown";
import SearchBtn from "./SearchBtn";
import SearchBar from "./SearchBar";
import Style from "./assets/style.css";

class App extends React.Component {
  render(props) {
    return (
      <div style={{ Style }} className="main">
        <SearchBar />
        <Dropdown />
        <SearchBtn />
      </div>
    );
  }
}

export default App;
