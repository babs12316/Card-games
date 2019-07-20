 // eslint-disable-next-line
import React, { Component } from 'react';
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div className="App">
      <header>
        <Header userName={"User"} />
      </header>
     <section>
     
              <Cards />
           
      </section>
       <footer>
        <Footer year={2019} />
      </footer>
    </div>
  );
}

export default App;
