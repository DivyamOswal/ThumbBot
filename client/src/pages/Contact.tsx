'use client'
import SectionTitle from "../components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon, MessageSquareIcon, MapPinIcon, ClockIcon } from "lucide-react";
import { motion } from "motion/react";

const contactInfo = [
    { icon: MailIcon, label: "Email us", value: "support@thumbbot.app" },
    { icon: MapPinIcon, label: "Based in", value: "Pune, India" },
    { icon: ClockIcon, label: "Response time", value: "Within 24 hours" },
];

export default function Contact() {
    return (
        <div className="pt-10 pb-24">
            <div className="relative px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="absolute -z-10 size-96 top-0 left-1/2 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]"></div>

                <SectionTitle text1="Contact" text2="Reach out to us" text3="Ready to grow your brand? Let's connect and build something exceptional together." />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mt-16">
                    {contactInfo.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 flex items-center gap-4 hover:border-slate-700 transition-colors"
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                            >
                                <span className="flex items-center justify-center size-11 rounded-lg bg-blue-600/15 border border-blue-800 shrink-0">
                                    <Icon size={18} className="text-blue-400" />
                                </span>
                                <div>
                                    <p className="text-slate-500 text-xs">{item.label}</p>
                                    <p className="text-white text-sm font-medium mt-0.5">{item.value}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    className="relative max-w-2xl mx-auto mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8"
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 70, mass: 1 }}
                >
                    <div className="absolute -z-10 size-72 -top-10 -right-10 rounded-full bg-blue-600/10 blur-[100px]"></div>

                    <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-4 sm:gap-5 text-slate-300 w-full">
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
                            <p className="mb-2 font-medium text-white text-sm">Your name</p>
                            <div className="group flex items-center gap-2 pl-3 rounded-lg border border-slate-700 bg-black/40 transition-colors focus-within:border-blue-500">
                                <UserIcon className="size-4.5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                <input name="name" type="text" placeholder="Enter your name" className="w-full p-3 outline-none bg-transparent placeholder:text-slate-600" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                        >
                            <p className="mb-2 font-medium text-white text-sm">Email id</p>
                            <div className="group flex items-center gap-2 pl-3 rounded-lg border border-slate-700 bg-black/40 transition-colors focus-within:border-blue-500">
                                <MailIcon className="size-4.5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                <input name="email" type="email" placeholder="Enter your email" className="w-full p-3 outline-none bg-transparent placeholder:text-slate-600" />
                            </div>
                        </motion.div>

                        <motion.div className="sm:col-span-2"
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15, type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                        >
                            <p className="mb-2 font-medium text-white text-sm">Message</p>
                            <div className="group flex gap-2 pl-3 pt-3 rounded-lg border border-slate-700 bg-black/40 transition-colors focus-within:border-blue-500">
                                <MessageSquareIcon className="size-4.5 text-slate-500 group-focus-within:text-blue-400 transition-colors shrink-0 mt-0.5" />
                                <textarea name="message" rows={6} placeholder="Enter your message" className="resize-none w-full p-3 pl-0 outline-none bg-transparent placeholder:text-slate-600" />
                            </div>
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="group sm:col-span-2 w-max flex items-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg shadow-blue-600/25"
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                        >
                            Submit
                            <ArrowRightIcon className="size-4.5 group-hover:translate-x-0.5 transition-transform" />
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}