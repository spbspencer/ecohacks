import './App.css';
import Header from './components/Header';
import Brands from './components/Brands';
import Footer from './components/Footer';
import About from './components/About';
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Submission from './components/Submission';

function App() {
  return (
    //browser router
    <BrowserRouter>
      <Routes>
          <Route
             path="about"
             element={
              <About />
             }
             /> 
      </Routes>

      <Routes>
          <Route
             path="submit"
             element={
              <Submission />
             }
             /> 
      </Routes>
        
      <Routes>
        <Route 
            path="/"
            element={
                <>
                <Header />
                <Brands />
                <Footer />
              </>
              }
            /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
