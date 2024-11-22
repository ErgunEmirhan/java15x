import React, { useState } from 'react'
import './SearchInput.css'
function SearchInput() {
    const [focus, setFocus] = useState()
  return (
    <div className="col">
        <div className="row x-search-input align-items-center">
            <div className="col-1">
            <i className='fa-solid fa-magnifying-glass' style={{color:'rgb(113, 113, 113)'}} />
            </div>
            <div className="col-11">
                <input type="text" placeholder='Ara' className='x-search-text'/>
            </div>
        </div>
    </div>
  )
}

export default SearchInput