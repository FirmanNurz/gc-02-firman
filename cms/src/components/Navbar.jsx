import { Link, useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png"
            alt="Spicy Food Logo"
            style={{ height: "40px", width: "auto", marginRight: "10px" }}
            className="rounded"
          />
          <div className="d-flex align-items-center">
            
            <span className="fw-bold" style={{ fontSize: "24px" }} color="Dark 700">
              SPICY Admin
            </span>
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center text-white font-bold" to="/">
                <span>Cuisines</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center text-white font-bold" to="/categories">
                <span>Categories</span>
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link d-flex align-items-center text-white font-bold" to="/register">
                <span>Add User</span>
              </Link>
            </li>
          </ul>
          <button onClick={handleLogout} className="btn btn-outline-light d-flex align-items-center">
            <span className="material-symbols-outlined me-1" style={{ fontSize: "24px" }}>
              logout
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
