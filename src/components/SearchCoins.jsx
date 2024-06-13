import React from 'react'
import homeStore from '../stores/homeStore'
import SearchCoinCard from './SearchCoinCard';


function SearchCoins() {

    const store = homeStore();

    React.useEffect(() => {
        store.searchCoins();
     }, [])

    return (
        <div>
            <h1 className='font-bold text-3xl mb-5'>Searched Coins</h1>
            <div className='flex gap-5 flex-wrap'>
                {store.searchedCoins.length===0?
                (<h2>Search for a coin first</h2>)
                :
                (store.searchedCoins.map((coin) => {
                    return (
                        <SearchCoinCard key={coin.id} {...coin}>

                        </SearchCoinCard>
                        // <div key = {coin.id} style={{display: 'block'}}>
                        //     <img src = {coin.image} alt = {coin.name} />
                        //     <h2>{coin.name}</h2>
                        // </div>
                    )
                }))}
            </div>
        </div>
    )
}

export default SearchCoins