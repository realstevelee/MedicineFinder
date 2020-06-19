import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='tc'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search' placeholder='Search medicine'
                onChange={searchChange} />
        </div>
    )
}


export default SearchBox;