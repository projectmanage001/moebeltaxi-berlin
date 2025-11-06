"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons() {
  const phoneNumber = "+4915771677034";
  const whatsappNumber = "4915771677034"; // + işareti yok

  return (
    <div className="floating-wrap">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        className="floating-btn fb-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yazın"
      >
        <FaWhatsapp className="fb-icon" />
      </a>

      {/* Telefon */}
      <a
        href={`tel:${phoneNumber}`}
        className="floating-btn fb-call"
        aria-label="Telefonla arayın"
      >
        <FaPhoneAlt className="fb-icon" />
      </a>
    </div>
  );
}