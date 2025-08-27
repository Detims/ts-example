export default function Navbar() {
    return(
        <nav className="fixed top-0 px-6 py-6 w-full flex items-center justify-between bg-stone-400 text-xl">
            <a href="">UVSA</a>
            <ul className="w-full flex justify-center items-center gap-6 px-auto">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Donate</a></li>
            </ul>
        </nav>
    );
}