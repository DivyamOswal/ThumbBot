'use client'
import SectionTitle from "../components/SectionTitle";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ZapIcon, TargetIcon, UsersIcon, ArrowRightIcon, SparklesIcon } from "lucide-react";

const stats = [
    { label: "Thumbnails generated", value: "120K+" },
    { label: "Active creators", value: "8,500+" },
    { label: "Avg. generation time", value: "4.2s" },
    { label: "Uptime", value: "99.9%" },
];

const values = [
    {
        icon: ZapIcon,
        title: "Speed first",
        description: "Every decision we make starts with one question: does this make thumbnail creation faster?",
    },
    {
        icon: TargetIcon,
        title: "Built for clicks",
        description: "We study what actually drives CTR, not just what looks nice, and bake that into every template.",
    },
    {
        icon: UsersIcon,
        title: "Creator-led",
        description: "Every feature ships because creators asked for it. Your feedback shapes the roadmap directly.",
    },
];

export default function About() {
    const navigate = useNavigate();

    return (
        <div className="pt-40 pb-24">
            {/* Header */}
            <div className="relative px-4 md:px-16 lg:px-24 xl:px-32 text-center">
                <div className="absolute -z-10 size-96 top-0 left-1/2 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]"></div>

                <motion.div
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 bg-blue-950/50 border border-blue-900 rounded-full px-3 py-1"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <SparklesIcon size={12} />
                    About ThumbBot
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-5xl font-semibold text-white max-w-2xl mx-auto mt-6"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    We're building the fastest way to make a thumbnail people actually click
                </motion.h1>

                <motion.p
                    className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mt-5"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    ThumbBot started with a simple frustration: great videos were getting buried behind bad thumbnails. So we built an AI that closes that gap in seconds, not hours.
                </motion.p>
            </div>

            {/* Stats */}
            <div className="px-4 md:px-16 lg:px-24 xl:px-32 mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center rounded-2xl border border-slate-800 bg-slate-950 py-6 px-4 hover:border-slate-700 transition-colors"
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                        >
                            <p className="text-2xl md:text-3xl font-semibold text-blue-400">{stat.value}</p>
                            <p className="text-slate-500 text-xs md:text-sm mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Story */}
            <div className="px-4 md:px-16 lg:px-24 xl:px-32 mt-28">
                <div className="max-w-3xl mx-auto space-y-5 text-slate-300 leading-relaxed">
                    <motion.p
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 260, damping: 70, mass: 1 }}
                    >
                        Most creators aren't designers, and most designers aren't creators. That gap used to mean hours in Photoshop, or paying someone else to make a thumbnail for a video that might only take you twenty minutes to edit.
                    </motion.p>
                    <motion.p
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 70, mass: 1 }}
                    >
                        ThumbBot removes that gap entirely. Describe your video, pick a style, and our model handles composition, typography, and contrast the things that actually decide whether someone clicks or scrolls past.
                    </motion.p>
                </div>
            </div>

            {/* Values */}
            <div className="px-4 md:px-16 lg:px-24 xl:px-32 mt-28">
                <SectionTitle text1="Our Values" text2="What drives us" text3="The principles behind every feature we ship." />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={index}
                                className="rounded-2xl border border-slate-800 bg-slate-950 p-7 hover:border-slate-700 transition-colors"
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 70, mass: 1 }}
                            >
                                <span className="flex items-center justify-center size-11 rounded-lg bg-blue-600/15 border border-blue-800">
                                    <Icon size={20} className="text-blue-400" />
                                </span>
                                <h3 className="text-base font-medium text-white mt-5">{value.title}</h3>
                                <p className="text-slate-400 text-sm mt-2 leading-relaxed">{value.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* CTA */}
            <motion.div
                className="relative max-w-5xl mt-28 md:pl-20 md:w-full max-md:mx-4 md:mx-auto flex flex-col md:flex-row max-md:gap-6 items-center justify-between text-left border border-blue-800 bg-blue-950/20 rounded-2xl p-6 py-16 overflow-hidden"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 70, mass: 1 }}
            >
                <div className="absolute -z-10 size-80 -top-20 -left-10 rounded-full bg-blue-600/20 blur-[120px]"></div>

                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-white">Ready to see it for yourself?</h2>
                    <p className="text-slate-400 text-base mt-2">Generate your first thumbnail free, no card required.</p>
                </div>

                <button
                    onClick={() => navigate('/generate')}
                    className="group flex items-center gap-2 px-8 py-3 text-white bg-blue-600 hover:bg-blue-500 active:scale-95 rounded-lg text-sm font-medium transition-all shadow-lg shadow-blue-600/25 shrink-0"
                >
                    Get Started
                    <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
            </motion.div>
        </div>
    );
}