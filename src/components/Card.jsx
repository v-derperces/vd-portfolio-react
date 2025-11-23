import React from 'react';
import ButtonTag from "./ButtonTag.jsx";

function Card({data}) {
    return (
        <div className="p-3 rounded-1 shadow-lg flip-card w-100" data-aos="fade-up">
            <h3 className="fw-bold mb-4">{data.name}</h3>
            <div className="position-relative flip-card-inner">
                {/* Front*/}
                <div className="position-absolute top-0 bottom-0 w-100 flip-card-front">
                    <img src={data.imageSrc} alt="Image du projet"/>
                </div>

                {/* Back*/}
                <div className="position-absolute top-0 bottom-0 w-100 flip-card-back">
                    <p className="text-lg text-muted mb-3">{data.description}</p>
                    <div className="text-end">
                        <a href={data.link} className="project-link me-2">See project</a>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                </div>
            </div>
            <div className="position-relative overflow-hidden pt-3">
                <div className="stack-container position-relative d-flex flex-wrap justify-content-center gap-2">
                    {data.stack.map((data, index) => (
                        <ButtonTag key={index} name={data}/>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Card;
