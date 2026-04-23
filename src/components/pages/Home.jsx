import profile from './me.jpg'
import { FaInstagram, FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";


function Home() {
  return (




    <div className="home">

      


      {/* LEFT */}
      <div className="left">
        <div className="avatar-bg">
          <img src={profile} alt="profile" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="right">
        <h1>
          Hi, I'm <span>Ahmedov ismoiljon</span> 👋
        </h1>

        <h2>I'm a Full Stack Developer.</h2>

        <div className="info">
          <p>☕ fueled by coffee</p>
          <p>🌍 based in the Uzbekistan</p>
          <p>💼 I am currently studying.</p>
          <p>📧 ahmedov@gmail.com</p>
        </div>

      <div className="icons">
<div className="social-icons">
<div className="iconlar">
      <a
        href="https://www.instagram.com/ahmedov_ismoiljon_?igsh=ZHF2dWx3bm9ld2M5"
        target="_blank"
        className="icon instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.facebook.com/share/1b62dTXzqR/"
        target="_blank"
        className="icon facebook"
      >
        <FaFacebook />
      </a>

      <a
        href="https://github.com/ahmedovismoiljon"
        target="_blank"
        className="icon github"
      >
        <FaGithub />
      </a>

      <a
        href="https://t.me/ahmedov_0802"
        target="_blank"
        className="icon telegram"
      >
        <FaTelegram />
      </a>
      

  </div>
        </div>
      </div>

</div>
</div>


  );
}

export default Home;





