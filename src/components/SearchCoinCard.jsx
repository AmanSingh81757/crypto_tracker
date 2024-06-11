import React from 'react'
import { Link } from 'react-router-dom'

function SearchCoinCard(coin) {
  return (
    <div key = {coin.id} style={{display: 'block'}}>
        <Link to = {`/${coin.id}`}>
            <img src = {coin.image} alt = {coin.name} />
            <h2>{coin.name}</h2>
        </Link>
    </div>
  )
}

export default SearchCoinCard