import { FaWifi } from "react-icons/fa";


// import contactImage from "./assets/contactPage.jpg";
import LoginPage from "./assets/pages/LoginPage";

function App() {
  // const age = 5;

  return (
    <>
      <div className="bg-primary p-2 text-light">
        <FaWifi /> <span>My Revision App</span>
      </div>

      <LoginPage />
    </>
  );
}

export default App;
