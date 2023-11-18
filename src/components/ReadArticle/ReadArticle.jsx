import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "./style.css";

const ReadArticle = () => {
  const location = useLocation();
  const { oneArticle } = location.state;
  const { _id: id } = oneArticle;
  const [articles, setArticles] = React.useState([]);
  const [articleOne, setArticleOne] = React.useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        apiUrl + `articles`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      setArticles(data.data);
    };

    const fetchArticlesOne = async () => {
      const response = await fetch(
        apiUrl + `articles/${id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setArticleOne(data.data);
      console.log(data.data);
 
    };

    fetchArticles();
    fetchArticlesOne();
  }, [id]);

  const handleReload = () => {
    window.location.reload();
  };
  // React.useEffect(() => {
  //   // Fetch article data from API
  //   async function fetchArticle() {
  //     const response = await fetch("https://api.example.com/articles/1");
  //     const data = await response.json();
  //     setArticle(data);
  //   }

  //   fetchArticle();
  // }, []);

  return (
    <Box>
      <Grid container spacing={5} className="flex-nowrap">
        <Grid item xs={12} md={9} className="main-content">
          <Box className="content-container">
            <Link to="/articles" className="py-3" style={{ color: "#929191" }}>
              <ArrowBackRoundedIcon fontSize="large" />
            </Link>
            <Typography variant="h3" className="font-bold">
              {articleOne.judul}
            </Typography>
            <Typography variant="subtitle1">Penulis: {articleOne.pengarang}</Typography>
            <img id="cover" src={articleOne.gambar} alt="Cover Image" />
            <Typography variant="body1" className="text-justify">
              {articleOne.teks}
            </Typography>
          </Box>
        </Grid>
        <Grid item className="related-content" xs={12} md={3}>
          <Box className="m-3">
            <Typography variant="h5" className="font-semibold">
              Related Articles
            </Typography>
            <hr className="mt-3 mb-5" />
            <Box>
              {articles.map((oneArticle, i) => (
                <Card key={i} className="mb-7">
                  <CardMedia
                    component="img"
                    height="140"
                    image={oneArticle.gambar}
                    alt="Thumbnail Image"
                  />
                  <CardContent>
                    <Typography variant="h5">{oneArticle.judul}</Typography>
                    <Typography variant="subtitle1">{oneArticle.teks}</Typography>
                    {/* <Link
                      to="/read-article"
                      className="link"
                      state={{ article }}
                    >
                      Baca Selengkapnya
                    </Link> */}
                    <Link to="/read-article" state={{ oneArticle }} onClick={handleReload}>
                      Baca Selengkapnya...
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReadArticle;
