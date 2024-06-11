import { create } from 'zustand'
import axios from 'axios';
import debounce from '../helper/debounce';

const homeStore = create((set) => ({

    searchedCoins: [],
    coins: [],
    trending: [],
    query: '',

    searchCoins: debounce(async ()=>{

        const query = homeStore.getState().query;

        if(query.length >= 3){
            const response = await axios.get('https://api.coingecko.com/api/v3/search?query=' + query)
            const searchCoins = response.data.coins.map( (coin) => {
                return {
                    name: coin.name,
                    image: coin.large,
                    id: coin.id,
                }
            })
            set({searchedCoins: searchCoins});
            console.log(homeStore.getState().searchedCoins)
        }
        else{
            set({searchedCoins: new Array()});
        }
    } , 500),

    setQuery: (e) => {
        set({query: e.target.value});
        homeStore.getState().searchCoins();
    },

    fetchTrendingCoins: async()=>{
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        const coins = response.data.coins.map((coin) => {
            return {
                name: coin.item.name,
                image: coin.item.small,
                id: coin.item.id,
                priceBtc: coin.item.price_btc,
            }
        })

        set({coins, trending: coins});
    }
}))

export default homeStore;