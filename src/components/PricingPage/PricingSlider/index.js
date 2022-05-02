import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value} users`;
}

export default function SliderSection({variant, width, height, margin}) {
  return (
    <Box className="pricing_slider_div" sx={{ width: `${width}`, height: '50px', margin:`${margin}` }}>
    {/* ACTUAL SLIDER */}
        <Box sx={{ width: '100%', mr: 2, height: 8  }}>
        <Slider
            aria-label="Always visible"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="on"
            step={10}
            marks
            min={10}
            max={100}
            sx={{ color: `${variant}`}}
        />
        </Box>
    </Box>
  );
}