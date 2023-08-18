import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PricePage from "./pages/Prices";
import Gallery from "./pages/gallery.jsx";
import ContactUs from "./pages/ContactUs";

import "./App.css";

function App() {
  // return (
  //   // <div className="App">
  //   //   <LandingPage />
  //   // </div>
  // );
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/plan&price" element={<PricePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
