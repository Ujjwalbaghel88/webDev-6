import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Order from "./pages/Order";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Partner from "./pages/PartnerWithUs";
import Feedback from "./pages/Feedback";
import HelpCenter from "./pages/HelpCenter";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order" element={<Order />} />
          {/* <Route path="/partner" element={<Partner />} /> */}
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/help-center" element={<HelpCenter />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
