import React, { useState, useEffect } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import district from '../../assets/RTH-percentage.json'; //comment kalau pake API
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles';
import Axios  from 'axios';


const List = () => {
    const classes = useStyles();
    const [type,setType] = useState('districts');
    const [rating,setRating] = useState('districts');


    
    // Usestate & useEffect kalau nanti pake API :)
    
    // const [district,setDistrict] = useState([]);
    // const apiUrl = import.meta.env.VITE_API_URL
    // async function fetchData() {
    //     try {
    //       const response = await Axios.get(apiUrl+'/api/subdistricts');      
          
    //       return response;
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    //   useEffect(() => {
    //     fetchData().then((data) => setDistrict(data.data));
    //   }, []);
    
    const arrayData= district.data


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
                {
                    arrayData.map((data) => (
                    <Grid item key={data.kec_id} xs={12}>
                        <PlaceDetails data={data} />
                    </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}

export default List;