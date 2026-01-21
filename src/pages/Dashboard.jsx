import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import SearchBar from "../components/SearchBar";
import { initialProfiles } from "../data/profiles";

export default function Dashboard({ favourites, setFavourites, showFavouritesOnly = false }) {
  // Local state for all profiles and search input
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState("");

  // Simulate data fetching from a backend/API
  useEffect(() => {
    setTimeout(() => setProfiles(initialProfiles), 500);
  }, []);

  // Filter profiles based on search input
  const searchedProfiles = profiles.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase()))
  );

  // Determine which profiles to show depending on favourites filter
  const visibleProfiles = showFavouritesOnly
    ? searchedProfiles.filter((p) => favourites.includes(p.id))
    : searchedProfiles;

  // Toggle favourite status for a given profile
  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">
        {showFavouritesOnly ? "Favourite Applicants" : "Search Applicants"}
      </h1>

      {/* Show message if no favourite applicants */}
      {visibleProfiles.length === 0 && showFavouritesOnly ? (
        <p className="text-muted fs-5 mt-5">
          No applicants favourited.
        </p>
      ) : (
        
        <>
          <SearchBar search={search} setSearch={setSearch} />

          {/* Display profile cards in a responsive grid */}
          <div className="row g-3">
            {visibleProfiles.map((profile) => (
              <div key={profile.id} className="col-12 col-sm-6 col-md-4">
                <Link to={`/profile/${profile.id}`} className="text-decoration-none">
                  <ProfileCard
                    profile={profile}
                    isFavorite={favourites.includes(profile.id)}
                    toggleFavorite={toggleFavourite}
                  />
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
