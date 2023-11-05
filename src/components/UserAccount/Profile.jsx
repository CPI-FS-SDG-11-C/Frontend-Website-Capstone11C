import * as React from 'react';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';


function Profile() {
    const [value, setValue] = React.useState(2);
  return (
    
    <>
    <div className='main'>
        {/* <div className='navbar'>
            <div className='w-[30px] h-4 left-[25px] top-[35px] absolute'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 14 14" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H13C13.5523 0 14 0.447715 14 1C14 1.55228 13.5523 2 13 2H1C0.447715 2 0 1.55228 0 1ZM0 5C0 4.44772 0.447715 4 1 4H13C13.5523 4 14 4.44772 14 5C14 5.55228 13.5523 6 13 6H1C0.447715 6 0 5.55228 0 5ZM0 9C0 8.44772 0.447715 8 1 8H13C13.5523 8 14 8.44772 14 9C14 9.55229 13.5523 10 13 10H1C0.447715 10 0 9.55229 0 9ZM0 13C0 12.4477 0.447715 12 1 12H13C13.5523 12 14 12.4477 14 13C14 13.5523 13.5523 14 13 14H1C0.447715 14 0 13.5523 0 13Z" fill="#404040"/>
                </svg>
                
            </div>
        </div> */}
        <div className='box'>
            <h3>Profile</h3>
            <div className='userinfo'>
                <div className="picture">
                    <Avatar alt="Remy Sharp" src="https://img.freepik.com/premium-vector/gray-avatar-icon-vector-illustration_276184-163.jpg" sx={{ width: 156, height: 156 }} />
                    {/* <img src="https://img.freepik.com/premium-vector/gray-avatar-icon-vector-illustration_276184-163.jpg" alt="Profile Picture" width="156" height="156" viewBox="0 0 156 156" />         */}
                </div>
                <div className="urc">
                    <h2>username</h2>
                    <h3>user@email.com</h3>
                </div>
                <div className="urc">
                    <h2>500k</h2>
                    <h3>Ratings</h3>
                </div>
                <div className="urc">
                    <h2>200k</h2>
                    <h3>Comments</h3>
                </div>
            </div>
            <div className='buttonsec'>
                <Link to="/edit" className="buttonsec">
                    <Button variant="contained">Edit Profile</Button>
                </Link>
                <Link to="/changepassword" className="buttonsec">
                    <Button variant="contained">Change Password</Button>
                </Link>
                <Link to="/login" className="buttonsec">
                    <Button variant="contained" >Log Out</Button>
                </Link>
                {/* <button> Edit Profile </button>
                <button> Change Password </button>
                <button> Log Out </button> */}
            </div>
            <div className='border-rating'>
                <h3>Rating & Comment History</h3>
                <ul>
                    <li>
                        <div className='comment'>
                            <h3>Nama RTH</h3>
                            <h4>timestamp nya</h4>
                            <Rating name="read-only" value={value} readOnly />
                            <h5>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum 
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </h5>
                        </div>
                    </li>
                    <li>
                        <div className='comment'>
                            <h3>Nama RTH</h3>
                            <h4>timestamp nya</h4>
                            <Rating name="read-only" value={value} readOnly />
                            <h5>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum 
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </h5>
                        </div>
                    </li>
                    <li>
                        <div className='comment'>
                            <h3>Nama RTH</h3>
                            <h4>timestamp nya</h4>
                            <Rating name="read-only" value={value} readOnly />
                            <h5>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum 
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </h5>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  );
}

export default Profile;
