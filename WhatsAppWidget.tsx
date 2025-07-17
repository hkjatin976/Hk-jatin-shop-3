import React from "react";

interface WhatsAppProps {
  phoneNumber: string;
}

const WhatsAppWidget: React.FC<WhatsAppProps> = ({ phoneNumber }) => {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
    >
      WhatsApp
    </a>
  );
};

export default WhatsAppWidget;