// /* eslint-disable no-unused-vars */
// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import { Paper, Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab';

// import useStyles from './styles';

// const Map = () => {
//     const classes = useStyles();
//     const isMobile = useMediaQuery('(min-width:600px)');
    
//     const coordinates = { lat: 0, lng: 0};
    
//     return(
//         <div className={classes.mapContainer}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyBFunsUmQ7N12nT29zMLRFg_srdOdtHSUo'}}
//                 defaultCenter={coordinates}
//                 center={coordinates}
//                 defaultZoom={14}
//                 margin={[50, 50, 50, 50]}
//                 options={''}
//                 onChange={''}
//                 onChildClick={''}
//             >
//             </GoogleMapReact>
//         </div>
//     );
// }

// export default Map;

import React from 'react';

const Map = () => {
    return(
        <h1>Map</h1>
    );
}

export default Map;