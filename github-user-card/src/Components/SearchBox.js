import React, { Component } from "react"


export default class SearchBox extends Component {
  state = {
    username: '',
  };

  render() {
    const { username } = this.state;
      return (
        <form
          className="searchbox"
          onSubmit={this.handleClick.bind(this)}>
            <input
            value={username}
            className="searchbox__input"
            type="text"
            onChange={this.setUsername}
            placeholder="type username..." />

            <input
                type="submit"
                className="searchbox__button"
                value="Search Github User" />
        </form>
    );
  }

  setUsername = (event) => this.setState({ username: event.target.value });

  handleClick(e) {
    e.preventDefault();
    this.props.fetchUser(this.state.username);
    this.setState({ username: '' });
  }
};