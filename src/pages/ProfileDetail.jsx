import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { initialProfiles } from "../data/profiles";

export default function ProfileDetail({ favourites, setFavourites }) {
  // Extract profile ID from URL parameters
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  
  // Load the selected profile from initialProfiles when the ID changes
  useEffect(() => {
    const found = initialProfiles.find(p => p.id === parseInt(id));
    setProfile(found || null);
  }, [id]);

  if (!profile) {
    return <p className="text-center mt-5">Profile not found</p>;
  }

  // Determine if this profile is currently favourited
  const isFavourite = favourites.includes(profile.id);

  const toggleFavourite = () => {
    setFavourites(prev =>
      prev.includes(profile.id)
        ? prev.filter(f => f !== profile.id)
        : [...prev, profile.id]
    );
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow-lg p-5 w-100 mt-2" style={{ maxWidth: "45rem" }}>
        
        {/* Name */}
        <h1 className="text-center display-6 fw-bold mb-1">
          {profile.name}
        </h1>

        {/* Title */}
        <p className="text-center text-muted fs-5 mb-4">
          {profile.title}
        </p>

        {/* Toggle favourite button */}
        <div className="text-center mb-4">
          <button
            onClick={toggleFavourite}
            className={`btn ${isFavourite ? "btn-warning" : "btn-outline-secondary"}`}
          >
            {isFavourite ? "★ Favourite" : "☆ Favourite"}
          </button>
        </div>

        {/* Summary */}
        <div className="mb-4">
          <h5 className="fw-semibold">Summary</h5>
          <p className="text-secondary">{profile.summary}</p>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <h5 className="fw-semibold">Skills</h5>
          <p>{profile.skills.join(" | ")}</p>
        </div>

        {/* Back navigation link */}
        <div className="text-center">
          <Link to="/" className="btn btn-link nav-link">
            ← Back to Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
}
