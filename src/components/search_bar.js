import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="serach-bar">
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }



};


export default SearchBar;


