import Navbar from "./components/Navbar";
import { assets } from "./assets/assets";
import Image from "next/image";
/*
  1. Navigation bar
    - top or left side of screen
    - include company name "UVSA"
    - home, about, contact, donate
  2. Home page
    - photo from past event on left side of screen
    - description of the photo on the right side
  3. Image Swap Feature
    - probably use a carousel
    - at least 2 photos
    - at least 2 descriptions to switch between based on photos
    - a widget that can accodate switching between photos/descriptions
  4. Styling
*/


export default function Home() {
  return (
    <div>
      <Navbar />
      
      <div className="py-12 px-12 mt-16 relative flex flex-row items-center justify-center gap-12">
        {/* Left Image Content */}
        <div className="w-full flex justify-center">
          <Image src={assets["tetParade"]} alt="Tet Parade" />
        </div>

        {/* Right Text Content */}
        <div className="w-2/3 text-black">
          <h2>Description of the Tet Parade photo.</h2>
        </div>
      </div>
    </div>
  );
}
