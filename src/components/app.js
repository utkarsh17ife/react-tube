import React, { Component } from 'react';
import _ from 'lodash';

import YTSearch from 'youtube-api-search';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_details';

const API_KEY = 'AIzaSyDLJ5g8779ED38FyAyRkmrkkpYcu-54ac0';
//const API_KEY = 'AIzaSyD-a9IF8KKYgoC3cpgS-Al7hLQDbugrDcw';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Pink Flyod');
  }

  videoSearch(term) {

    YTSearch({ key: API_KEY, term: term, part: 'snippet' }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })

  }


  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);


    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
      </div>
    )
  }
}

export default App;