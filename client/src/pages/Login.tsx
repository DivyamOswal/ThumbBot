import { useState } from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { MailIcon, LockIcon, UserIcon, EyeIcon, EyeOffIcon, SparklesIcon } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    password: string;
}

export default function Login() {
    const navigate = useNavigate();
    const [state, setState] = useState<"login" | "register">("login");
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/generate");
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden">
            {/* Soft backdrop */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute left-1/2 top-20 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[140px]" />
                <div className="absolute right-12 bottom-10 w-72 h-56 bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_50%,transparent_100%)]" />
            </div>

            <motion.form
                onSubmit={handleSubmit}
                className="relative w-full sm:w-87.5 max-w-md text-center bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-2xl px-8 py-10 shadow-2xl"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 70, mass: 1 }}
            >
                <Link to={"/"} className="flex items-center justify-center gap-2 mb-6">
                    <span className="flex items-center justify-center size-9 rounded-lg bg-blue-600/15 border border-blue-800">
                        <SparklesIcon size={16} className="text-blue-400" />
                    </span>
                    <span className="text-lg font-semibold text-white">ThumbBot</span>
                </Link>

                <h1 className="text-white text-2xl font-semibold">
                    {state === "login" ? "Welcome back" : "Create your account"}
                </h1>
                <p className="text-slate-400 text-sm mt-2">
                    {state === "login" ? "Please sign in to continue" : "Start generating thumbnails that get clicks"}
                </p>

                {state !== "login" && (
                    <div className="group flex items-center mt-6 w-full bg-black/40 ring-1 ring-slate-700 focus-within:ring-blue-500 h-12 rounded-full overflow-hidden pl-5 gap-2 transition-all">
                        <UserIcon size={16} className="text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full bg-transparent text-white placeholder-slate-600 border-none outline-none text-sm"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}

                <div className="group flex items-center w-full mt-4 bg-black/40 ring-1 ring-slate-700 focus-within:ring-blue-500 h-12 rounded-full overflow-hidden pl-5 gap-2 transition-all">
                    <MailIcon size={16} className="text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email id"
                        className="w-full bg-transparent text-white placeholder-slate-600 border-none outline-none text-sm"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="group flex items-center mt-4 w-full bg-black/40 ring-1 ring-slate-700 focus-within:ring-blue-500 h-12 rounded-full overflow-hidden pl-5 pr-4 gap-2 transition-all">
                    <LockIcon size={16} className="text-slate-500 group-focus-within:text-blue-400 transition-colors shrink-0" />
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="w-full bg-transparent text-white placeholder-slate-600 border-none outline-none text-sm"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-slate-500 hover:text-slate-300 transition shrink-0"
                    >
                        {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                    </button>
                </div>

                {state === "login" && (
                    <div className="mt-4 text-left">
                        <Link to={"/forgot-password"} className="text-sm text-blue-400 hover:text-blue-300 hover:underline transition">
                            Forgot password?
                        </Link>
                    </div>
                )}

                <button
                    type="submit"
                    className="mt-5 w-full h-11 rounded-full text-white font-medium bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all shadow-lg shadow-blue-600/25"
                >
                    {state === "login" ? "Login" : "Sign up"}
                </button>

                <p
                    onClick={() => setState((prev) => (prev === "login" ? "register" : "login"))}
                    className="text-slate-400 text-sm mt-4 cursor-pointer"
                >
                    {state === "login" ? "Don't have an account?" : "Already have an account?"}
                    <span className="text-blue-400 hover:underline ml-1">click here</span>
                </p>
            </motion.form>
        </div>
    );
}