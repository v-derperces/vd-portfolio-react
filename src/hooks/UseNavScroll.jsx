import { useEffect } from "react";

function useNavScroll() {
    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector("nav");
            if (!nav) return;

            if (window.scrollY > 0) {
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
}

export default useNavScroll;