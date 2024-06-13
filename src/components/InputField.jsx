import React from 'react'
import homeStore from '../stores/homeStore'


function InputField() {
    const store = homeStore();
    return (
        <div className='p-10 bg-blue-300 min-h-72 items-center flex justify-center' id='search'>
            <input
            type = "text"
            placeholder = "Search coin by name"
            value={store.query}
            onChange={store.setQuery}
            className='p-2 w-1/2 rounded-lg border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
            />
        </div>
    )
}

export default InputField