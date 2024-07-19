import React, { useEffect, useState } from "react";
import _ from "loadsh";
import Moviecard from "./Moviecard";

const MovieList = ({ type, typeImg }) => {
  const [ActiveFilter, setActiveFilter] = useState(0);
  const [Movies, setMovies] = useState([]);
  const [filterMovies, setfilterMovies] = useState([]);
  const [Sort, setSort] = useState({ by: "default", order: "asc" });

  const items = ["8+ Star", "7+ Star", "6+ Star"];
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    FetchData();
  }, [type]);

  useEffect(() => {
    if (Sort.by != "default") {
      const sortedMovies = _.orderBy(filterMovies, [Sort.by], [Sort.order]);
      setfilterMovies(sortedMovies);
    }
  }, [Sort]);

  const FetchData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`
    );
    const data = await response.json();
    setMovies(data.results);
    setfilterMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (ActiveFilter === rate) {
      setActiveFilter(0);
      setfilterMovies(Movies);
    } else {
      setActiveFilter(rate);
      const filtered = Movies.filter((movie) => movie.vote_average >= rate);
      setfilterMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-2 px-8" id={type}>
      <header className="flex justify-between items-center">
        <h2 className="flex items-center text-heading_color font-semibold text-2xl capitalize">
          {type} <img src={typeImg} alt="" className="w-6 h-6 ml-1" />
        </h2>
        <div className="flex items-center gap-x-4">
          <ul className="flex mr-4">
            {items.map((item, index) => (
              <li
                key={index}
                className={`px-3 cursor-pointer ${
                  ActiveFilter === +item.slice(0, 1) ? "border-b" : ""
                }`}
                onClick={() => handleFilter(+item.slice(0, 1))}
              >
                {item}
              </li>
            ))}
          </ul>
          <select
            onChange={handleSort}
            value={Sort.by}
            name="by"
            id=""
            className="bg-select_background text-select_color rounded-md h-8 pl-1 pr-10"
          >
            <option value="default">SortBy (Default)</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            onChange={handleSort}
            name="order"
            value={Sort.order}
            id=""
            className="bg-select_background text-select_color rounded-md pl-1 h-8 pr-4"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="flex justify-evenly flex-wrap gap-y-5 my-4">
        {filterMovies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
