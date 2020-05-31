import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      locationtype: [],
      selectedLocation: "Location",
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
            placeholder="Location"
            value={this.state.selectedLocation}
            onChange={this.changeLocation}
          >
            <option>Location</option>
            {this.state.location.map((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>

        <div className="dropdown margin">
          <select
            placeholder="LocationType"
            value={this.state.selectedState}
            onChange={this.changeState}
          >
            <option>{this.state.selectedLocation} type</option>
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
