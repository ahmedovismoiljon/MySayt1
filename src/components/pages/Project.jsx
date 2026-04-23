import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "Kod yozish — san'at 🎨",
  "Harakat qilgan yutadi 💪",
  "Bugun o‘rgan → ertaga master 🧠",
  "Hech qachon to‘xtama 🚀",
];

export default function Project() {


  const [quote, setQuote] = useState(quotes[0]);

  function changeQuote() {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  }

  return (


    <div className="page project">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🚀 QuoteCard Project
      </motion.h1>

      {/* CARD */}
      <AnimatePresence mode="wait">
        <motion.div
          key={quote}
          className="quote-box"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          {quote}
        </motion.div>
      </AnimatePresence>

      {/* BUTTON */}
      <motion.button
        onClick={changeQuote}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Generate Quote ⚡
      </motion.button>

     
 </div>



  );
}