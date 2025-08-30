import tetParade from "./tetParade.jpg";
import logo from "./Logo.png";
import tetParade2 from "./tetParade2.png";
import expo from "./expo.png";

// To get the images, use:
// import { assets } from "../assets";
// then pass the name to the assets obj
// <img src={assets[props.imgName]} />

export const assets: {[key:string] : any} = {
    "tetParade" : tetParade,
    "logo" : logo,
    "tetParade2" : tetParade2,
    "expo" : expo,
}
