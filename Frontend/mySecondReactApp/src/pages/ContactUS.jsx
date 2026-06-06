import { useState } from "react";
function ContactUS() {
  const [userName, setUserName] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");

  const [textarea, setTextarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userName:", userName);

    console.log("email:", email);

    console.log("phone", phone);
    console.log("about", about);
    console.log("textarea",textarea);
    
  };
  return (
    <>
      <div className=" d-flex justify-content-center">
        <div className="border bg-light shadow rounded w-50 mt-5 p-3">
          <h1 className="text-center text-primary">Contact US:</h1> <br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="userName"
              placeholder="Enter Your Full Name:"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />

            <input
              type="email"
              name="email"
              placeholder="Enter Your email:"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <input
              type="number"
              name="password"
              placeholder="Enter Your Phone Number:"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />

            <input
              type="text"
              name="text"
              placeholder="What is this about ?"
              className="form-control"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
            <br />

            <textarea
              name="text"
              placeholder="Enter your message here..."
              className="form-control"
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
            ></textarea>
            <div className="mt-2 text-center ">
              <button type="submit" className="btn btn-primary w-100 ">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default ContactUS;
