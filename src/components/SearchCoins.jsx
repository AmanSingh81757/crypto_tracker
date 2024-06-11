import React from 'react'
import homeStore from '../stores/homeStore'


function SearchCoins() {

    const store = homeStore();

    React.useEffect(() => {
        store.searchCoins();
     }, [])

    return (
        <div>
            <h1>Searched Coins</h1>
            {store.searchedCoins.length===0?
            (<h2>Search for a coin first</h2>)
            :
            (store.searchedCoins.map((coin) => {
                return (
                    <div key = {coin.id} style={{display: 'block'}}>
                        <img src = {coin.image} alt = {coin.name} />
                        <h2>{coin.name}</h2>
                    </div>
                )
            }))}
        </div>
    )
}

export default SearchCoins