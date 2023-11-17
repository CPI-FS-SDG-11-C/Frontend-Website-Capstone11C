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
 

  const [articles, setArticles] = React.useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        "https://sunrise-mousy-restaurant.glitch.me/api/articles",
        {
          method: "GET",
        }
      );
      const data = await response.json();

      setArticles(data.data);
    };

    fetchArticles();
  }, []);
  // const [article, setArticle] = React.useState({
  //   title: "Article Title",
  //   author: "The Writer",
  //   cover: "https://via.placeholder.com/300",
  //   content: `
  //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  //     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, 
  //     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
  //     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, 
  //     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
  //     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  //   `,
  // });

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
              {oneArticle.judul}
            </Typography>
            <Typography variant="subtitle1">{oneArticle.pengarang}</Typography>
            <img id="cover" src={oneArticle.gambar} alt="Cover Image" />
            <Typography variant="body1" className="text-justify">
              {oneArticle.teks}
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
              {articles.map((article) => (
                <Card key={article._id} className="mb-7">
                  <CardMedia
                    component="img"
                    height="140"
                    image={article.gambar}
                    alt="Thumbnail Image"
                  />
                  <CardContent>
                    <Typography variant="h5">{article.judul}</Typography>
                    <Typography variant="subtitle1">{article.teks}</Typography>
                    <Link
                      to="/read-article"
                      className="link"
                      state={{ oneArticle }}
                    >
                      Baca Selengkapnya
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
