import React from "react";
import {Link} from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import "./style.css";

const ListOfArticles = () => {
  const image = "https://via.placeholder.com/150";

  return (
    <Container className="ml-16 w-fit h-screen xl:mx-auto">
      <div className="py-8">
        <h1>News and Article</h1>
      </div>
      <Grid container spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt="Judul Artikel"
              />
              <CardContent>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <div className="link">
                  <Link to="/read-article">
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

const articles = [
  {
    title: "Judul Artikel 1",
    description:
      "Deskripsi singkat isi artikel 1",
  },
  {
    title: "Judul Artikel 2",
    description: "Deskripsi singkat isi artikel 2",
  },
  {
    title: "Judul Artikel 3",
    description: "Deskripsi singkat isi artikel 3",
  },
  {
    title: "Judul Artikel 4",
    description: "Deskripsi singkat isi artikel 4",
  },
  {
    title: "Judul Artikel 5",
    description: "Deskripsi singkat isi artikel 5",
  },
];

export default ListOfArticles;
