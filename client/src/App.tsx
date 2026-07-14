import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Generate from "./pages/Generate";
import MyGenration from "./pages/MyGenration";
import Ytpreview from "./pages/Ytpreview";
import Login from "./pages/Login";
import { useEffect } from "react";

export default function App() {
  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // or "smooth"
        });
    }, [pathname]);
    const isLoginPage = pathname === "/login";

    return (
        <>
            <LenisScroll />

            {!isLoginPage && <Navbar />}

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/generate" element={<Generate />} />
                <Route path="/generate/:id" element={<Generate />} />
                <Route path="/my-generation" element={<MyGenration />} />
                <Route path="/preview" element={<Ytpreview />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>

            {!isLoginPage && <Footer />}
        </>
    );
}