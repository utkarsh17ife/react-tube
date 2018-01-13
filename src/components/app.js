import React, { Component } from 'react';

import YTSearch from 'youtube-api-search';

import SearchBar from './search_bar';
import VideoList from './video_list';

const API_KEY = 'AIzaSyDLJ5g8779ED38FyAyRkmrkkpYcu-54ac0';
//const API_KEY = 'AIzaSyD-a9IF8KKYgoC3cpgS-Al7hLQDbugrDcw';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'Pink Flyod', part: 'snippet' }, (videos) => {

      this.setState({ videos });
    })

  }

  render() {
    return (
      <div>
        <h1>Hi this is react-Tube</h1>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App;