import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value} users`;
}

export default function PricingSliderSection() {
  return (
    <Box className="pricing_slider_div" sx={{ width: '83%', height: '50px', margin: '40px 90px 40px 120px' }}>
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
            sx={{ color: '#5832DA'}}
        />
        </Box>
    </Box>
  );
}