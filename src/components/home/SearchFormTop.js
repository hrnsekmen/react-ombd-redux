import React, { Component } from "react";
import { connect } from "react-redux";

import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../../actions/searchActions";

export class SearchFormTop extends Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <form
        className="form-inline my-2 my-lg-0"
        id="searchForm"
        onSubmit={this.onSubmit}
      >
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Enter movie name here"
          onChange={this.onChange}
        />
        <button class="mr-5 btn btn-outline-white my-2 my-sm-0" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </form>
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
})(SearchFormTop);
