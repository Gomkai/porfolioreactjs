import React from "react";

const GoogleMap = () => (
  <div className="map-container" style={{ position: "relative", width: "100%", height: "450px" }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829620.5379437963!2d2.0454046345998367!3d46.164657525368405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2260c8ebcba15387%3A0xca66a7f3a50f4a27!2sMon%20Petit%20Cul%20Broderie!5e0!3m2!1sfr!2sfr!4v1731944962472!5m2!1sfr!2sfr"
      width="100%"  
      height="100%" 
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map" 
    ></iframe>
  </div>
);

export default GoogleMap;
