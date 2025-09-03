import React from "react";

const TeamGrid = ({ members = [] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {members.map((m, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-sm p-3 flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
            {m.photoUrl ? (
              <img
                src="assets/newrise/placeholder-image.png"
                alt={m.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src="assets/newrise/placeholder-image.png"
                alt={m.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <h2 className="text-sm font-semibold leading-tight">{m.name}</h2>
          <p className="text-xs text-gray-600">{m.position}</p>
          {/* <p className="text-[10px] text-gray-400 mt-1">{m.nationality}</p> */}
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
