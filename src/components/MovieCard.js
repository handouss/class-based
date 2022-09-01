import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid #000",
        paddingTop: "20px",
        marginLeft: "30%",
        marginRight: "30%",
        width: "auto",
        textAlign: "center",
        padding: "15px",
      }}
    >
      <img
        style={{
          objectFit: "cover",
          width: "300px",
          height: "300px",
        }}
        src={movie.imgSrc}
      />
      <p>{movie.title}</p>
      <p>{movie.description}</p>
      <div style={{
        display: 'flex',
    
      }}>
      {[...Array(movie.rating)].map((star) => {        
        return (         
          <span className="star">&#9733;</span>        
        );
      })}
      </div>
      
    </div>
  );
};

export default MovieCard;
