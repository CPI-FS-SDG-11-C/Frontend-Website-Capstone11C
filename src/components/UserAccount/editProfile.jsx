import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Padding } from '@mui/icons-material';

function editProfile() {
  return (
    <>
      <div className='main'>
        <div className='box'>
          <h3>Edit Profile</h3>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 2, width: '80ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div className='inputedit'>
              <TextField
                required
                id="outlined-required"
                label="Username"
                defaultValue="Username"
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue="Hello World"
              />
              <TextField
                id="outlined-number"
                label="Phone Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue="1235"
              />
            </div>
            <div className='buttonedit'>
                <Link to="/profile  " className="buttonedit">
                    <Button variant="contained">Back</Button>
                </Link>
                <Link to="/login" className="buttonedit">
                    <Button variant="contained">Save Change</Button>
                </Link>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}

export default editProfile;
