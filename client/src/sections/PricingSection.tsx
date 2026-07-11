'use client'
import SectionTitle from "../components/SectionTitle"
import { pricingData } from "../data/pricing";
import type { IPricing } from "../types";
import { CheckIcon, SparkleIcon } from "lucide-react";
import { motion } from "motion/react";

export default function PricingSection() {
    return (
        <div id="pricing" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="Pricing" text2="Our Pricing Plans" text3="Flexible pricing options designed to meet your needs whether you're just getting started or scaling up." />

            <div className="relative flex flex-wrap items-stretch justify-center gap-6 mt-20">
                <div className="absolute -z-10 size-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]"></div>

                {pricingData.map((plan: IPricing, index: number) => (
                    <motion.div
                        key={index}
                        className={`group relative w-72 text-left border p-7 rounded-2xl transition-all hover:-translate-y-1 ${
                            plan.mostPopular
                                ? "border-blue-600 bg-blue-950/20 shadow-[0_0_50px_-20px_rgba(37,99,235,0.6)]"
                                : "border-slate-800 bg-slate-950 hover:border-slate-700"
                        }`}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {plan.mostPopular && (
                            <span className="absolute -top-3 left-6 text-xs font-medium bg-blue-600 text-white px-2.5 py-0.5 rounded-full">
                                Most Popular
                            </span>
                        )}

                        <span className={`flex items-center justify-center size-11 rounded-lg border transition-colors ${
                            plan.mostPopular
                                ? "bg-blue-600/20 border-blue-700"
                                : "bg-blue-600/15 border-blue-800 group-hover:bg-blue-600/25"
                        }`}>
                            <SparkleIcon size={18} className={plan.mostPopular ? "text-blue-300" : "text-blue-400"} />
                        </span>

                        <p className="font-medium text-white mt-5">{plan.name}</p>
                        <h1 className="text-3xl font-semibold text-white mt-1">
                            ₹{plan.price}
                            <span className="text-slate-500 font-normal text-sm">/{plan.period}</span>
                        </h1>

                        <div className="h-px w-full bg-slate-800 mt-6"></div>

                        <ul className="list-none text-slate-300 mt-6 space-y-3 text-sm">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2.5">
                                    <CheckIcon className="size-4 text-blue-400 shrink-0" />
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>

                        <button
                            type="button"
                            className={`w-full py-2.5 rounded-lg font-medium mt-8 transition-all active:scale-95 ${
                                plan.mostPopular
                                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                                    : "bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200"
                            }`}
                        >
                            Get Started
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}