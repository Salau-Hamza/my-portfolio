import React from "react"
import image from "../third.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="snow-image" className="absolute object-cover w-full h-full bg-opacity-50" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-8xl text-green-100 font-bold cursive">Aloha. I'm Shina.</h1>
            </section>
            
        </main>
    )
}