import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
// import { Link } from "react-router-dom";
import { useMemo } from "react"
// import { Navigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const [value, setValue] = React.useState(2);
  const [userData, setUserData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  const navigate = useNavigate();
  
  const handleLogoutClick = () => {
    const confirmLogout = window.confirm("Anda yakin ingin log out?");

    if (confirmLogout) {
      localStorage.removeItem("token");
      navigate('/login');
    }
  };

  // Function to generate UI Avatar URL
  const generateAvatarUrl = useMemo(() => {
    if (userData) {
      // Construct the UI Avatar URL using the user's username or initials
      const avatarUrl = `https://ui-avatars.com/api/?rounded=true&name=${encodeURIComponent(
        userData.username || "User"
      )}`;
      return avatarUrl;
    }
    return "";
  }, [userData]);

  const formatTimestamp = (timestamp) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    return new Date(timestamp).toLocaleDateString("en-US", options);
  };

  // const handleLogoutClick = () => {
  //   const confirmLogout = window.confirm("Anda yakin ingin log out?");

  //   if (confirmLogout) {
  //     localStorage.removeItem("token");
  //     navigate("/login");
  //   }
  // };

  const fetchRthData = async (idRth) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `https://sunrise-mousy-restaurant.glitch.me/api/rths/rth/${idRth}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "authorization": token,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data.data;
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Tidak ada token");
      // alert('Tidak ada token');
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await fetch(
          "https://sunrise-mousy-restaurant.glitch.me/api/users/profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "authorization": token,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUserData(data.data);
        } else {
          console.error(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    };

    const fetchUserReviews = async () => {
      try {
        const response = await fetch(
          "https://sunrise-mousy-restaurant.glitch.me/api/rths/userreviews",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "authorization": token,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();

          const reviewsWithRthData = await Promise.all(
            data.data.map(async (review) => {
              const rthData = await fetchRthData(review.id_rth);
              return { ...review, rthData };
            })
          );

          setReviews(reviewsWithRthData);
          calculateAverageRating(reviewsWithRthData);
          calculateTotalReview(reviewsWithRthData);
        } else {
          console.error(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    };

    const calculateAverageRating = (reviews) => {
      if (reviews.length > 0) {
        const totalRating = reviews.reduce(
          (sum, review) => sum + review.rating,
          0
        );
        const average = totalRating / reviews.length;
        setAverageRating(average);
      } else {
        setAverageRating(0);
      }
    };

    const calculateTotalReview = (reviews) => {
      if (reviews.length > 0) {
        const totalReviews = reviews.length;
        setTotalReviews(totalReviews);
      } else {
        setTotalReviews(0);
      }
    };
    fetchUserProfile();
    fetchUserReviews();
  }, []);

  return (
    <Container>
      <div className="py-8 text-center xl:text-justify">
        <h2>Profile</h2>
      </div>
      <Grid container>
        <Grid container className="flex">
          <div className="mx-auto lg:mx-10">
            <Avatar
              alt="User Avatar"
              src={generateAvatarUrl}
              sx={{ width: 100, height: 100 }}
            />
          </div>
          <div className="flex mx-auto md:mx-0">
            <div className="my-auto mx-2 md:mx-5">
              <h2>{userData?.username}</h2>
              <h3>{userData?.email}</h3>
            </div>
            <div className="my-auto mx-2 md:mx-5">
              <h2>{averageRating.toFixed(2)}</h2>
              <h3>Ratings</h3>
            </div>
            <div className="my-auto mx-2 md:mx-5">
              <h2>{totalReviews}</h2>
              <h3>Comments</h3>
            </div>
          </div>
        </Grid>
        <Grid container className="buttonsec">
          <Link to="/edit" className="buttonedit">
            <Button variant="contained">Edit Profile</Button>
          </Link>
          <Link to="/changepassword" className="buttonedit">
            <Button variant="contained">Change Password</Button>
          </Link>
          <Link to="/login" className="buttonedit">
            <Button variant="contained" onClick={handleLogoutClick}>
              Log Out
            </Button>
          </Link>
        </Grid>
        <Grid container className="border-rating flex">
          <h3>Rating & Comment History</h3>
          <ul className="review-li">
            { reviews.length === 0 ? 
            ( <li>
                <h3>Tidak ada Komen</h3>
              </li>) 
            : 
            (reviews.map((review) => (
              <li key={review._id}>
                <div className="comment">
                  <h3>Nama RTH: {review.rthData?.Nama}</h3>
                  <h4>{formatTimestamp(review.created_at)}</h4>
                  <Rating name="read-only" value={review.rating} readOnly />
                  <h5>{review.comment}</h5>
                </div>
              </li>
            ))
            )}
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
