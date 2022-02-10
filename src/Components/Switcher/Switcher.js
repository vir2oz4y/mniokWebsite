import React from 'react';
import {Switch} from "@mui/material";

const Switcher = ({leftText, rightText, onChange, value}) => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const handleChange = (e)=>{
        onChange?.(e.target.checked)
    }

    return (
        <div style={{display:"flex", alignItems:"center"}}>
            <div>
                {leftText}
            </div>
            <Switch {...label} value={value} defaultChecked onChange={handleChange} />
            <div>
                {rightText}
            </div>
        </div>
    );
};

export default Switcher;