import React from 'react'
import TrendingCoins from '../components/TrendingCoins';
import InputField from '../components/InputField';
import SearchCoins from '../components/SearchCoins';

function Home() {
    return (
        <div>
            <InputField />
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <TrendingCoins />
                <SearchCoins />
            </div>
        </div>
    )
}

export default Home;