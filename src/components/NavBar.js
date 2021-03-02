import React from "react";
import { NavLink } from "react-router-dom";
import  { SocialIcon } from "react-social-icons"
import menu from "../menu.png"

export default function NavBar() {
    return (
        <header className="header lg:px-16 px-6 flex flex-wrap items-center">
            <div className="flex-1 flex justify-between items center">
                <NavLink to="/" exact activeClassName="text-red" className="inflex-flex items-center py-6 px-3 mr-4 text-black text-4xl font-bold cursive tracking-widest">
                    Shina
                </NavLink>
            </div>
            
            <label for="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
            <input className="hidden" type="checkbox" id="menu-toggle" />
            <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <nav className="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
                    <NavLink to ="/post" className="inflex-flex items-center py-3 my-6 px-3 mr-4 text-black hover:text-black font-bold tracking-widest block" activeClassName="text-red-500">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" className="inflex-flex items-center py-3 my-6 px-3 mr-4 text-black hover:text-black font-bold tracking-widest block" activeClassName="text-red-500">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="inflex-flex items-center py-3 my-6 px-3 mr-4 hover:text-black font-bold tracking-widest block" activeClassName="text-red-500">
                        About Me!
                    </NavLink>
                </nav>
                
                <div className="inline-flex py-3 px-3 my-6 social-icons">
                    <SocialIcon url="https://twitter.com" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://github.com" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://linkedIn.com/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}