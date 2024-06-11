import React from 'react'
import homeStore from '../stores/homeStore'


function InputField() {
    const store = homeStore();
    return (
        <div>
            <input type = "text" placeholder = "Search coin by name" value={store.query} onChange={store.setQuery}/>
        </div>
    )
}

export default InputField