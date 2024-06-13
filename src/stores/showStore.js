import { create } from 'zustand'
import axios from 'axios';

const showStore = create((set) => ({

    graphData: [],
    lastDays: 7,
    currency: 'usd',

    changeDays: (days) => {
        set({lastDays: days});
    },

    changeCurrency: (currency) => {
        set({currency: currency});
    },

    fetchData : async (id)=>{
        const lastDays = showStore.getState().lastDays;
        const currency = showStore.getState().currency;
        const reponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${lastDays}&interval=daily`)
        // console.log(reponse.data);
        const graphData = reponse.data.prices.map((price) => {
            const [timeStamp, pri] = price;
            return {
                timeStamp: timeStamp,
                price: pri
            }
        });
        set({graphData});
    }
}))

export default showStore;