import logo from "../assets/DhoritriLogo.png"
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"

function Navbar() {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-32" src={logo} alt="Dhoritri Logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/ishrak-alam-0920b71b7/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Dhoritri" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/ishrak7o7/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar