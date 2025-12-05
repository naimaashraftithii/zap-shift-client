import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router-dom";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData() || [];
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value.trim();
    if (!location) return;

    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district && mapRef.current) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 14);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-10">
      <h2 className="text-5xl text-gray-950 mb-4">
        We are available in 64 districts
      </h2>

      <div className="mb-4">
        <form onSubmit={handleSearch}>
          <label className="input flex items-center gap-2 max-w-md">
            <svg
              className="h-[1em] opacity-50"
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
              type="search"
              className="grow"
              name="location"
              placeholder="Search district"
            />
          </label>
        </form>
      </div>

      <div className="border w-full h-[800px] rounded-xl overflow-hidden">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px] w-full"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker
              key={center.id || index}
              position={[center.latitude, center.longitude]}
            >
              <Popup>
                <strong>{center.district}</strong>
                <br />
                Service Area: {center.covered_area.join(", ")}.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
