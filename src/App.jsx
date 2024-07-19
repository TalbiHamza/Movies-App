import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-body_background text-body_color min-h-screen grid-rows-12 font-montserrat">
        <Navbar />
        <main>
          {" "}
          <Routes>
            <Route
              path="/"
              element={<MovieList type={"popular"} typeImg={Fire} />}
            />{" "}
            <Route
              path="/top_rated"
              element={<MovieList type={"top_rated"} typeImg={Star} />}
            />{" "}
            <Route
              path="/upcoming"
              element={<MovieList type={"upcoming"} typeImg={Party} />}
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
