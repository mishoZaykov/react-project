import { Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Create from "./Components/CreatePost/Create";
import Posts from "./Components/Posts/Posts";
import Details from "./Components/Details/Details";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/details/:movieId" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
