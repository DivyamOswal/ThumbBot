'use client'
import SectionTitle from "../components/SectionTitle";
import { ZapIcon, ThumbsUpIcon, PenSquareIcon } from "lucide-react";
import { motion } from "motion/react";
import { featuresData } from "../data/features";
import type { IFeature } from "../types";

const iconMap: Record<number, React.ElementType> = {
    0: ZapIcon,
    1: ThumbsUpIcon,
    2: PenSquareIcon,
};

export default function FeaturesSection() {
    return (
        <div id="features" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="Features" text2="Why use our generator" text3="Create stunning thumbnails that get clicks, without the hassle." />

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
                <div className="absolute -z-10 size-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]"></div>

                {featuresData.map((feature: IFeature, index: number) => {
                    const Icon = iconMap[index] ?? ZapIcon;
                    const isHighlighted = index === 1;
                    return (
                        <motion.div
                            key={index}
                            className={`group relative rounded-2xl p-7 border transition-all hover:-translate-y-1 ${
                                isHighlighted
                                    ? "border-blue-600 bg-blue-950/20 shadow-[0_0_50px_-20px_rgba(37,99,235,0.6)]"
                                    : "border-slate-800 bg-slate-950 hover:border-slate-700"
                            }`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, type: "spring", stiffness: 260, damping: 70, mass: 1 }}
                        >
                            {isHighlighted && (
                                <span className="absolute top-5 right-6 text-[10px] font-mono tracking-wider text-blue-400 uppercase">
                                    Most used
                                </span>
                            )}

                            <span className={`flex items-center justify-center size-12 rounded-xl border transition-colors ${
                                isHighlighted
                                    ? "bg-blue-600/20 border-blue-700"
                                    : "bg-blue-600/15 border-blue-800 group-hover:bg-blue-600/25"
                            }`}>
                                <Icon size={20} className={isHighlighted ? "text-blue-300" : "text-blue-400"} />
                            </span>

                            <h3 className="text-lg font-medium text-white mt-5">
                                {feature.title}
                            </h3>
                            <p className={`text-sm mt-2 leading-relaxed ${isHighlighted ? "text-slate-300" : "text-slate-400"}`}>
                                {feature.description}
                            </p>

                            <div className={`mt-6 h-px w-full ${isHighlighted ? "bg-blue-800/60" : "bg-slate-800"}`}></div>

                            <p className="mt-4 text-xs font-mono text-slate-600">
                                0{index + 1} / 03
                            </p>
                        </motion.div>
                    );
                })}
            </div>

            <motion.div
                className="relative mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 px-8 py-10 md:py-12 max-w-5xl mx-auto text-center overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 70, mass: 1 }}
            >
                <div className="absolute -z-10 size-64 -top-20 left-1/2 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[100px]"></div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 bg-blue-950/50 border border-blue-900 rounded-full px-3 py-1">
                    <span className="size-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    generated in 4.2s
                </span>
                <p className="text-white text-xl md:text-2xl font-medium mt-5 max-w-lg mx-auto">
                    One prompt in, a click-worthy thumbnail out.
                </p>
                <p className="text-slate-400 text-sm mt-3 max-w-md mx-auto">
                    ThumbBot handles the design decisions so you can focus on making great videos.
                </p>
            </motion.div>
        </div>
    );
}