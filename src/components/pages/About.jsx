import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="page about">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me 👨‍💻
      </motion.h1>

      {/* CARD */}
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <p>
          Eng: 
          I am currently learning programming 
          I currently have knowledge of: Html Css Js React  
                <br /> <br /> <br />  
        Uzb:
          Men xozirda dasturlashni o'rgan yabman 
          men xozirda : Html Css Js React dan xabarim bor
          🚀
        </p>
      </motion.div>

      {/* IMAGE */}
      <motion.img
        

      />

    </div>
  );
}