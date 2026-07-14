import { useEffect } from "react";
import { lenis } from "../lib/lenis";

export default function LenisScroll() {
    useEffect(() => {
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}