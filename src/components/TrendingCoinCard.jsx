import React from 'react'
import { Link } from 'react-router-dom'

function TrendingCoin(coin) {
  return (
    <div key = {coin.id}>
        <Link to = {`/${coin.id}`}>
            <img src = {coin.image} alt = {coin.name} />
            <h2>{coin.name}</h2>
            <p>{coin.priceBtc}</p>
        </Link>
    </div>
  )
}

export default TrendingCoin