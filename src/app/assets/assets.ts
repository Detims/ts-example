import tetParade from "./tetParade.jpg";
import logo from "./Logo.png";
import lunarNight from "./lunarNight.jpg";

// To get the images, use:
// import { assets } from "../assets";
// then pass the name to the assets obj
// <img src={assets[props.imgName]} />

export const assets: {[key:string] : any} = {
    "tetParade" : tetParade,
    "logo" : logo,
    "lunarNight" : lunarNight,
}