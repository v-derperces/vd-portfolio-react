import React from 'react';

function ButtonTag(props) {
    return (
            <span
                className="stack-button px-2 py-1 fw-semibold text-white text-uppercase rounded-5">
                {props.name}
            </span>
    );
}

export default ButtonTag;
