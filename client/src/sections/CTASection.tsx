'use client'
import { ArrowRightIcon } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
    const navigate = useNavigate();

    return (
        <motion.div
            className="relative max-w-5xl py-16 mt-40 md:pl-20 md:w-full max-md:mx-4 md:mx-auto flex flex-col md:flex-row max-md:gap-6 items-center justify-between text-left border border-blue-800 bg-blue-950/20 rounded-2xl p-6 overflow-hidden"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            <div className="absolute -z-10 size-80 -top-20 -left-10 rounded-full bg-blue-600/20 blur-[120px]"></div>
            <div className="absolute -z-10 size-72 -bottom-20 -right-10 rounded-full bg-blue-500/10 blur-[100px]"></div>

            <div>
                <motion.h1 className="text-4xl md:text-[46px] md:leading-15 font-semibold text-white"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    Ready to try out this app?
                </motion.h1>
                <motion.p className="text-slate-400 text-lg mt-1"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
                >
                    Your next favourite tool is just one click away.
                </motion.p>
            </div>

            <motion.button
                onClick={() => navigate('/generate')}
                className="group flex items-center gap-2 px-10 py-3 text-white bg-blue-600 hover:bg-blue-500 active:scale-95 rounded-lg text-sm font-medium mt-4 transition-all shadow-lg shadow-blue-600/25 shrink-0"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                Get Started
                <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
        </motion.div>
    );
}