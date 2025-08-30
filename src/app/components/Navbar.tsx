import logo from "../assets/Logo.png";
import Image from "next/image";

export default function Navbar(): any {
    return(
        <nav className="fixed top-0 px-6 py-4 w-full flex items-center justify-between bg-stone-400 text-xl  shadow-xl">
            <Image className="w-12 h-12 mr-3" src={logo} alt="" />
            <a className="text-4xl" href="">UVSA</a>
            <ul className="w-full flex justify-center items-center gap-6 px-auto">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Donate</a></li>
            </ul>
        </nav>
    );
}