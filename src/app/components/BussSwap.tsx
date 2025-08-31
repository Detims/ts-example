'use client'
import tetParade from "../assets/tetParade.jpg";
import tetParade2 from "../assets/tetParade2.png";
import expo from "../assets/expo.png";

import Image from "next/image";
import { assets } from "../assets/assets";
import { useState } from "react";

export default function BussSwap(): any {
    const photos : Array<any> = [tetParade, tetParade2, expo];
    const descriptions : Array<string> = [];
    const [index, setIndex] = useState(0);

    const increaseIndex = () => {
        setIndex((index + 1) % photos.length);
    };

    const decreaseIndex = () => {
        index === 0 ? setIndex(photos.length - 1) : setIndex(index - 1); 
    };

    return(
        <div className='py-12 px-6 mt-12 relative flex flex-row items-center justify-center gap-12'>
            <button 
                className="rounded-full h-10 w-10 text-center"
                onClick={decreaseIndex}
            >&lt;</button>
            <Image className='w-3/5' src={photos[index]} alt=""/>
            <h1 className="w-1/5">Description {index}</h1>
            <button 
                className="rounded-full h-10 w-10 text-center"
                onClick={increaseIndex}
            >&gt;</button>
        </div>
    )   
};