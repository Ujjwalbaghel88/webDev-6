function Header() {
  return (
    <>
      <div className="bg-primary-subtle p-2 d-flex justify-content-between align-items-center">


        <div className=" fs-4 fw-bold">My Company </div>
        <div className="d-flex gap-3">
          <span>Home</span>
          <span>about</span>
          <span>Product</span>
          <span>ContactUS</span>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary">Login</button>
          <button className="btn btn-outline-secondary">Register</button>
        </div>
      </div>
    </>
  );
}

export default Header;