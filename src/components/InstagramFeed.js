// src/components/InstagramFeed.js
import React from "react";

const InstagramFeed = () => {
  return (
    <div className="instagram-feed">
      {/* Embebido oficial de Instagram (reemplaza el usuario por el tuyo) */}
      <iframe
        src="https://www.instagram.com/p/C2abc123/embed"
        title="Instagram Feed"
        width="100%"
        height="480"
        frameBorder="0"
        scrolling="no"
        allowtransparency="true"
      ></iframe>
      <p className="mt-3">
        Visita nuestro perfil en{" "}
        <a
          href="https://www.instagram.com/uca_cl/"
          target="_blank"
          rel="noreferrer"
        >
          @uca_cl
        </a>
      </p>
    </div>
  );
};

export default InstagramFeed;
