import { useEffect } from "react";

function useActiveLink() {
    useEffect(() => {
        const handleClick = (event) => {
            const navLinks = document.querySelectorAll(".nav-link");
            if (!navLinks) {
                return;
            }

            navLinks.forEach(link=>{
                if(!(link === event.target)){
                    link.classList.remove("active");
                }else{
                    link.classList.add("active");
                }
            });

            const offcanvas = document.querySelector("#offcanvasPortfolio");
            const closeBtn = document.querySelector(".btn-close");
            if(offcanvas && offcanvas.classList.contains("show")){
                closeBtn.click();
            }
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);
}

export default useActiveLink;