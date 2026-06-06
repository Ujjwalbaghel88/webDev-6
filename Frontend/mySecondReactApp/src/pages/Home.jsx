
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
      <h2>Welcome Home Page</h2>
      <div>
        <button className="btn btn-primary me-2" onClick={()=> navigate("/product")}>Check Our Products</button>
      </div>
      </div>
    </>
  );
}
export default Home;
