import React, { Component } from 'react';
import Axios from 'axios';
import FollowerCard from './Components/FollowerCard';
import User from './Components/User';
import Searchbox from'./Components/SearchBox';

import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'cavazosgeorge',
      realName: '',
      avatar: '',
      location: '',
      repos: '',
      followers: '',
      url: '',
      notFound: ''
    }
  }

// API request function

fetchApi(url) {
  
  fetch(url)
    .then((res) => res.json() )
    .then((data) => {
      
      // Update State with API

      this.setState({
        username: data.login,
        realName: data.name,
        avatar: data.avatar_url,
        location: data.location,
        repos: data.public_repos,
        followers: data.followers,
        url: data.message
      })
    })
    .catch((err) => console.log('oh no!'))
}

fetchUser(username) {
  let url = `https://api.github.com/users/${username}`
  this.fetchApi(url)
}

componentDidMount() {
  let url = `https://api.github.com/users/${this.state.username}`
  this.fetchApi(url)
}






  render() {
    return (
      <div>
        <Searchbox 
          fetchUser={this.fetchUser.bind(this)} />
        <FollowerCard data={this.state} />
      </div>
    )
  }
}