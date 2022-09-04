import React from "react";
import { Link } from "react-router-dom";


const About = () => {
    return (
        <>
            <div className="max-w-5xl flex mt-8 justify-between mx-auto p-4">
                <div className="text-gray-700 font-semibold">
                    <Link to={'/submit'}>Submit a Brand</Link>
                </div>
                <div className="text-gray-700 font-semibold">
                    <Link to='/'>Home</Link>
                </div>

            </div>
            <div className="max-w-5xl mx-auto px-4 ">
                <h1 className="text-gray-800 font-semibold headline max-w-5xl text-5xl mx-auto flex mt-16">Be Part Of The Solution, Not The Problem </h1>
                <h className="text-gray-700 font-semibold headline max-w-5xl text-4xl mx-auto flex mt-8">Shop More Sustainably </h>
                <h3 className="text-gray-600 font-light max-w-5xl text-xl mx-auto flex  mt-2">We aim to bring together consumers to be mindful of what companies they buy from.</h3>
                <h1 className="text-gray-700 font-semibold headline max-w-5xl text-4xl mx-auto flex mt-16">Project Potential</h1>
                <h3 className="text-gray-600 font-light max-w-5xl text-xl mx-auto flex  mt-2">Potential to be the place people come to share their favorite eco-friendly companies & find new eco-friendly places to shop.</h3>
               <h1 className="text-gray-700 font-semibold headline max-w-5xl text-2xl mx-auto flex mt-8">Next Steps </h1>
                <h3 className="text-gray-600 font-light max-w-5xl text-xl mx-auto flex  mt-2">Allow users to create an account.</h3>
                <h3 className="text-gray-600 font-light max-w-5xl text-xl mx-auto flex  mt-2">Allow users to submit companies for approval </h3>
                <h3 className="text-gray-600 font-light max-w-5xl text-xl mx-auto flex  mt-2">Allow users to vote for the company to be approved/rejected</h3>
                <h1 className="text-gray-700 font-semibold headline max-w-5xl text-2xl mx-auto flex mt-8">Further Steps </h1>
                <h3 className=" text-gray-600 font-light max-w-5xl text-xl mx-auto flex  mt-2">Allow users to upvote companies </h3>
                <h3 className=" text-gray-600 font-light max-w-5xl text-xl mx-auto flex  mt-2">Allow users to flag companies for greenwashing / toxicity</h3>
                <h3 className="text-gray-600 font-light max-w-5xl text-xl mx-auto flex  mt-2">Companies are given an overall score based on user votes</h3>
                <h3 className="text-gray-600 font-light max-w-5xl text-xl mx-auto flex  mt-2">Allow users to collect points for submitting/reviewing</h3>



        
            </div>
        </>
    );
    }

    export default About;
