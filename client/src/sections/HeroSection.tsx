'use client'
import SectionTitle from "../components/SectionTitle";
import { ArrowUpRight, ZapIcon, ThumbsUpIcon, PenSquareIcon } from "lucide-react";
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

            <div className="flex flex-wrap items-stretch justify-center gap-5 mt-16 px-6">
                {featuresData.map((feature: IFeature, index: number) => {
                    const Icon = iconMap[index] ?? ZapIcon;
                    return (
                        <motion.div
                            key={index}
                            className={`group relative p-6 rounded-xl space-y-4 border max-w-80 w-full transition-colors ${
                                index === 1
                                    ? "border-blue-600 bg-blue-950/20"
                                    : "border-slate-800 bg-slate-950 hover:border-slate-700"
                            }`}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
                            {index === 1 && (
                                <span className="absolute -top-3 left-6 text-xs font-medium bg-blue-600 text-white px-2.5 py-0.5 rounded-full">
                                    Most used
                                </span>
                            )}
                            <span className="flex items-center justify-center size-11 rounded-lg bg-blue-600/15 border border-blue-800">
                                <Icon size={20} className="text-blue-400" />
                            </span>
                            <h3 className="text-base font-medium text-white">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                                {feature.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>

            <div className="mt-32 relative mx-auto max-w-5xl">
                <div className="absolute -z-10 size-96 -top-10 -left-20 aspect-square rounded-full bg-blue-600/20 blur-[120px]"></div>

                <motion.p className="text-slate-300 text-lg text-left max-w-3xl"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    ThumbBot helps creators publish faster by turning a rough idea into a scroll-stopping, ready-to-upload thumbnail.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-6">
                    <motion.div
                        className="md:col-span-2 rounded-xl overflow-hidden border border-slate-800"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        <img className="h-full w-full object-cover" src="/assets/features-showcase-1.png" alt="features showcase" width={1000} height={500} />
                    </motion.div>

                    <motion.div className="md:col-span-1"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="rounded-xl overflow-hidden border border-slate-800 hover:border-blue-800 transition-colors">
                            <img src="/assets/features-showcase-2.png" alt="features showcase" width={1000} height={500} className="w-full h-auto hover:-translate-y-0.5 transition duration-300" />
                        </div>
                        <h3 className="text-xl text-white font-medium mt-6">Higher CTR, better watch time</h3>
                        <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                            ThumbBot gives you thumbnails built to convert, so more viewers click before they scroll past.
                        </p>
                        <a href="https://prebuiltui.com" className="group/link flex items-center gap-1.5 mt-4 text-blue-400 hover:text-blue-300 transition text-sm font-medium">
                            Learn more about the product
                            <ArrowUpRight className="size-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}