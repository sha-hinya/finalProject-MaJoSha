import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchText: "",
    calenders: this.props
  };

  changeText = event => {
    console.log("Searchbar EVENT >>> ", event.target.value);
    console.log("props DATA >>> ", this.props);

    this.setState({
      searchText: event.target.value,
      calenders: this.props.filter(result => {
        //console.log(result.name.includes(event.target.value));
        return result.title.includes(event.target.value);
      })
    });
  };

  render() {
    return (
      <div>
        <input value={this.state.searchText} onChange={this.changeText} />
      </div>
    );
  }
}

export default SearchBar;
