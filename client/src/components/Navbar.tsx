import { MenuIcon, XIcon, SparklesIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { navlinks } from "../data/navlinks";
import type { INavLink } from "../types";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    return (
        <>
            <motion.nav className="fixed top-0 z-50 flex items-center justify-between w-full py-3.5 px-6 md:px-16 lg:px-24 xl:px-32 bg-black/60 backdrop-blur-md border-b border-white/10"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <Link to={'/'} className="flex items-center gap-2.5">
                    <span className="text-lg font-semibold text-white tracking-tight">
                        ThumbBot
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-1 text-sm font-medium bg-white/5 border border-white/10 rounded-full p-1">
                    <NavLink to={'/'} className={({isActive}) => `px-4 py-1.5 rounded-full transition-colors ${isActive ? "bg-blue-600 text-white" : "text-slate-300 hover:text-white"}`}>Home</NavLink>
                    <NavLink to={'/generate'} className={({isActive}) => `px-4 py-1.5 rounded-full transition-colors ${isActive ? "bg-blue-600 text-white" : "text-slate-300 hover:text-white"}`}>Generate</NavLink>
                    <NavLink to={'/my-generation'} className={({isActive}) => `px-4 py-1.5 rounded-full transition-colors ${isActive ? "bg-blue-600 text-white" : "text-slate-300 hover:text-white"}`}>My Generations</NavLink>
                    <NavLink to={'/contact'} className={({isActive}) => `px-4 py-1.5 rounded-full transition-colors ${isActive ? "bg-blue-600 text-white" : "text-slate-300 hover:text-white"}`}>Contact</NavLink>
                </div>

                <div className="flex items-center gap-3">
                    <button onClick={()=> navigate('/login')} className="group hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all rounded-lg text-white">
                        Get Started
                        <ArrowRightIcon size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <button onClick={() => setIsOpen(true)} className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 active:scale-90 transition">
                        <MenuIcon size={22} />
                    </button>
                </div>
            </motion.nav>

            <div className={`fixed inset-0 z-100 bg-black flex flex-col items-center justify-center gap-8 text-lg md:hidden transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_60%,transparent_100%)]"></div>
                <div className="absolute top-1/3 -z-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>

                <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 flex items-center justify-center size-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 active:scale-90 transition text-white">
                    <XIcon size={20} />
                </button>

                <div className="flex flex-col items-center gap-6">
                    <NavLink onClick={()=> setIsOpen(false)} to={'/'} className={({isActive}) => `text-2xl font-medium transition-colors ${isActive ? "text-blue-400" : "text-slate-200 hover:text-white"}`}>Home</NavLink>
                    <NavLink onClick={()=> setIsOpen(false)} to={'/generate'} className={({isActive}) => `text-2xl font-medium transition-colors ${isActive ? "text-blue-400" : "text-slate-200 hover:text-white"}`}>Generate</NavLink>
                    <NavLink onClick={()=> setIsOpen(false)} to={'/my-generation'} className={({isActive}) => `text-2xl font-medium transition-colors ${isActive ? "text-blue-400" : "text-slate-200 hover:text-white"}`}>My Generations</NavLink>
                    <NavLink onClick={()=> setIsOpen(false)} to={'/contact'} className={({isActive}) => `text-2xl font-medium transition-colors ${isActive ? "text-blue-400" : "text-slate-200 hover:text-white"}`}>Contact</NavLink>
                </div>

                <button onClick={() => { setIsOpen(false); navigate('/login') }} className="flex items-center gap-1.5 px-8 py-3 bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all rounded-lg text-white font-medium">
                    Login
                    <ArrowRightIcon size={16} />
                </button>
            </div>
        </>
    );
}