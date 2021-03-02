import React from "react"
import Typical from "react-typical"
import fourth from "../fourth.jpg"
import design from "../design.svg"

export default function Home() {
    return (
        <main className="">
            
            <section className="min-h-screen text-opacity-50">
                <div className="text-center pt-10 lg:pt-20 px-8">
                <h1 className="text-3xl font-bold lg:text-5xl">
                    Designer. Front-End Developer. Mentee.
                </h1>
                <h3 className="text-1xl lg:text-3xl pt-6">
                    I code and design well rendered websites for a living. It's an exciting job.
                </h3>
                </div>
                <div className="flex justify-center">
                <img src={design} className="rounded-full border-4 border-transparent hover:border-indigo-400 svg pt-5" alt="design"/>    
                </div>
                <div className="w-full bg-blue-500 lg:h-full h-80">
                <div className="text-center p-4 pt-12 lg:px-60 lg:py-40 space-x-1 lg:space-x-3 text-white">
                    <p className="text-2xl font-bold lg:text-3xl">Hi, I'm Hamza. Welcome to my page. </p>
                    <h3 className="text-1xl lg:text-2xl mt-4 pt-4">I started this journey about two years ago and I've not looked back since then. I've done a couple of freelance for startups and collaborated with talented people to create digital products for both business and personal use.</h3>
                </div>
                </div>
                
                <div className="flex flex-wrap -mx-1 lg:-mx-6 bg-blue-100 items-center lg:p-8">
                    <div className=" px-10 w-full md:w-1/2 lg:my-1 lg:px-10 py-6 lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg shadow-xl block text-center">
                        <h3 className="font-bold text-1xl">Dev Tools</h3>
                        <ul className="mt-4">
                            <li>Github</li>
                            <li>Codepen</li>
                            <li>Visual Studio Code</li>
                        </ul>
                        </div>
                    </div>
                    <div className="px-10 w-full md:w-1/2 lg:my-1 lg:px-10 py-6 lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg shadow-xl block text-center">
                        <h3 className="font-bold text-1xl">Languages I Speak</h3>
                        <ul className="mt-4">
                            <li>Vanilla Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                        </div>
                    </div>
                    <div className="px-10 w-full md:w-1/2 lg:my-1 lg:px-10 py-6 lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg shadow-xl block text-center">
                        <h3 className="font-bold text-1xl">Frameworks & Libraries</h3>
                        <ul className="mt-4">
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                        </ul>
                        </div>
                    </div>
                    
                </div>
            

            </section>
            
        
        </main>
    )
}