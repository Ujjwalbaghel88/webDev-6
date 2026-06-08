import image1 from "./assets/image1.png";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className="bg-[url('/vlcsnap-2025-10-21-19h23m08s878.png')] bg-cover flex justify-center w-full h-screen">
        <header className=" bg-[#C2410C] h-15 w-100 d-flex justify-content-between shadow-md ">
        <div className="">
          <img src={image1} className="w-25  flex-shrink-0" />
        </div>

        <div className="d-flex justify-between  gap-2 ">
          <button className="  p-2 rounded-2 text-white hover:bg-amber-300 active:bg-green-300">Login</button>
          <button className="bg-white p-2 rounded-2 text-amber-600">
            Register
          </button>
        </div>
      </header>
      </div>
     
    </>
  );
};
export default App;

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Order from "./pages/Order";
// import ContactUs from "./pages/ContactUs";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// // import Partner from "./pages/PartnerWithUs";
// import Feedback from "./pages/Feedback";
// import HelpCenter from "./pages/HelpCenter";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />

//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/order" element={<Order />} />
//           {/* <Route path="/partner" element={<Partner />} /> */}
//           <Route path="/feedback" element={<Feedback />} />
//           <Route path="/help-center" element={<HelpCenter />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
