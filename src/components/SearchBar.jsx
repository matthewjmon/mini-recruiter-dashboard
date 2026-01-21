// Simple input component for searching profiles
export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Search by name or skill..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="form-control w-50"
      />
    </div>
  );
}
