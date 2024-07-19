import React from "react";
import Star from "../assets/star.png";

const Moviecard = ({ movie }) => {
  return (
    <>
      <a
        href={`https://www.themoviedb.org/movie/${movie.id}`}
        target="_blank"
        className="h-80 w-52 overflow-hidden relative rounded-xl hover:scale-105 duration-500 ease-in-out"
      >
        <img
          src={`http://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt="Movie_Poster"
          className="h-full w-full"
        />
        <div
          className="absolute top-0 h-full w-full p-2 flex flex-col justify-end opacity-0 hover:opacity-100"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))",
          }}
        >
          <h3 className=" text-base text-yellow-500 ">{movie.title}</h3>
          <div className="flex justify-between items-center text-yellow-500 ">
            <p className="">{movie.release_date}</p>
            <p className="flex items-center">
              {movie.vote_average}
              <img src={Star} alt="" className="h-6 w-6 ml-1" />
            </p>
          </div>
          <p className="">{movie.overview.slice(0, 100) + "..."}</p>
        </div>
      </a>
    </>
  );
};

export default Moviecard;
