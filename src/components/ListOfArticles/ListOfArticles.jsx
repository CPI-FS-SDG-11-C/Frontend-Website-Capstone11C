import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Card, CardContent, CardMedia } from "@mui/material";
import "./style.css";

const ListOfArticles = () => {
  const [articles, setArticles] = React.useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        apiUrl + "articles",
        {
          method: "GET",
        }
      );
      const data = await response.json();

      setArticles(data.data);
    };

    fetchArticles();
  }, []);

  return (
    <Container className="ml-16 w-fit h-screen xl:mx-auto">
      <div className="py-8 text-center">
        <h1>News and Article</h1>
      </div>
      <Grid container spacing={3}>
        {articles.map((oneArticle, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={oneArticle.gambar}
                alt="Judul Artikel"
              />
              <CardContent>
                {/* <p>{oneArticle.pengarang}</p> */}
                {/* {console.log(oneArticle.pengarang)} */}
                <h3>{oneArticle.judul}</h3>
                <p>{oneArticle.teks}</p>
                <div className="link">
                  <Link to="/read-article" state={{ oneArticle }}>
                    Baca Selengkapnya...
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// const articles = [
//   {
//     title: "Judul Artikel 1",
//     description: "Deskripsi singkat isi artikel 1",
//   },
//   {
//     title: "Judul Artikel 2",
//     description: "Deskripsi singkat isi artikel 2",
//   },
//   {
//     title: "Judul Artikel 3",
//     description: "Deskripsi singkat isi artikel 3",
//   },
//   {
//     title: "Judul Artikel 4",
//     description: "Deskripsi singkat isi artikel 4",
//   },
//   {
//     title: "Judul Artikel 5",
//     description: "Deskripsi singkat isi artikel 5",
//   },
// ];

export default ListOfArticles;
