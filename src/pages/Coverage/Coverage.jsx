import React, { useRef, useState, useEffect, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router-dom";

const Coverage = () => {
  // Default center (Bangladesh)
  const defaultPosition = [23.685, 90.3563];

  // Raw data from loader
  const loaderData = useLoaderData();

  // Memoized array so ESLint is happy and ref is stable
  const serviceCenters = useMemo(
    () => (Array.isArray(loaderData) ? loaderData : []),
    [loaderData]
  );

  // What markers we are currently showing on the map
  const [displayCenters, setDisplayCenters] = useState(serviceCenters);

  // Map instance
  const mapRef = useRef(null);

  // When loader data changes, reset displayed centers
  useEffect(() => {
    setDisplayCenters(serviceCenters);
  }, [serviceCenters]);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value.trim().toLowerCase();

    if (!location) {
      // If input empty, reset view & markers
      setDisplayCenters(serviceCenters);
      if (mapRef.current) {
        mapRef.current.flyTo(defaultPosition, 7);
      }
      return;
    }

    // Find district by partial match
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location)
    );

    if (district && mapRef.current) {
      const coord = [district.latitude, district.longitude];

      // Fly to the district & zoom in
      mapRef.current.flyTo(coord, 11);

      // Show only this district's marker
      setDisplayCenters([district]);
    } else {
      // No match: show all again
      setDisplayCenters(serviceCenters);
      console.log("No matching district found");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#03373D]">
        We are available in 64 districts
      </h2>

      {/* Search bar + button */}
      <form
        onSubmit={handleSearch}
        className="mb-5 max-w-md flex flex-col gap-3"
      >
        <label className="flex items-center gap-3 border px-4 py-3 rounded-xl bg-white shadow-sm">
          <svg
            className="h-5 w-5 opacity-60 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          <input
            type="text"
            name="location"
            placeholder="Search district (e.g. Dhaka)"
            className="w-full text-[#03373D] placeholder-gray-500 outline-none"
          />
        </label>

        <button
          type="submit"
          className="self-start px-6 py-2 bg-[#03373D] text-white rounded-lg hover:bg-[#022a2f] font-medium transition"
        >
          Search
        </button>
      </form>

      {/* Map */}
      <div className="w-full h-[800px] border rounded-xl overflow-hidden">
        <MapContainer
          center={defaultPosition}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full"
          whenCreated={(mapInstance) => {
            mapRef.current = mapInstance; // correct way to get map instance
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {displayCenters.map((center, index) => (
            <Marker
              key={center.id || index}
              position={[center.latitude, center.longitude]}
            >
              <Popup>
                <strong>{center.district}</strong>
                <br />
                Service Area: {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
