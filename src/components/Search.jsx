import React from "react";

export class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            type: 'all'
        }
    }

    handleSearch = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.onSearchChange(this.state)
        }
    }

    onClick = () => {
        this.props.onSearchChange(this.state)
    }

    render() {
        return <div className="row">
            <div className="input-field">
                <input
                        type="search"
                        name="search"
                        placeholder="search"
                        className="validate"
                        value={this.state.search}
                        onChange={this.handleSearch}
                        onKeyDown={this.handleKey}
                />
                <button className="btn search-btn" onClick={() => this.onClick()}>
                    Search
                </button>

                <div className='radio-btn'>
                    <label>
                        <input
                                name="type"
                                type="radio"
                                value='all'
                                checked={this.state.type === 'all'}
                                onChange={this.handleSearch}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                               name="type"
                               type="radio"
                               value='movie'
                               checked={this.state.type === 'movie'}
                               onChange={this.handleSearch}
                        />
                        <span>Movie only</span>
                    </label>
                    <label>
                        <input
                                name="type"
                                type="radio"
                                value='series'
                                checked={this.state.type === 'series'}
                                onChange={this.handleSearch}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        </div>
    }
}