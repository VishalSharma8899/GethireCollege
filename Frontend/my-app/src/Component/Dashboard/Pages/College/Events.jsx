import React from "react";

function Events({ children, img, ...props }) {
  return (
    <div {...props}>
      <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
        <img
          src={img}
          className="w-full h-48 object-cover transition-transform group-hover:scale-110 duration-200" alt="event"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
          <div className="p-4 text-white">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Events;
