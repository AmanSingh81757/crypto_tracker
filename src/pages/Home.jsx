import React from 'react'
import TrendingCoins from '../components/TrendingCoins';
import InputField from '../components/InputField';
import SearchCoins from '../components/SearchCoins';

function Home() {
    return (
        <div>
            <TrendingCoins />
            <InputField />
            <SearchCoins />
        </div>
    )
}

export default Home;