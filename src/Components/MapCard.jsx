import React from "react";

const MapCard = () => {
  return (
    <div className="relative w-[220px] h-[220px] border-4 border-white rounded-2xl overflow-hidden shadow-lg bg-white">
      {/* Google Map Embed */}
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2342.2115516177355!2d91.71925903124946!3d26.16350067165809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1744021685222!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Gradient fade that stops before the text */}
      <div className="absolute bottom-16 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Solid white background under gradient to support text */}
      <div className="absolute bottom-0 w-full h-16 bg-white pointer-events-none" />

      {/* "Map" Label */}
      <div className="absolute top-2 left-2 bg-white text-sm px-3 py-1 rounded-full shadow">
        Map
      </div>

      {/* Location Info */}
      <div className="absolute bottom-4 w-full text-center">
        <h2 className="text-xl font-semibold tracking-widest">Kamakhya Gate</h2>
        <p className="text-sm text-gray-500">INDIA</p>
        <p className="text-xs text-gray-400 mt-1">26°09'51.8"N 91°43'08.5"E</p>
      </div>
    </div>
  );
};

export default MapCard;
