import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }

    handelKey = (event) => {
        if(event.key === "Enter") {
            this.props.searchMoveis(this.state.search, this.state.type)
        }
    }
    handelFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMoveis(this.state.search, this.state.type)
        })
    }

    render() {
        return <div className="row">
        <div className="col s12">
          <div className="input-field inline width-100">
            <input placeholder="Search" type="search" className="validate"
            value={this.state.search}
            onChange={(event) => this.setState({search: event.target.value})}
            onKeyDown={this.handelKey}
            />
            <button className="btn search-btn" onClick={() => this.props.searchMoveis(this.state.search, this.state.type)}>Search</button>
          </div>
          <div className="radio_btn">
            <label>
                <input className="with-gap" name="type" type="radio" data-type="all" onChange={this.handelFilter}
                checked={this.state.type === "all"} />
                <span>All</span>
            </label>
            <label>
                <input className="with-gap" name="type" type="radio" data-type="movie" onChange={this.handelFilter}
                checked={this.state.type === "movie"} />
                <span>Movies only</span>
            </label>
            <label>
                <input className="with-gap" name="type" type="radio" data-type="series" onChange={this.handelFilter}
                checked={this.state.type === "series"} />
                <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    }
}

export { Search }