import { create } from 'zustand'
import axios from 'axios';

const toolStore = create((set) => ({

    loanAmount: 1000,
    rateOfInterest: 1,
    loanTenure: 1,
    emi: 0,

    getEmi: () => {
        const P = toolStore.getState().loanAmount;
        const R = toolStore.getState().rateOfInterest;
        const N = toolStore.getState().loanTenure;
        const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N-1));
        // const emi = P + R+ N;
        set({emi});
    },

    changeLoanAmount: (amount) => {
        amount = Number(amount)
        set({loanAmount: amount});
        const P = toolStore.getState().loanAmount;
        const R = toolStore.getState().rateOfInterest;
        const N = toolStore.getState().loanTenure;
        const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N-1));
        // const emi = P + R+ N;
        set({emi});
    },
    changeRateOfInterest: (rate) => {
        rate = Number(rate)
        set({rateOfInterest: rate});
        const P = toolStore.getState().loanAmount;
        const R = toolStore.getState().rateOfInterest;
        const N = toolStore.getState().loanTenure;
        const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N-1));
        // const emi = P + R+ N;
        set({emi});
    },
    changeLoanTenure: (tenure) => {
        tenure = Number(tenure)
        set({loanTenure: tenure});
        const P = toolStore.getState().loanAmount;
        const R = toolStore.getState().rateOfInterest;
        const N = toolStore.getState().loanTenure;
        const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N-1));
        // const emi = P + R+ N;
        set({emi});
    },

}))

export default toolStore;