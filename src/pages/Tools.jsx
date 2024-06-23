import React from 'react'
import Sliders from '../components/Sliders'
import BasicPie from '../components/PieChartComponent'
import toolStore from '../stores/toolStore'

export default function Tools() {
    const store = toolStore();
    const data1 = [
        { id: 0, value: Number(store.loanAmount), label: 'Principal Amount' },
        { id: 1, value: Number(store.emi) * Number(store.loanTenure) / 12, label: 'Interest Amount' },
    ]
    return (
        <div className='p-10'>
            <div className='border p-2'>
                <h1 className='text-3xl'>Home Loan EMI Calculator
                    {data1.map((item) => {
                        return (
                            <div key={item.id}>
                                {item.label}: {item.value}
                            </div>
                        )
                    })}
                </h1>
                <div className='flex flex-row justify-around gap-40'>
                    <div className='flex flex-col gap-20 p-10'>
                        <div>
                            <Sliders
                                min={100000}
                                max={100000000}
                                step={10000}
                                defaultValueType={'loanAmount'}
                                label='Loan Amount'
                                onChangeFunction={(e, value) => store.changeLoanAmount(value)}
                            />
                        </div>
                        <div>
                            <Sliders
                                min={1}
                                max={100}
                                step={0.5}
                                defaultValueType={'rateOfInterest'}
                                label='Rate of interest (p.a)'
                                onChangeFunction={(e, value) => {store.changeRateOfInterest(value); console.log(typeof value)}}
                            />
                        </div>
                        <div>
                            <Sliders
                                min={1}
                                max={30}
                                step={1}
                                defaultValueType={'loanTenure'}
                                label='Loan Tenure'
                                onChangeFunction={(e, value) => store.changeLoanTenure(value)}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <BasicPie data = {data1}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
