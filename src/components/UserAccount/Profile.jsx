import React, { useState, useEffect } from "react";
import { Container, Grid, Card, CardContent, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

function Profile() {
  const [value, setValue] = React.useState(2);
  const [userData, setUserData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

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

  const fetchRthData = async (idRth) => {
    try {
      const response = await fetch(`https://soft-held-cobweb.glitch.me/api/rths/rth/${idRth}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": token,
        },
      });

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
      console.error('Tidak ada token');
      // alert('Tidak ada token');
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await fetch("https://soft-held-cobweb.glitch.me/api/users/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "authorization": token,
          },
        });

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
        const response = await fetch("https://soft-held-cobweb.glitch.me/api/rths/userreviews", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "authorization": token,
          },
        });

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
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
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
    }
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
              alt="Remy Sharp"
              src="https://img.freepik.com/premium-vector/gray-avatar-icon-vector-illustration_276184-163.jpg"
              sx={{ width: 156, height: 156 }}
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
            <Button variant="contained">
              Change Password
            </Button>
          </Link>
          <Link to="/login" className="buttonedit">
            <Button variant="contained">
              Log Out
            </Button>
          </Link>
        </Grid>
        <Grid container className="border-rating flex">
          <h3>Rating & Comment History</h3>
          <ul className="review-li">
            {reviews.map((review) => (
              <li key={review._id}>
                <div className="comment">
                  <h3>Nama RTH: {review.rthData?.Nama}</h3>
                  <h4>{formatTimestamp(review.created_at)}</h4>
                  <Rating name="read-only" value={review.rating} readOnly />
                  <h5>{review.comment}</h5>
                </div>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
