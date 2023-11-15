import * as React from "react";
import { Container, Grid, Card, CardContent, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

function Profile() {
  const [value, setValue] = React.useState(2);
  return (
    <Container>
      <div className="py-8 text-center xl:text-justify">
        <h2>Profile</h2>
      </div>
      <Grid container>
        <Grid container className="flex">
          <div className="mx-auto lg:mx-10">
            <Avatar
              alt="Remy Sharp"
              src="https://img.freepik.com/premium-vector/gray-avatar-icon-vector-illustration_276184-163.jpg"
              sx={{ width: 156, height: 156 }}
            />
            {/* <img src="https://img.freepik.com/premium-vector/gray-avatar-icon-vector-illustration_276184-163.jpg" alt="Profile Picture" width="156" height="156" viewBox="0 0 156 156" />         */}
          </div>
          <div className="flex mx-auto md:mx-0">
            <div className="my-auto mx-2 md:mx-5">
              <h2>username</h2>
              <h3>user@email.com</h3>
            </div>
            <div className="my-auto mx-2 md:mx-5">
              <h2>500k</h2>
              <h3>Ratings</h3>
            </div>
            <div className="my-auto mx-2 md:mx-5">
              <h2>200k</h2>
              <h3>Comments</h3>
            </div>
          </div>
        </Grid>
        <Grid container className="flex flex-col md:flex-row">
          <Link to="/edit" className="buttonsec my-3 mx-auto lg:ml-0">
            <Button variant="contained">Edit Profile</Button>
          </Link>
          <Link to="/changepassword" className="buttonsec my-3 mx-auto">
            <Button variant="contained" className="mx-auto">
              Change Password
            </Button>
          </Link>
          <Link to="/login" className="buttonsec my-3 mx-auto">
            <Button variant="contained" className="mx-auto">
              Log Out
            </Button>
          </Link>
        </Grid>
        <Grid container className="border-rating flex" xs={12} sm={12} md={12}>
          <h3>Rating & Comment History</h3>
          <ul>
            <li>
              <div className="comment">
                <h3>Nama RTH</h3>
                <h4>timestamp nya</h4>
                <Rating name="read-only" value={value} readOnly />
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </h5>
              </div>
            </li>
            <li>
              <div className="comment">
                <h3>Nama RTH</h3>
                <h4>timestamp nya</h4>
                <Rating name="read-only" value={value} readOnly />
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </h5>
              </div>
            </li>
            <li>
              <div className="comment">
                <h3>Nama RTH</h3>
                <h4>timestamp nya</h4>
                <Rating name="read-only" value={value} readOnly />
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </h5>
              </div>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
