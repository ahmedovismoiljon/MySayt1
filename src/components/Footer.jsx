import Navbar from "./Navbar";

function Footer({ children }) {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
}

export default Footer;