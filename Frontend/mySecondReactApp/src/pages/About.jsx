import { useState } from "react";
function About() {
  const [userName, setUserName] = useState("");
  const [city, setCity] = useState("");
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <span className="text-primary fs-2">About</span>
      </div>
      <div className=" d-grid justify-content-center gap-2 ">
       <div className="d-flex">
         <label>UserName:</label>
        <input 
          type="text"
          className="form-control"
          name="userName"
          onChange={(e) => setUserName(e.target.value)}
        />
       
        <div className="d-flex">my user Name is 
         
          {userName}
           <input type="text"
          className="form-control"
          
          />
        </div>
       </div>
      
      <div>
         <label htmlFor="">CityName:</label>
        <input

          type="text"
          className="form-control"
          name="city"
          onChange={(e) => setCity(e.target.value)}
        />
          <div>My city Name is {city}</div>
      </div>
      
      </div>
    </>
  );
}
export default About;
