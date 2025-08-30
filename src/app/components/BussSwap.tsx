'use client'
import tetParade from "../assets/tetParade.jpg";
import tetParade2 from "../assets/tetParade2.png";

import Image from "next/image";
import { assets } from "../assets/assets";
import { useState } from "react";

export default function BussSwap(): any {
    const photos : Array<any> = [tetParade, tetParade2];
    const [index, setIndex] = useState(0);

    const changeIndex = () => {
        setIndex((index + 1) % photos.length);
    };

    return(
        <div className='py-12 px-6 mt-12 relative flex flex-row items-center justify-center gap-12'>
            <Image className='w-2/3' src={tetParade} alt=""/>
            <h1 className="w-1/3">Description</h1>
        </div>
    )   
};