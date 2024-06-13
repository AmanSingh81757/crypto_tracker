import React from 'react'
import homeStore from '../stores/homeStore';
import TrendingCoinCard from './TrendingCoinCard'

function TrendingCoins() {
    const store = homeStore();

    React.useEffect(() => {
        store.fetchTrendingCoins();
     }, [])

    return (
        <div className='bg-slate-100 p-10'>
            <h1 className='font-bold text-3xl mb-5'>Trending Coins</h1>
            <div className='flex gap-5 flex-wrap'>
                {store.coins.map((coin) => {
                    return (
                        <TrendingCoinCard key={coin.id} {...coin} />
                    )
                })}
            </div>
        </div>
    )
}

export default TrendingCoins