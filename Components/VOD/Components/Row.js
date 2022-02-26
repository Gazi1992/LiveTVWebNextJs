import React, { useState, useEffect } from "react";
import axios from "../axios";
import styled from "styled-components";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <RowContainer>
      <h2>{title}</h2>
      <RowPosters>
        {movies.map((movie) => (
          <>
            {isLargeRow ? (
              <RowPosterLarge
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ) : (
              <RowPoster
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )}
          </>
        ))}
      </RowPosters>
    </RowContainer>
  );
}

const RowContainer = styled.div`
  margin-left: 20px;
  color: white;
`;
const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  &:hover {
    transform: scale(1.08);
  }
`;
const RowPosterLarge = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 250px;
  margin-right: 10px;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
  }
`;

const RowPoster = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 150px;
  margin-right: 10px;
  transition: transform 450ms;
`;
export default Row;
