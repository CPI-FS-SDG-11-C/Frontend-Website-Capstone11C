import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  Card,
  CardMedia,
  CardContent,
  Tabs,
  Tab,
} from "@mui/material";
import "./style.css";

const ReadArticle = () => {
  const [article, setArticle] = React.useState({
    title: "Article Title",
    author: "The Writer",
    cover: "https://via.placeholder.com/300",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    `,
  });

  React.useEffect(() => {
    // Fetch article data from API
    async function fetchArticle() {
      const response = await fetch("https://api.example.com/articles/1");
      const data = await response.json();
      setArticle(data);
    }

    fetchArticle();
  }, []);

  const relatedArticles = [
    {
      id: 1,
      title: "Judul Artikel 1",
      description: "Deskripsi Singkat Isi Artikel 1",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Judul Artikel 2",
      description: "Deskripsi Singkat Isi Artikel 2",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Judul Artikel 3",
      description: "Deskripsi Singkat Isi Artikel 3",
      thumbnail: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Box>
      <Grid container spacing={5} className="flex-nowrap">
        <Grid
          item
          xs={12}
          md={9}
          className="main-content overflow-y-auto bg-blue-200 h-600"
        >
          <Box className="content-container">
            <Typography variant="h3" className="font-bold">
              {article.title}
            </Typography>
            <Typography variant="subtitle1">{article.author}</Typography>
            <img id="cover" src={article.cover} alt="Cover Image" />
            <Typography variant="body1">{article.content}</Typography>
          </Box>
        </Grid>
        <Grid item className="related-content" xs={12} md={3}>
          <Box className="m-3">
            <Typography variant="h5" className="font-semibold">
              Related Articles
            </Typography>
            <hr className="mt-3 mb-5" />
            <Box>
              {relatedArticles.map((article) => (
                <Card key={article.id} className="mb-7">
                  <CardMedia
                    component="img"
                    height="140"
                    image={article.thumbnail}
                    alt="Thumbnail Image"
                  />
                  <CardContent>
                    <Typography variant="h5">{article.title}</Typography>
                    <Typography variant="subtitle1">
                      {article.description}
                    </Typography>
                    <Link to="/read-article" className="link">
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
