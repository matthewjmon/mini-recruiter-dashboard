// Card component to display individual profile information
// Highlights if the profile is marked as favourite
export default function ProfileCard({ profile, isFavorite, toggleFavorite }) {
  return (
    <div className={`card h-100 ${isFavorite ? "bg-warning-subtle" : "bg-light"}`}>
      <div className="card-body">
        <h5 className="card-title">{profile.name}</h5>
        <p className="card-text">{profile.bio}</p>
        <p className="card-text">
          <strong className="me-1">Skills:</strong> 
          {profile.skills.join(", ")}
        </p>

        {/* Favourite toggle button */}
        <button
          onClick={e => { e.preventDefault(); toggleFavorite(profile.id); }}
          className="btn btn-outline-dark mt-2"
        >
          {isFavorite ? "★ Favorite" : "☆ Favorite"}
        </button>
      </div>
    </div>
  );
}
