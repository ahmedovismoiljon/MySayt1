import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="page contact">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📩 Contact Me
      </motion.h1>

      {/* FORM CARD */}
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
      >
        <form className="form">

          {/* NAME */}
          <div className="input-group">
            <input type="text" required />
            <label>Name</label>
          </div>

          {/* EMAIL */}
          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>

          {/* MESSAGE */}
          <div className="input-group">
            <textarea required></textarea>
            <label>Message</label>
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send Message 🚀
          </motion.button>

        </form>
      </motion.div>

    </div>
  );
}