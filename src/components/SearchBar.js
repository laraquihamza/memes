import React from 'react';

const SearchBar = () => {
    return (
        <div className='searchbar'>
            <input placeholder='Search all MEMEs'/>
            <button>
                <img src={require("../images/search_icon.svg").default}></img>
            </button>
        </div>
    );
};

export default SearchBar;