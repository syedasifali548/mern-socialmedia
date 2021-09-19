import React from "react";
import { Grid, InputAdornment, TextField, IconButton } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

 const Input =({half,name,handleChange,label,autoFocus,type,handleShowPassword})=>{
    return(
        <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField name={name}
        onChange={handleChange}
        variant="outlined"
        required
        label={label}
        fullWidth
        autoFocus={autoFocus}
        type={type}
        InputProps={name ==='password' ? {
            endAdornment:(
                <InputAdornment position='end'>
                <IconButton>
                {type==='password' ?<Visibility/> : <VisibilityOff/>}
                </IconButton>
                </InputAdornment>
            ),
        }:null
    }
        />
        </Grid>
    );
}
export default Input;