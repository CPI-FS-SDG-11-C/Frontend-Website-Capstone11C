import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const [type,setType] = useState('districts');
    const [rating,setRating] = useState('districts');

    const places = [
        { name: 'Pakal'},
        { name: 'Kecamatan B'},
        { name: 'Kecamatan C'},
        { name: 'Kecamatan D'},
        { name: 'Kecamatan E'},
        { name: 'Kecamatan F'},
        { name: 'Kecamatan G'},
    ];

    return(
        <div className={classes.container}>
            <Typography variant="h4">Ruang Terbuka Hijau</Typography>
            
            {/*form for sorting*/}
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="districts">District</MenuItem>
                    <MenuItem value="rths">RTH</MenuItem>

                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value="{0}">All</MenuItem>
                    <MenuItem value="{3}">Above 3.0</MenuItem>
                    <MenuItem value="{4}">Above 4.0</MenuItem>
                    <MenuItem value="{4.5}">Above 4/5</MenuItem>
                </Select>
            </FormControl>

            <Grid container spacing={3} className={classes.list}>
                {places ?.map((place, i) => (
                    <Grid item key={i} xs={12} >
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;