import { StaticImageData } from "next/image";
import photo1 from "./photos/photo1.jpg";
import photo2 from "./photos/photo2.jpg";
import photo3 from "./photos/photo3.jpg";
import photo4 from "./photos/photo4.jpg";
import photo5 from "./photos/photo5.jpg";
import photo6 from "./photos/photo6.jpg";
import photo7 from "./photos/photo7.jpg";

export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string;
};

const WondersImages: WonderImage[] = [
    {
        id: "1",
        name: "One Photo",
        src: photo1,
        photographer: "Bebeni",
        location: "Kenya"
    },
    {
        id: "2",
        name: "Two Photo",
        src: photo2,
        photographer: "Bebeni",
        location: "Kenya"
    },
    {
        id: "3",
        name: "Three Photo",
        src: photo3,
        photographer: "Bebeni",
        location: "Kenya"
    },
    {
        id: "4",
        name: "Four Photo",
        src: photo4,
        photographer: "Bebeni",
        location: "Kenya"
    },
    {
        id: "5",
        name: "Five Photo",
        src: photo5,
        photographer: "Bebeni",
        location: "Kenya"
    },
    {
        id: "6",
        name: "Six Photo",
        src: photo6,
        photographer: "Bebeni",
        location: "Kenya"
    },
    {
        id: "7",
        name: "Seven Photo",
        src: photo7,
        photographer: "Bebeni",
        location: "Kenya"
    },
]