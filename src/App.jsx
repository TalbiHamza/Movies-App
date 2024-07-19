import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";

function App() {
  return (
    <>
      <div className="bg-body_background text-body_color min-h-screen grid-rows-12 font-montserrat">
        <Navbar />
        <MovieList type={"popular"} typeImg={Fire} />
        <MovieList type={"top_rated"} typeImg={Star} />
        <MovieList type={"upcoming"} typeImg={Party} />
      </div>
    </>
  );
}

export default App;
