import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route  element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
