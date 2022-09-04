import React from "react";
import { Link } from "react-router-dom";
import { ContactUs } from "./Form";

const Submission = () => {
    return (
        <>
            <div className="max-w-5xl flex mt-8 justify-between mx-auto p-4">
                <div className="text-gray-700 font-semibold">
                    <Link to='/'>Home</Link>
                </div>
            </div>
            <div className="flex-col flex justify-center max-w-5xl mx-auto px-4 ">
                <h1 className="text-gray-700 text-center font-semibold headline max-w-5xl text-5xl mx-auto flex mt-8">Brand Submission </h1>
                <h3 className="text-gray-600 text-center font-light max-w-5xl text-xl mx-auto flex  mt-2">Together we can change the way we purchase products</h3>
            </div>

            <ContactUs />
        </>
    );
    }

    export default Submission;
