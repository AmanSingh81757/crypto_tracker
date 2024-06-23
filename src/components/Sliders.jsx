import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Tools from '../pages/Tools';
import toolStore from '../stores/toolStore';

export default function Sliders({min, max, step, defaultValueType, label, onChangeFunction}) {
    const store = toolStore();
    return (
        <Box sx={{ width: 500 }} className = "flex flex-col">
            <div className='flex justify-between items-center'>
                {label}:
                <input type='number' value={store[defaultValueType]} className='border p-1'/>
            </div>
            <Slider
                aria-label={label}
                value={store[defaultValueType]}
                valueLabelDisplay="auto"
                shiftStep={30}
                step={step}
                min={min}
                max={max}
                onChange={
                    onChangeFunction
                }
            />
        </Box>
    );
}
