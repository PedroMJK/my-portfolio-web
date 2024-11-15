
import { FaGithub, FaLinkedin } from "react-icons/fa"
import logo from "../assets/p-icon.ico"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-2" width={50} height={32} alt="logo" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/pedro-monteiro-3173b8241/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaLinkedin />
            </a>
            <a href="https://github.com/PedroMJK"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                    <FaGithub />
            </a>
            
        </div>
    </nav>
  )
}

export default Navbar