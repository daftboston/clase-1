import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import NewsDetail from "./pages/NewsDetail";
import NavBar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      <NavBar />
      {isLoading && <Loader />}

      <Container className="my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;