import React from 'react'
import showStore from '../stores/showStore'
import { useParams } from 'react-router-dom';
import AreaChartComponent from '../components/AreaChartComponent';
import DaysSlider from '../components/DaysSlider';
import CurrencySelector from '../components/CurrencySelector';
import Button from '@mui/material/Button';


function Show() {
  const store = showStore();
  const params = useParams();

  React.useEffect(() => {
    console.log(params);
    store.fetchData(params.id);
  }, [])

  return (
    <div className='flex p-10 flex-col items-center justify-around gap-10'>
      <div>
        <h1 className='text-3xl font-bold'>Showing results for: {params.id}</h1>
      </div>
      <div className="border border-slate-600 p-5 mt-5" >
        <AreaChartComponent data={store.graphData}/>
      </div>
      <div className='flex flex-col items-center border border-slate-300 p-10 w-2/5 gap-10'>
        <div className='flex flex-row gap-10'>
          <DaysSlider />
          <CurrencySelector />
        </div>
        <Button variant="contained" onClick={() => store.fetchData(params.id)} className='w-32 flex'>Fetch Data</Button>
      </div>
    </div>
  )
}

export default Show