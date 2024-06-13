import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

function AreaChartComponent({data}) {

    console.log(data);

    return (
      <LineChart
        dataset={data}
        xAxis={[{ dataKey: 'timeStamp' }]}
        series={[
          {
            dataKey: 'price',
            area: 'true'
          },
        ]}
        width={1500}
        height={500}
      />
    )

}

export default AreaChartComponent