import React, { Component } from "react";
import { connect } from "react-redux";

import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../../actions/searchActions";

export class SearchForm extends Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
    console.log("as");
  };

  render() {
    return (
      <div className="shadow p-3 mb-5 bg-white rounded mt-5 text-center">
        <div className="container">
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Enter movie name here"
              onChange={this.onChange}
            />
            <button
              type="submit"
              className="btn  btn-lg mt-3"
              style={{ background: "#DEB51C" }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading,
})(SearchForm);
