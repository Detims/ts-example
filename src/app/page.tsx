import Navbar from "./components/Navbar";
import { assets } from "./assets/assets";
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
      <img src={assets["tetParade"]}/>
    </div>
  );
}
