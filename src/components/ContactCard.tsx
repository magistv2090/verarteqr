import { motion } from "motion/react";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

export const ContactCard = () => {
  const buttons = [
    { label: "WhatsApp", icon: <Phone size={24} />, href: "https://wa.me/593999372331?text=Gracias%20somos%20Verarte", color: "#25D366" },
    { label: "Facebook", icon: <Facebook size={24} />, href: "https://www.facebook.com/verarteloja.2012/", color: "#1877F2" },
    { label: "Instagram", icon: <Instagram size={24} />, href: "https://www.instagram.com/verarteloja/", color: "#E4405F" },
    { label: "TikTok", icon: <TikTokSVG />, href: "https://www.tiktok.com/@verarteloja", color: "#000000" },
    { label: "Google Maps", icon: <MapPin size={24} />, href: "http://maps.google.com/?q=Bernardo+Valdivieso+y+Miguel+Riofrio+Loja", color: "#E8505B" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden z-10"
    >
      <div className="bg-gradient-to-br from-[#F5A9A9] to-[#E8505B] p-10 text-center relative overflow-hidden">
        {/* Flores decorativas estáticas que flotan */}
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-5 left-5 text-2xl">🌸</motion.div>
        
        <motion.img 
          src="img/logo-verarte.png" 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0, y: [0, -8, 0] }}
          transition={{ y: { repeat: Infinity, duration: 2, ease: "easeInOut" }, duration: 0.8 }}
          className="w-32 h-32 mx-auto drop-shadow-2xl relative z-10"
        />
        <h2 className="text-white italic mt-3 text-lg z-10 relative">"En todos tus momentos"</h2>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-gray-500 text-[11px] text-center flex items-center justify-center gap-1">
          <MapPin size={12} /> Bernardo Valdivieso y Miguel Riofrío esquina
        </p>

        <div className="space-y-3">
          {buttons.map((btn, i) => (
            <motion.a
              key={i}
              href={btn.href}
              target="_blank"
              whileHover={{ scale: 1.03, x: 5 }}
              className="flex items-center p-4 bg-gray-50 rounded-2xl group hover:bg-gradient-to-r hover:from-[#F5A9A9] hover:to-[#E8505B] transition-all"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:rotate-[360deg] transition-transform duration-500" style={{ color: btn.color }}>
                {btn.icon}
              </div>
              <span className="ml-4 font-semibold text-gray-700 group-hover:text-white">{btn.label}</span>
            </motion.a>
          ))}
        </div>
      </div>

      <footer className="p-6 text-center border-t border-gray-50">
        <div className="flex justify-center gap-3 text-xl mb-1">
          <motion.span animate={{ rotate: [-10, 10] }} transition={{ repeat: Infinity, repeatType: "mirror", duration: 1 }}>🌿</motion.span>
          <span>🌹</span>
          <motion.span animate={{ rotate: [10, -10] }} transition={{ repeat: Infinity, repeatType: "mirror", duration: 1 }}>🌿</motion.span>
        </div>
        <p className="text-[10px] text-gray-400 tracking-widest">VERARTE LOJA</p>
      </footer>
    </motion.div>
  );
};

const TikTokSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.06 3.42-.01 6.83-.02 10.25-.12 2.85-1.96 5.5-4.69 6.41-2.93.99-6.39-.06-8.18-2.6-1.81-2.56-1.56-6.32.74-8.52 1.62-1.56 4.02-2.12 6.13-1.45.01-1.41 0-2.82.01-4.22-2.4-.41-4.94.13-6.93 1.56-2.58 1.83-3.6 5.25-2.45 8.21 1.05 2.71 3.79 4.67 6.67 4.75 3.32.18 6.42-2.13 7.09-5.38.11-4.48.02-8.97.03-13.45a7.8 7.8 0 0 1-4.14-1.41V.02z"/></svg>
);