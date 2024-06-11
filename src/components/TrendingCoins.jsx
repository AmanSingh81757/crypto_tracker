import React from 'react'
import homeStore from '../stores/homeStore';
import TrendingCoinCard from './TrendingCoinCard'

function TrendingCoins() {
    const store = homeStore();

    React.useEffect(() => {
        store.fetchTrendingCoins();
     }, [])

    return (
        <div style={{display: 'block'}}  className=''>
            <h1>Trending Coins</h1>
            {store.coins.map((coin) => {
                return (
                    <TrendingCoinCard key = {coin.id} {...coin} />
                )
            })}
        </div>
    )
}

export default TrendingCoins