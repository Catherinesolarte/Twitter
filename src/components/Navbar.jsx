// Navbar.js
import { FaTwitter } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="bg-blue-500 p-4 flex justify-center w-full">
            {/* Icono de Twitter en la barra de navegación */}
            <FaTwitter size={30} className="text-white" />
        </nav>
    );
}

export default Navbar;
