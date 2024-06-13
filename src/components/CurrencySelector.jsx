import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import showStore from '../stores/showStore';

export default function RadioButtonsGroup() {
    const store = showStore();
    let curr = showStore.getState().currency;
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Currency</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={curr}
        onChange={(e, value) => store.changeCurrency(value)}
      >
        <FormControlLabel value="usd" control={<Radio />} label="usd" />
        <FormControlLabel value="inr" control={<Radio />} label="inr" />
      </RadioGroup>
    </FormControl>
  );
}
