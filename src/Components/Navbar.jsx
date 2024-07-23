import { TiThMenu } from "react-icons/ti";
import CV from "../../src/assets/AmitCV.pdf";

const Navbar = () => {
  function handleMenu() {
    console.log("CLickend Menu");
  }

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <span className="mx-2 w-10 text-4xl text-purple-400">AC</span>
      </div>
      {/* Contents */}
      <div className="hidden md:flex flex-grow justify-center">
        <div className="hidden md:flex items-center justify-center gap-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500  bg-clip-text text-transparent">
          <a href="#" className="hover:text-purple-800">
            Home
          </a>
          <a href="#" className="hover:text-purple-800">
            About Me
          </a>
          <a href="#" className="hover:text-purple-800">
            Skills
          </a>
          <a href="#" className="hover:text-purple-800">
            Experience
          </a>
          <a href="#" className="hover:text-purple-800">
            Projects
          </a>
          <a href="#" className="hover:text-purple-800">
            Contact Me
          </a>
        </div>
       
      </div>
      {/* Resume */}
      <div className="hidden md:flex items-center justify-center hover:bg-white p-2 rounded-lg ">
          <a
            href={CV}
            target="_blank" // for Opening the link in a new tab
            rel="noopener noreferrer" // for best security practice for external links
            className=" hover:text-purple-500"
            download="AmitCV.pdf" // for showing downloadedFile name
          >
            <h2 className="text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 hover:text-purple-900 bg-clip-text hover:bg-white text-center">
              Resume
            </h2>
          </a>
        </div>
      {/* Menu Icon */}
      <button
        className="hover:text-purple-800 md:hidden"
        onClick={handleMenu()}
      >
        <TiThMenu />
      </button>
    </nav>
  );
};

export default Navbar;
