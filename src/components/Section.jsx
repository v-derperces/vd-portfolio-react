import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Section({children, id, title}) {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 600});
    }, []);
    return (
        <section id={id} data-aos="fade-up">
            <div className="text-center text-sm-start">
                <h2 className="fs-1 mb-4 mb-lg-5">
                    <span className="gradient">{title}</span>
                </h2>
                {children}
            </div>
        </section>
    );
}

export default Section;
