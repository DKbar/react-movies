import React from "react";

export const Search = (props) => {
    const [search, setSearch] = React.useState('')
    const [type, setType] = React.useState('all')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleType = (e) => {
        setType(e.target.value)
        props.onSearchChange({search, type: e.target.value})
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            props.onSearchChange({search, type})
        }
    }

    const onClick = () => {
        props.onSearchChange({search, type})
    }

    return <div className="row">
        <div className="input-field">
            <input
                    type="search"
                    name="search"
                    placeholder="search"
                    className="validate"
                    value={search}
                    onChange={handleSearch}
                    onKeyDown={handleKey}
            />
            <button className="btn search-btn" onClick={() => onClick()}>
                Search
            </button>

            <div className='radio-btn'>
                <label>
                    <input
                            name="type"
                            type="radio"
                            value='all'
                            checked={type === 'all'}
                            onChange={handleType}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                            name="type"
                            type="radio"
                            value='movie'
                            checked={type === 'movie'}
                            onChange={handleType}
                    />
                    <span>Movie only</span>
                </label>
                <label>
                    <input
                            name="type"
                            type="radio"
                            value='series'
                            checked={type === 'series'}
                            onChange={handleType}
                    />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    </div>
}