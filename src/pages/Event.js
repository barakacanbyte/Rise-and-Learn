import React, { useEffect, useState } from "react";
// import axios from "axios"; // keep if you'll fetch events later
import EventsCards from "../components/EventsCards";

const DEFAULT_CENTER = { lat: -6.7924, lng: 39.2083 }; // Dar es Salaam, TZ (fallback)

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState([]);
  const [Ldata, setLdata] = useState([
    { title: "", photo_url: "", date: "", address: "", city: "" },
  ]);

  // --- Geolocation state ---
  const [coords, setCoords] = useState(null);
  const [locating, setLocating] = useState(false);
  const [locError, setLocError] = useState("");

  const requestLocation = () => {
    if (!("geolocation" in navigator)) {
      setLocError("Geolocation is not supported by this browser.");
      return;
    }
    setLocError("");
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setLocating(false);
      },
      (err) => {
        setLocError(
          err.code === 1
            ? "Permission denied. You can allow location access and try again."
            : "Could not get your location. Please try again."
        );
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  // Try to get location on mount (will show permission prompt)
  useEffect(() => {
    requestLocation();
  }, []);

  // --- (Optional) Fetch events later ---
  // useEffect(() => {
  //   const getEvents = async () => {
  //     const res = await axios.get("http://localhost:8000/events");
  //     setData(res.data || []);
  //   };
  //   const getEventLatest = async () => {
  //     const res = await axios.get("http://localhost:8000/events/latest");
  //     setLdata(res.data || []);
  //   };
  //   getEvents();
  //   getEventLatest();
  // }, []);

  const center = coords || DEFAULT_CENTER;

  const mapSrc = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(
    `${center.lat},${center.lng}`
  )}&ie=UTF8&t=&z=13&iwloc=B&output=embed`;

  const latest = Ldata?.[0] || {};
  const latestDate = latest?.date ? new Date(latest.date) : null;
  const latestDateStr = latestDate
    ? latestDate.toLocaleDateString()
    : "TBD";
  const latestTimeStr = latestDate
    ? latestDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : "";

  return (
    <div className="w-full mb-[120px]">
      <div className="w-full h-20 bg-[var(--orange-dark)] flex items-center justify-center">
        <h1 className="text-white font-sans text-5xl">Events</h1>
      </div>

      <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center relative">
        {/* Map centered on user location (or fallback) */}
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src={mapSrc}
        ></iframe>

        {/* Location status & retry */}
        <div className="absolute top-4 right-4">
          <div className="rounded-xl bg-white/90 backdrop-blur px-4 py-2 shadow ring-1 ring-gray-200 flex items-center gap-3">
            {locating ? (
              <span className="text-sm text-gray-700">Detecting your location…</span>
            ) : coords ? (
              <span className="text-sm text-gray-700">
                Showing events near you
              </span>
            ) : (
              <span className="text-sm text-gray-700">
                Using default location
              </span>
            )}
            <button
              onClick={requestLocation}
              className="text-xs rounded-md bg-[var(--orange-dark)] text-white px-3 py-1 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--orange-dark)]"
            >
              {coords ? "Refresh" : "Use my location"}
            </button>
          </div>
          {locError && (
            <p className="mt-2 text-xs text-red-600 bg-white/90 rounded-md px-3 py-2 shadow">
              {locError}
            </p>
          )}
        </div>

        {/* Latest event card overlay */}
        <div className="absolute m-auto left-5 md:top-10 md:left-10">
          <div className="w-[260px] bg-white border-2 border-black flex flex-col rounded-md overflow-hidden shadow">
            <img
              src={
                latest?.photo_url ||
                "https://via.placeholder.com/400x240?text=Upcoming+Event"
              }
              className="w-full h-40 object-cover"
              alt={latest?.title || "Upcoming event image"}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://via.placeholder.com/400x240?text=Upcoming+Event";
              }}
            />
            <h3 className="text-center text-red-500 font-bold mt-2">
              Upcoming Event
            </h3>

            <p className="text-center p-3 text-sm leading-6 text-gray-800">
              <span className="font-semibold">{latest?.title || "To be announced"}</span>
              <br />
              {latestDateStr} {latestTimeStr && `• ${latestTimeStr}`}
              <br />
              {latest?.address || "Address TBA"}
              <br />
              {latest?.city || ""}
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-center text-5xl mt-8">
        Upcoming{" "}
        <span className="text-[var(--orange-dark)]">Events</span>
      </h1>

      <div className="mt-6">
        <EventsCards data={data} />
      </div>
    </div>
  );
};

export default Events;
