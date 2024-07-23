import { TiThMenu } from "react-icons/ti";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <span className="mx-2 w-10 text-4xl text-purple-400">AC</span>
      </div>
      {/* Contents */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      
      </div>
      <TiThMenu/>
    </nav>
  );
};

export default Navbar;
