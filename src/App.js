import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
     <Header></Header>
     <Footer></Footer>
    </Router>
  );
}

export default App;
