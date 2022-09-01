import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
    const [movies, setMovies] = useState([
        {
          imgSrc:
            "https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8=",
          title: "Movie 1",
          description: "Description 1",
          rating: 5,
        },
        {
          imgSrc:
            "https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8=",
          title: "Movie 2",
          description: "Description 2",
          rating: 3,
        },
        {
          imgSrc:
            "https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8=",
          title: "Movie 3",
          description: "Description 3",
          rating: 1,
        },
      ]);

  const addMovie = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    // movies.push({
    //     imgSrc: '',
    //     title: formProps.title,
    //     description: formProps.description,
    //     rating: formProps.rating

    // })
    console.log(formProps);
    setMovies((_prev) => [
      ..._prev,
      {
        imgSrc: formProps.imgSrc,
        title: formProps.title,
        description: formProps.description,
        rating: parseInt(formProps.rating),
      },
    ]);
    //    const form = new FormData(document.getElementById('form'));
    //    console.log(Object.fromEntries(form).values())
  };

  const searchMovie = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    const filteredMovies = movies.filter(
      (movie) => movie.title?.toLowerCase() === formProps.filter?.toLowerCase()
    );
    setMovies(filteredMovies);
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
        }}
      >
        <form
          id="filterForm"
          onSubmit={searchMovie}
          action="#"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input type="text" name="filter" placeholder="filter" />
          <button type="submit">Search</button>
        </form>
      </div>
      {movies.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })}
      <div
        style={{
          position: "fixed",
          bottom: 0,
        }}
      >
        <form
          id="form"
          onSubmit={addMovie}
          action="#"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input type={"text"} name="title" placeholder={"title"} />
          <input type={"text"} name="description" placeholder={"description"} />
          <input type={"number"} name="rating" placeholder={"rating"} />
          <input type={"text"} name="imgSrc" placeholder={"Image Link"} />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </>
  );
};

export default MovieList;
