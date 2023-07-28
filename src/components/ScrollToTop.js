import React from "react";
import './ScrollToTop.scss';

function ScrollToTop(props) {

    const scrollOnClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return <div className={`ScrollToTop ${props.showComponent ? 'scroll-active' : null}`}
        onClick={scrollOnClick}>
        <svg width="60px" height="60px" viewBox="-0.8 -0.8 17.60 17.60" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" strokeWidth="0.00016"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_iconCarrier"> <path fill="#000000" fillRule="evenodd" d="M8,5.58578 L11.7071,9.29289 C12.0976,9.68342 12.0976,10.3166 11.7071,10.7071 C11.3466385,11.0675615 10.7793793,11.0952893 10.3871027,10.7902834 L10.2929,10.7071 L9,9.41421 L9,15 C9,15.5523 8.55229,16 8,16 C7.48716857,16 7.06449347,15.613973 7.0067278,15.1166239 L7,15 L7,9.41421 L5.70711,10.7071 C5.31658,11.0976 4.68342,11.0976 4.29289,10.7071 C3.93241,10.3466385 3.90468077,9.77939633 4.20970231,9.3870988 L4.29289,9.29289 L8,5.58578 Z M8,0 C9.10457,0 10,0.895431 10,2 C10,3.10457 9.10457,4 8,4 C6.89543,4 6,3.10457 6,2 C6,0.895431 6.89543,0 8,0 Z"></path> </g>
        </svg>



    </div>
}

export default ScrollToTop;