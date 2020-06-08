import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      locationtype: [
        {
          name: ["One BHK", "Two BHK"],
        },
      ],
      selectedLocation: "Flat",
    };
    this.changeLocation = this.changeLocation.bind(this);
  }

  componentDidMount() {
    this.setState({
      location: [
        {
          name: "Flat",
          locationtype: [
            {
              name: ["One BHK", "Two BHK"],
            },
          ],
        },
        {
          name: "PG",
          locationtype: [
            {
              name: ["For ladies", "For gents"],
            },
          ],
        },
        {
          name: "Hostel",
          locationtype: [
            {
              name: ["For ladies", "For gents"],
            },
          ],
        },
      ],
    });
    this.setState({ selectedLocation: this.state.location.name });
  }

  changeLocation(event) {
    this.setState({ selectedLocation: event.target.value });
    this.setState({
      locationtype: this.state.location.find(
        (lcn) => lcn.name === event.target.value
      ).locationtype,
    });
  }

  render() {
    return (
      <div className="dropdown-container">
        <div className="dropdown margin">
          <select
            value={this.state.selectedLocation}
            onChange={this.changeLocation}
          >
            {this.state.location.map((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>

        <div className="dropdown margin">
          <select value={this.state.selectedLocationType}>
            {this.state.locationtype.map((e, key) => {
              return <option key={key}>{e.name[0]}</option>;
            })}
            {this.state.locationtype.map((e, key) => {
              return <option key={key}>{e.name[1]}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default Dropdown;
