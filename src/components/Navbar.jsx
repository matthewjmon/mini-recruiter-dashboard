import { Link } from "react-router-dom";

// Navigation bar with links to main routes
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">Recruiter Dashboard</span>
        <div className="collapse navbar-collapse justify-content-end">
          <div className="navbar-nav">
            {/* Links to routes */}
            <Link to="/" className="nav-link">Applicants</Link>
            <Link to="/favourites" className="nav-link">Favourites</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
