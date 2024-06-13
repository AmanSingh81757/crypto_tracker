import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Label } from 'recharts';
import showStore from '../stores/showStore';

function valuetext(value) {
  return `${value} Days`;
}

export default function DaysSlider() {
    const store = showStore();
  return (
    <Box sx={{ width: 300 }}>
        Last Days:
      <Slider
        aria-label="Days"
        defaultValue={7}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={1}
        min={1}
        max={31}
        onChange={(e, value) =>
            store.changeDays(value)
        }
      />
    </Box>
  );
}
