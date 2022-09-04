import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
            <div className="max-w-5xl flex mt-8 justify-between mx-auto p-4 text-gray-700 font-semibold">
                <Link to={'/submit'}>Submit a Brand</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="max-w-5xl mx-auto px-4 ">
                <h1 className="text-gray-700 font-bold headline max-w-5xl text-5xl mx-auto flex mt-8">Just Sustainable Companies.</h1>
                <h3 className="text-gray-600 font-light max-w-5xl text-xl mx-auto flex  mt-2">A collection of sustainable consumer goods companies that have minimal impact on the environment. </h3>
            </div>
        </>
    );
    }

    export default Header;
