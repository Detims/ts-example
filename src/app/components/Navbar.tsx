import logo from "../assets/Logo.png";
import Image from "next/image";

export default function Navbar(): any {
    return(
        <nav className="fixed top-0 px-6 py-4 w-full flex items-center justify-between bg-stone-400 text-xl  shadow-xl">
            <Image className="w-12 h-12 mr-3" src={logo} alt="" />
            <a className="text-4xl hover:text-white" href="">UVSA</a>
            <ul className="w-full flex justify-center items-center gap-6 mr-60">
                <li><a href="" className="hover:text-white">Home</a></li>
                <li><a href="" className="hover:text-white">About</a></li>
                <li><a href="" className="hover:text-white">Contact</a></li>
                <li><a href="" className="hover:text-white">Donate</a></li>
            </ul>
        </nav>
    );
}